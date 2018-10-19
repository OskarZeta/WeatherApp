import React from 'react';
import FavBtn from './FavBtn';

const toFahr = (kelvins) => {
  return Math.round(1.8 * (kelvins - 273) + 32) + ' F';
};

const toCels = (kelvins) => {
  return Math.round(kelvins - 273) + ' C';
};

const City = (props) => {
  return (
    <div>
      <h3>Current city: {props.name}</h3>
      {/*<div>{props.weather.dt/(1000*60*60)}</div>*/}
      {/*<div>sunrise time: {new Date(props.weather.sys.sunrise*1000).toString()}</div>*/}
      {/*<div>sunset time: {new Date(props.weather.sys.sunset*1000).toString()}</div>*/}
      <div>temperature: {toCels(props.weather.main.temp)}</div>
      <div>wind: {props.weather.wind.speed} meters/sec</div>
      <div>pressure: {Math.round(props.weather.main.pressure/1.33)}</div>
      <div>humidity: {props.weather.main.humidity} %</div>
      <FavBtn isFavorite={props.isFavorite} clickHandler={props.clickHandler}/>
    </div>
  );
};

export default City;