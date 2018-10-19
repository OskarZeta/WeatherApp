import React from 'react';
import { withRouter } from 'react-router-dom';
import FavBtn from './FavBtn';

const CityFavorite = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <FavBtn
        id={props.id}
        isFavorite={props.isFavorite}
        clickHandler={props.favoritesHandler}
      />
      <button onClick={() => props.showFavoriteCity(props)}>Show city</button>
    </div>
  );
};

export default withRouter(CityFavorite);