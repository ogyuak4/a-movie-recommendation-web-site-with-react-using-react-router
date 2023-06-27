import React from 'react';
import { Link } from 'react-router-dom';

function Crime() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">12 Angry Men(1957)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/angry.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/crime/2" className="button">Like</Link>
          <Link to="/crime/1" className="button">Dislike</Link>
          <Link to="/recommend/67" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.</p>
      </div>
    </div>
  );
}

export default Crime;