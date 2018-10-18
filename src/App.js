import React, { Component } from 'react';
import logo from './logo.svg';
import './css/style.css';
//import TestComponent from './TestComponent';
import SearchedCity from './Containers/SearchCity';
import WeatherShow from './Containers/WeatherShow';
import axios from 'axios';

const ApiKey = '4eb2a505a495b93451e7abc17924062b';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentCity: {
        id: 2643743,
        name: "London",
        country: "GB",
        lon: -0.12574,
        lat: 51.50853
      },
      weather: [],
      loading: true
    };
    this.searchClick = this.searchClick.bind(this);
    //   this.state = {
    //     currentCity: {
    //       id: 2643743,
    //       name: "London"
    //     }
    //   };
    //   this.someMethod = this.someMethod.bind(this);
  }
  fetchData(method, days){
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
        this.setState({
          currentCity: {
            // id: response.data.city.id,
            // name: response.data.city.name,
            // country: response.data.city.country,
            // lon: response.data.city.coord.lon,
            // lat: response.data.city.coord.lat
            id: response.data.id,
            name: response.data.name,
            country: response.data.sys.country,
            lon: response.data.coord.lon,
            lat: response.data.coord.lat
          },
          weather: response.data,
          loading: false
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  searchClick(e){
    //console.log(this.state, this.props);
    let searchField = document.querySelector('.search__field');
    this.fetchData({name: 'query', query: searchField.value});
  }
  componentDidMount(){
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.fetchData({name: 'geo', lat: position.coords.latitude, lon: position.coords.longitude});
        },
        (error) => {
          console.log(error);
          this.fetchData({name: 'id', id: this.state.currentCity.id});
        }
      );
    } else {

    }
  }
  componentDidUpdate(prevProps){

  }
  render() {
    return (
      <div className="App" onClick={this.someMethod}>
        <header className="App-header">
          <h1>WeatherApp</h1>
          <SearchedCity
            clickHandler={this.searchClick}
          />
        </header>
        <WeatherShow
          city={this.state.currentCity}
          weather={this.state.weather}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default App;
