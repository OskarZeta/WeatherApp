import React from 'react';
import FavBtn from './FavBtn';

const toFahr = (kelvins) => {
  return Math.round(1.8 * (kelvins - 273) + 32) + ' °F';
};

const toCels = (kelvins) => {
  let cels = Math.round(kelvins - 273);
  if (cels > 0) {
    return  `+${cels} °C`;
  }
  return  `${cels} °C`;
};

const iconAddress = 'https://openweathermap.org/img/w/';

const City = (props) => {
  return (
    <div className="city">
      <div className="container">
        <h3>Current city: {props.name}</h3>
        {/*<div>{props.weather.dt/(1000*60*60)}</div>*/}
        {/*<div>sunrise time: {new Date(props.weather.sys.sunrise*1000).toString()}</div>*/}
        {/*<div>sunset time: {new Date(props.weather.sys.sunset*1000).toString()}</div>*/}
        <div className="city__weather-wrapper col-6">
          <img src={iconAddress + props.weather.weather[0].icon + '.png'}/>
          <div className="city__weather-description">
            <span>{props.weather.weather[0].description}</span>
            <span>{toCels(props.weather.main.temp)}</span>
          </div>
        </div>
        <div className="city__weather-param col-6">wind: {props.weather.wind.speed} meters/sec</div>
        <div className="city__weather-param col-6">pressure: {Math.round(props.weather.main.pressure/1.33)}</div>
        <div className="city__weather-param col-6">humidity: {props.weather.main.humidity} %</div>
        <FavBtn isFavorite={props.isFavorite} clickHandler={props.clickHandler}/>
      </div>
    </div>
  );
};

export default City;