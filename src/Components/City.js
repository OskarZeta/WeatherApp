import React from 'react';
import FavBtn from './FavBtn';
import CityFiveDays from './CityFiveDays';

export const toFahr = (kelvins) => {
  return Math.round(1.8 * (kelvins - 273) + 32) + ' °F';
};

export const toCels = (kelvins) => {
  let cels = Math.round(kelvins - 273);
  if (cels > 0) {
    return  `+${cels} °C`;
  }
  return  `${cels} °C`;
};

export const parseDate = (date, size) => {
  let months;
  if (size === 'full') {
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];
    return `${date.split('-')[2]} of ${months[date.split('-')[1] - 1]}, ${date.split('-')[0]}`;
  } else {
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${date.split('-')[2]} of ${months[date.split('-')[1] - 1]}`;
  }
};

export const iconAddress = 'https://openweathermap.org/img/w/';

const calcColor = (temp) => {
  if (temp <= 253) {
    return '#bbd8ff';
  } else if (temp < 273 && temp > 253) {
    return '#d1ecff';
  } else if (temp >= 283 && temp < 293) {
    return '#ffe2d4';
  } else if (temp > 293) {
    return '#ffcf8b';
  } else {
    return '#ebebeb';
  }
};

const City = (props) => {
  const weatherCurrent = props.weather[0];
  const weatherFiveDays = props.weather.filter((metering) => {
    return !metering.dt_txt.includes(weatherCurrent.dt_txt.split(' ')[0]);
  });
  const weatherFourDays = weatherFiveDays.filter((metering) => {
    return metering.dt_txt.includes('15:00:00') && !metering.dt_txt.includes(props.weather[props.weather.length - 1].dt_txt.split(' ')[0]);
  });
  const fifthDay = weatherFiveDays.filter((metering) => {
    return metering.dt_txt.includes(props.weather[props.weather.length - 1].dt_txt.split(' ')[0]);
  });
  const  fifthDayFiltered = fifthDay.find((metering) => {return metering.dt_txt.split(' ')[1] === '12:00:00';}) || fifthDay[fifthDay.length - 1];
  return (
    <div className="city">
      <div className="container city__container" style={{boxShadow: '0px 15px 10px 10px' + calcColor(weatherCurrent.main.temp)}}>
        <div className="city__header">
          <div className="city__header-wrapper">
            <span>Current city:</span>
            <h3 className="city__header-name">{props.name}, {props.country}</h3>
          </div>
          <FavBtn isFavorite={props.isFavorite} clickHandler={props.clickHandler}/>
        </div>
        <div className="city__wrapper">
          <div className="city__current-wrapper" style={{borderBottom: '5px solid' + calcColor(weatherCurrent.main.temp)}}>
            <span className="city__current-date">{parseDate(weatherCurrent.dt_txt.split(' ')[0], 'full')}</span>
            <div className="city__weather-wrapper">
              <img className="city__weather-icon" src={iconAddress + weatherCurrent.weather[0].icon + '.png'} alt="weather-icon"/>
              <div className="city__weather-description">
                <span>{weatherCurrent.weather[0].description}</span>
                <span className="city__weather-temp">{toCels(weatherCurrent.main.temp)}</span>
              </div>
            </div>
            <div className="city__weather-params-wrapper">
              <div className="city__weather-param">
                <span className="city__weather-param-name">wind:</span>
                <span className="city__weather-param-value">{weatherCurrent.wind.speed} meters/sec</span>
              </div>
              <div className="city__weather-param">
                <span className="city__weather-param-name">pressure:</span>
                <span className="city__weather-param-value">{Math.round(weatherCurrent.main.pressure/1.33)} mmHg</span>
              </div>
              <div className="city__weather-param">
                <span className="city__weather-param-name">humidity:</span>
                <span className="city__weather-param-value">{weatherCurrent.main.humidity} %</span>
              </div>
            </div>
          </div>
          <ul className="city__forecast-wrapper">
            {weatherFourDays.map((day, index) => {
              return(
                <CityFiveDays key={index} weather={day}/>
              );
            })}
            <CityFiveDays weather={fifthDayFiltered}/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default City;