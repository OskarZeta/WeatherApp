import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Spinner from './Components/Spinner';
import Search from './Components/Search';
import City from './Components/City';
import FavoritesList from './Components/FavoritesList';
import axios from 'axios';

const ApiKey = '4eb2a505a495b93451e7abc17924062b';

const defaultCity = {
  id: 2643743,
  name: "London",
  country: "GB",
  lon: -0.12574,
  lat: 51.50853,
  isFavorite: false
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 2643743,
      name: "London",
      country: "GB",
      lon: -0.12574,
      lat: 51.50853,
      isFavorite: false,
      weather: [],
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
      loading: true,
      error: false
    };
    this.searchClick = this.searchClick.bind(this);
    this.favoritesHandler = this.favoritesHandler.bind(this);
    this.showFavoriteCity = this.showFavoriteCity.bind(this);
    this.loadDefaultCity = this.loadDefaultCity.bind(this);
  }
  fetchData(method){
    //console.log(method.id);
    this.setState({
      loading: true,
      error: false
    });
    let url;
    switch (method.name) {
      case 'geo' : {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${method.lat}&lon=${method.lon}&appid=${ApiKey}`;
        break;
      }
      case 'id' : {
        url = `https://api.openweathermap.org/data/2.5/weather?id=${method.id}&appid=${ApiKey}`;
        break;
      }
      case 'query' : {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${method.query}&appid=${ApiKey}`;
        break;
      }
      default : throw new Error(
        `Wrong fetching data method detected, expected geo/id/query in method's name, got ${method.name}`
      );
    }
    axios.get(url)
      .then((response) => {
        //console.log(response);
        this.setState((state) => {
          return {
            id: response.data.id,
            name: response.data.name,
            country: response.data.sys.country,
            lon: response.data.coord.lon,
            lat: response.data.coord.lat,
            isFavorite: state.favorites.length !== 0 ? !!state.favorites.find((city) => {
              return city.id === response.data.id;
            }) : false,
            weather: response.data,
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
    let searchField = document.querySelector('.search__field');
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
          //console.log(props.location.search.split('=')[1]);
          return(
            <div className="App container">
              <header className="App-header">
                <h1>WeatherApp</h1>
                <Search clickHandler={this.searchClick} history={props.history}/>
                <Link to="/favorites">Favorite Cities</Link>
                <button onClick={this.loadDefaultCity}>Home city</button>
              </header>
              {this.state.loading && <Spinner/>}
              {this.state.error && <div>No data available</div>}
              {!this.state.loading && !this.state.error &&
                <City
                  id={this.state.id}
                  name={this.state.name}
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
            <header className="App-header">
              <h1>WeatherApp</h1>
              <Link to="/">Home</Link>
            </header>
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
