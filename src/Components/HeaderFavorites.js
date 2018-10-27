import React from 'react';
import { Link } from 'react-router-dom';

const HeaderFavorites = (props) => {
  return(
    <header className="header">
      <div className="container">
        <h1>WeatherApp</h1>
        <div className="header__wrapper">
          <Link className="header__btn header__btn--homepage" to="/">
            <span className="header__btn-text">Home</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderFavorites;