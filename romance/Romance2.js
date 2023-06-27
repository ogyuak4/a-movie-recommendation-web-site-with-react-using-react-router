import React from 'react';
import { Link } from 'react-router-dom';

function Romance2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Warm Bodies(2013)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/warmb.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/romance/1" className="button">Like</Link>
          <Link to="/romance/1" className="button">Dislike</Link>
          <Link to="/recommend/91" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">After a highly unusual zombie saves a still-living girl from an attack, the two form a relationship that sets in motion events that might transform the entire lifeless world.</p>
      </div>
    </div>
  );
}

export default Romance2;