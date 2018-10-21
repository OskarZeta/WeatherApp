import React from 'react';
import { withRouter } from 'react-router-dom';

const ShowDefaultCity = (props) => {
  return(
    <button className="header__btn" onClick={props.clickHandler}>
      <span className="header__btn-text">Home city</span>
      <img className="header__icon" src="navigation.svg"/>
    </button>
  );
};

export default withRouter(ShowDefaultCity);