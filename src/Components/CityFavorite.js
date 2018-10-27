import React from 'react';
import { withRouter } from 'react-router-dom';
import FavBtnText from './FavBtnText';

const CityFavorite = (props) => {
  return (
    <div className="favorites__item-wrapper">
      <h5 className="favorites__item-header">{props.name}</h5>
      <div className="favorites__buttons-wrapper">
        <button className="favorites__btn favorites__btn--show" onClick={() => props.showFavoriteCity(props)}>
          <span className="favorites__btn-text">Show city</span>
        </button>
        <FavBtnText
          id={props.id}
          clickHandler={props.favoritesHandler}
        />
      </div>
    </div>
  );
};

export default withRouter(CityFavorite);