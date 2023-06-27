import React from 'react';
import { Link } from 'react-router-dom';

function Western2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Brimstone(2016)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/brimstone.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/western/1" className="button">Like</Link>
          <Link to="/western/1" className="button">Dislike</Link>
          <Link to="/recommend/108" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">From the moment the new Reverend climbs the pulpit, Liz knows that she and her family are in great danger.</p>
      </div>
    </div>
  );
}

export default Western2;