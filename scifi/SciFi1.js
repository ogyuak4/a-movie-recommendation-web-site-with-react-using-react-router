import React from 'react';
import { Link } from 'react-router-dom';

function SciFi1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Limitless(2011)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/limit.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/scifi/2" className="button">Like</Link>
          <Link to="/scifi/2" className="button">Dislike</Link>
          <Link to="/recommend/93" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A mysterious pill that enables the user to access 100% of his brain's abilities transforms a struggling writer into a financial wizard, but it also puts him in a new world with many dangers.</p>
      </div>
    </div>
  );
}

export default SciFi1;