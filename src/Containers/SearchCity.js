import React, { Component } from 'react';
//import Search from '../Components/Search';
import axios from 'axios';

const ApiKey = '4eb2a505a495b93451e7abc17924062b';

class SearchedCity extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     currentCity: {
  //       id: 2643743,
  //       name: "London",
  //       country: "GB",
  //       lon: -0.12574,
  //       lat: 51.50853
  //     },
  //     weather: [],
  //     loading: true
  //   };
  //   this.clickHandler = this.clickHandler.bind(this);
  // }
  // fetchData(query, days){
  //   let url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${ApiKey}`;
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
  //clickHandler(e){
    //e.persist();
    //setTimeout(() => {
    //console.log(e.target);

    //let searchField = document.querySelector('.search__field');
    //this.fetchData(searchField.value);

    //console.log(searchField.value);

    //this.fetchData(e.target.value);

    //}, 1000);
    //this.fetchData(e.target.value);
    //console.log('aaaaa');
  //}
  componentDidMount(){
    //console.log(this.props);
  }
  componentDidUpdate() {
    //console.log(this.state.weather);
  }
  render(){
    return(
      <div>
        <input className="search__field" type="search" />
        <button className="search__btn" onClick={this.props.clickHandler}>Search</button>
      </div>
    );
  }
}

export default SearchedCity;