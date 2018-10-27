import React from 'react';
import CityFavorite from './CityFavorite';

const FavoritesList = (props) => {
  return(
    <div className="container favorites__container">
      <h2>Favorite cities</h2>
      {props.favorites.length === 0 && <div>You don't have any favorites yet</div>}
      {props.favorites.length !== 0 &&
      <ul className="favorites">
        {props.favorites.map((city) => {
          return (
            <li key={city.id} className="favorites__item">
              <CityFavorite id={city.id} name={city.name} country={city.country} lon={city.lon} lat={city.lat} isFavorite={city.isFavorite}
                favoritesHandler={props.favoritesHandler}
                showFavoriteCity={props.showFavoriteCity}
              />
            </li>
          )
        })}
      </ul>
      }
    </div>
  );
};

export default FavoritesList;