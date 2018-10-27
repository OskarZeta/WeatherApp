import React from 'react';

const Search = (props) => {
  return(
    <div className="header__search-wrapper col-8 col-sm-8 col-md-8">
      <input className="header__search-field form-control" type="search" />
      <button className="header__search-btn" onClick={props.clickHandler}>
        <span className="header__search-text">Search city</span>
        <img className="header__search-icon header__icon" src="loupe.svg" alt="search"/>
      </button>
    </div>
  );
};

export default Search;