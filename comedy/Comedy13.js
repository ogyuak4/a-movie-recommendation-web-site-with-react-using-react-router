import React from 'react';
import { Link } from 'react-router-dom';

function Comedy13() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Carne de neón(2010)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/neon.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/comedy/1" className="button">Like</Link>
          <Link to="/comedy/1" className="button">Dislike</Link>
          <Link to="/recommend/65" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Hoping to earn his mother's respect, a young hustler-turned-businessman tries to open a brothel with his two useless buddies.</p>
      </div>
    </div>
  );
}

export default Comedy13;