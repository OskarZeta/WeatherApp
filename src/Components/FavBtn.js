import React from 'react';

const FavBtn = (props) => {
  return(
    <div>
      {!props.isFavorite &&
        <button className="fav-btn" onClick={() => {props.clickHandler(props.id)}}>
          <svg className="fav-btn__svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 511.999 511.999">
            <path style={{fill: '#FFDC64'}} d="M452.71,157.937l-133.741-12.404L265.843,22.17c-3.72-8.638-15.967-8.638-19.686,0l-53.126,123.362
            L59.29,157.937c-9.365,0.868-13.149,12.516-6.084,18.723l100.908,88.646l-29.531,131.029c-2.068,9.175,7.841,16.373,15.927,11.572
            L256,339.331l115.49,68.576c8.087,4.802,17.994-2.397,15.927-11.572l-29.532-131.029l100.909-88.646
            C465.859,170.453,462.074,158.805,452.71,157.937z"/>
            <g>
              <path style={{fill: '#FFF082'}} d="M119.278,17.923c6.818,9.47,26.062,50.14,37.064,73.842c1.73,3.726-2.945,7.092-5.93,4.269
              C131.425,78.082,98.96,46.93,92.142,37.459c-5.395-7.493-3.694-17.941,3.8-23.336C103.435,8.728,113.883,10.43,119.278,17.923z"/>
              <path style={{fill: '#FFF082'}} d="M392.722,17.923c-6.818,9.47-26.062,50.14-37.064,73.842c-1.73,3.726,2.945,7.092,5.93,4.269
              c18.987-17.952,51.451-49.105,58.27-58.575c5.395-7.493,3.694-17.941-3.8-23.336C408.565,8.728,398.117,10.43,392.722,17.923z"/>
              <path style={{fill: '#FFF082'}} d="M500.461,295.629c-11.094-3.618-55.689-9.595-81.612-12.875c-4.075-0.516-5.861,4.961-2.266,6.947
              c22.873,12.635,62.416,34.099,73.51,37.717c8.778,2.863,18.215-1.932,21.078-10.711
              C514.034,307.928,509.239,298.492,500.461,295.629z"/>
              <path style={{fill: '#FFF082'}} d="M11.539,295.629c11.094-3.618,55.689-9.595,81.612-12.875c4.075-0.516,5.861,4.961,2.266,6.947
              c-22.873,12.635-62.416,34.099-73.51,37.717c-8.778,2.863-18.215-1.932-21.078-10.711S2.761,298.492,11.539,295.629z"/>
              <path style={{fill: '#FFF082'}} d="M239.794,484.31c0-11.669,8.145-55.919,13.065-81.582c0.773-4.034,6.534-4.034,7.307,0
              c4.92,25.663,13.065,69.913,13.065,81.582c0,9.233-7.485,16.718-16.718,16.718C247.279,501.029,239.794,493.543,239.794,484.31z"/>
            </g>
            <path style={{fill: '#FFC850'}} d="M285.161,67.03l-19.319-44.86c-3.72-8.638-15.967-8.638-19.686,0L193.03,145.532L59.29,157.937
            c-9.365,0.868-13.149,12.516-6.084,18.723l100.908,88.646l-29.531,131.029c-2.068,9.175,7.841,16.373,15.927,11.572l15.371-9.127
            C181.08,235.66,251.922,115.918,285.161,67.03z"/>
          </svg>
          <span className="fav-btn__text">Add to favorites</span>
        </button>
      }
      {props.isFavorite &&
        <button className="fav-btn fav-btn--active" onClick={() => {props.clickHandler(props.id)}}>
          <svg className="fav-btn__svg" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 512 512">
            <circle style={{fill: '#E21B1B'}} cx="256" cy="256" r="256"/>
            <path style={{fill: '#C40606'}} d="M510.28,285.304L367.912,142.936L150.248,368.608l140.928,140.928
                  C406.352,493.696,497.056,401.288,510.28,285.304z"/>
            <g>
              <path style={{fill: '#FFFFFF'}} d="M354.376,371.536c-5.12,0-10.232-1.952-14.144-5.856L146.408,171.848
                     c-7.816-7.816-7.816-20.472,0-28.28s20.472-7.816,28.28,0L368.52,337.4c7.816,7.816,7.816,20.472,0,28.28
                     C364.608,369.584,359.496,371.536,354.376,371.536z"/>
              <path style={{fill: '#FFFFFF'}} d="M160.544,371.536c-5.12,0-10.232-1.952-14.144-5.856c-7.816-7.816-7.816-20.472,0-28.28
                     l193.832-193.832c7.816-7.816,20.472-7.816,28.28,0s7.816,20.472,0,28.28L174.688,365.68
                     C170.784,369.584,165.664,371.536,160.544,371.536z"/>
            </g>
          </svg>
          <span className="fav-btn__text">Remove from favorites</span>
        </button>
      }
    </div>
  );
};

export default FavBtn;