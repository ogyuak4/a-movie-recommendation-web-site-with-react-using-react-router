import React from 'react';
import { Link } from 'react-router-dom';

function Fantasy() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Scott Pilgrim vs. the World(2010)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/scott.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/fantasy/2" className="button">Like</Link>
          <Link to="/fantasy/1" className="button">Dislike</Link>
          <Link to="/recommend/73" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">In a magically realistic version of Toronto, a young man must defeat his new girlfriend's seven evil exes one by one in order to win her heart..</p>
      </div>
    </div>
  );
}

export default Fantasy;