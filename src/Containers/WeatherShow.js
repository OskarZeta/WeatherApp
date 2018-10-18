import React, { Component } from 'react';
import axios from 'axios';
import Weather from '../Components/Weather';

const ApiKey = '4eb2a505a495b93451e7abc17924062b';
const ApiKey2 = 'b1b15e88fa797225412429c1c50c122a1';

class WeatherShow extends Component {
  // fetchData(method, days){
  //   let url;
  //   switch (method.name) {
  //     case 'geo' : {
  //       url = `https://api.openweathermap.org/data/2.5/forecast?lat=${method.lat}&lon=${method.lon}&appid=${ApiKey}`;
  //       break;
  //     }
  //     case 'id' : {
  //       url = `https://api.openweathermap.org/data/2.5/forecast?id=${method.id}&appid=${ApiKey}`;
  //       break;
  //     }
  //     case 'query' : {
  //       url = `https://api.openweathermap.org/data/2.5/forecast?q=${method.query}&appid=${ApiKey}`;
  //       break;
  //     }
  //     default : throw new Error(
  //       `Wrong fetching data method detected, expected geo/id/query in method's name, got ${method.name}`
  //     );
  //   }
  //   axios.get(url)
  //     .then((response) => {
  //       this.setState({
  //         currentCity: {
  //           id: response.data.city.id,
  //           name: response.data.city.name,
  //           country: response.data.city.country,
  //           lon: response.data.city.coord.lon,
  //           lat: response.data.city.coord.lat
  //         },
  //         weather: response.data.list,
  //         loading: false
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  componentDidMount(){
    //console.log(this.props.weather);
  }
  componentDidUpdate(prevState){
    //console.log(this.props.weather);
  }
  render(){
    return(
      <div>
        {this.props.loading && <div>No data yet</div>}
        {!this.props.loading && <Weather city={this.props.city} weather={this.props.weather}/> }
      </div>
    );
  }
}
export default WeatherShow;