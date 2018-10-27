import React from 'react';
import {parseDate, toCels, toFahr, iconAddress} from './City';

const CityFiveDays = (props) => {
  const weather = props.weather;
  return (
    <li className="city__future">
      <span className="city__future-date">{parseDate(weather.dt_txt.split(' ')[0], 'short')}</span>
      <img className="city__future-icon" src={iconAddress + weather.weather[0].icon + '.png'} alt="weather-icon"/>
      <div className="city__future-weather">
        <span className="city__future-temp">{toCels(weather.main.temp)}</span>
        <span className="city__future-description">{weather.weather[0].description}</span>
      </div>
    </li>
  );
};

export default CityFiveDays;