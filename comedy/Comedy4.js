import React from 'react';
import { Link } from 'react-router-dom';

function Comedy4() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Up in the Air(2009)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/upintheair.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/comedy/10" className="button">Like</Link>
          <Link to="/comedy/9" className="button">Dislike</Link>
          <Link to="/recommend/56" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Ryan Bingham is a corporate downsizing expert whose cherished life on the road is threatened just as he is on the cusp of reaching ten million frequent flyer miles, and just after he's met the frequent-traveller woman of his dreams.</p>
      </div>
    </div>
  );
}

export default Comedy4;