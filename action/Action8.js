import React from 'react';
import { Link } from 'react-router-dom';


function Action8() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Polar(2019)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/polar.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/action/2" className="button">Like</Link>
            <Link to="/action/2" className="button">Dislike</Link>
            <Link to="/recommend/24" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">A retiring assassin suddenly finds himself on the receiving end of a hit, contracted by none other than his own employer seeking to cash in on the pensions of aging employees.</p>
        </div>
      </div>
    );
  }
  
  export default Action8