import React from 'react';
import { Link } from 'react-router-dom';

function Biography5() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Spotlight(2015)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/spotlight.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/biography/1" className="button">Like</Link>
            <Link to="/biography/1" className="button">Dislike</Link>
            <Link to="/recommend/50" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.</p>
        </div>
      </div>
    );
  }
  
  export default Biography5;