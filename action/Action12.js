import React from 'react';
import { Link } from 'react-router-dom';


function Action12() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Ford v Ferrari(2019)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/fvp.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/action/6" className="button">Like</Link>
            <Link to="/action/6" className="button">Dislike</Link>
            <Link to="/recommend/28" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.</p>
        </div>
      </div>
    );
  }
  
  export default Action12