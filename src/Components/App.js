import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Spinner from './Spinner';
import Header from './Header';
import HeaderFavorites from './HeaderFavorites';
import City from './City';
import FavoritesList from './FavoritesList';
import axios from 'axios';

const apiKey = '4eb2a505a495b93451e7abc17924062b';

const defaultCity = {
  id: 2643743,
  name: "London",
  country: "GB",
  lon: -0.12574,
  lat: 51.50853,
  isFavorite: false
};

const initialState = {
  ...defaultCity,
  weather: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  loading: true,
  error: false
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
    this.searchClick = this.searchClick.bind(this);
    this.favoritesHandler = this.favoritesHandler.bind(this);
    this.showFavoriteCity = this.showFavoriteCity.bind(this);
    this.loadDefaultCity = this.loadDefaultCity.bind(this);
  }
  fetchData(method){
    this.setState({
      loading: true,
      error: false
    });
    let url;
    switch (method.name) {
      case 'geo' : {
        url = `https://api.openweathermap.org/data/2.5/forecast?lat=${method.lat}&lon=${method.lon}&appid=${apiKey}`;
        break;
      }
      case 'id' : {
        url = `https://api.openweathermap.org/data/2.5/forecast?id=${method.id}&appid=${apiKey}`;
        break;
      }
      case 'query' : {
        url = `https://api.openweathermap.org/data/2.5/forecast?q=${method.query}&appid=${apiKey}`;
        break;
      }
      default : throw new Error(
        `Wrong fetching data method detected, expected geo/id/query in method's name, got ${method.name}`
      );
    }
    axios.get(url)
      .then((response) => {
        this.setState((state) => {
          return {
            id: response.data.city.id,
            name: response.data.city.name,
            country: response.data.city.country,
            lon: response.data.city.coord.lon,
            lat: response.data.city.coord.lat,
            isFavorite: state.favorites.length !== 0 ? !!state.favorites.find((city) => {
              return city.id === response.data.city.id;
            }) : false,
            weather: response.data.list,
            loading: false,
            error: false
          }
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loading: false,
          error: true
        });
      });
  }
  searchClick(){
    let searchField = document.querySelector('.header__search-field');
    this.fetchData({name: 'query', query: searchField.value});
  }
  favoritesHandler(id){
    if (!id) {
      if (!this.state.isFavorite) {
        this.setState((state) => {
          state.favorites.push({
            id: state.id,
            name: state.name,
            country: state.country,
            lon: state.lon,
            lat: state.lat,
            isFavorite: true
          });
        });
      } else {
        this.setState((state) => {
          let index = state.favorites.indexOf(state.favorites.find((city) => {
            return city.id === state.id;
          }));
          state.favorites.splice(index, 1);
        });
      }
      this.setState((state) => {
        return state.isFavorite = !state.isFavorite;
      });
    } else {
      if (this.state.id === id) {
        this.setState({
          isFavorite : false
        });
      }
      this.setState((state) => {
        let index = state.favorites.indexOf(state.favorites.find((city) => {
          return city.id === id;
        }));
        return state.favorites.splice(index, 1);
      });
    }
  }
  showFavoriteCity(props){
    this.fetchData({name: 'id', id: props.id});
    props.history.push('/');
  }
  loadDefaultCity(){
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.fetchData({name: 'geo', lat: position.coords.latitude, lon: position.coords.longitude});
        },
        (error) => {
          console.log(error);
          this.fetchData({name: 'id', id: defaultCity.id});
        }
      );
    } else {
      console.log('geolocation is not allowed');
    }
  }
  componentDidMount(){
    this.loadDefaultCity();
  }
  componentDidUpdate(prev){
    localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => {
          return(
            <div className="App">
              <Header
                loadDefaultCity={this.loadDefaultCity}
                searchClick={this.searchClick}
              />
              {this.state.loading && <Spinner/>}
              {this.state.error && <div>No data available</div>}
              {!this.state.loading && !this.state.error &&
                <City
                  id={this.state.id}
                  name={this.state.name}
                  country={this.state.country}
                  isFavorite={this.state.isFavorite}
                  weather={this.state.weather}
                  clickHandler={this.favoritesHandler}
                />
              }
            </div>
          );
        }}>
        </Route>
        <Route path="/favorites">
          <div className="App">
            <HeaderFavorites/>
            <FavoritesList
              favorites={this.state.favorites}
              favoritesHandler={this.favoritesHandler}
              showFavoriteCity={this.showFavoriteCity}
            />
          </div>
        </Route>
      </Switch>
    );
  }
}

export default App;