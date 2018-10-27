import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Search from './Search';
import ShowDefaultCity from './ShowDefaultCity';

const Header = (props) => {
  return(
    <header className="header">
      <div className="container">
        <h1>WeatherApp</h1>
        <div className="header__wrapper">
          <Search clickHandler={props.searchClick} history={props.history}/>
          <div className="header__wrapper-lower col-4 col-sm-4 col-md-4">
            <ShowDefaultCity clickHandler={props.loadDefaultCity}/>
            <Link className="header__btn header__btn--favorites" to="/favorites">
              <span className="header__btn-text">Favorites</span>
              <img className="header__icon" src="star.svg" alt="fav-img"/>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);