import React from 'react';
import { Link } from 'react-router-dom';

function Comedy9() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Double Date(2017)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/ddate.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/comedy/3" className="button">Like</Link>
          <Link to="/comedy/3" className="button">Dislike</Link>
          <Link to="/recommend/61" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A man can't speak to ladies. His friend makes things happen but with 2 man-killing sisters looking for a virgin man to sacrifice to bring daddy back from the dead..</p>
      </div>
    </div>
  );
}

export default Comedy9;