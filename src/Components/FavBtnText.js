import React from 'react';

const FavBtnText = (props) => {
  return(
    <div>
      <button className="favorites__btn favorites__btn--remove" onClick={() => {props.clickHandler(props.id)}}>
        <span className="favorites__btn-text">Remove from favorites</span>
      </button>
    </div>
  );
};

export default FavBtnText;