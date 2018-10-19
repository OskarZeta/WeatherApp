import React, { Component } from 'react';

const Search = (props) => {
  return(
    <div>
      <input className="search__field" type="search" />
      <button className="search__btn" onClick={props.clickHandler}>Search</button>
    </div>
  );
};

export default Search;