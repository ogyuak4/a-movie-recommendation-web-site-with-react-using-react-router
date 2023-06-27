import React from 'react';
import { Link } from 'react-router-dom';

function War2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">The Covenant(2023)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/covenant.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/war/2" className="button">Like</Link>
          <Link to="/war/2" className="button">Dislike</Link>
          <Link to="/recommend/105" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain..</p>
      </div>
    </div>
  );
}

export default War2;