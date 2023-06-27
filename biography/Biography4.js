import React from 'react';
import { Link } from 'react-router-dom';

function Biography4() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">The Pianist(2002)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/pianist.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/biography/2" className="button">Like</Link>
            <Link to="/biography/2" className="button">Dislike</Link>
            <Link to="/recommend/49" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">In this adaptation of the autobiography "The Pianist: The Extraordinary True Story of One Man's Survival in Warsaw, 1939-1945," Wladyslaw Szpilman, a Polish Jewish radio station pianist, sees Warsaw change gradually as World War II begins. Szpilman is forced into the Warsaw Ghetto, but is later separated from his family during Operation Reinhard. From this time until the concentration camp prisoners are released, Szpilman hides in various locations among the ruins of Warsaw</p>
        </div>
      </div>
    );
  }
  
  export default Biography4;