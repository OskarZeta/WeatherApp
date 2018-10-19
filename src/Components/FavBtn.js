import React from 'react';

const FavBtn = (props) => {
  return(
    <button onClick={() => {props.clickHandler(props.id)}}>
      {!props.isFavorite && 'add to favorites'}
      {props.isFavorite && 'remove from favorites'}
    </button>
  );
};

export default FavBtn;