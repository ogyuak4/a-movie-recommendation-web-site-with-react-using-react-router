import React from 'react';
import { Link } from 'react-router-dom';

function Comedy11() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Shoot 'Em Up(2007)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/shoot.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/comedy/6" className="button">Like</Link>
          <Link to="/comedy/6" className="button">Dislike</Link>
          <Link to="/recommend/63" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A man named Mr. Smith delivers a woman's baby during a shootout, and is then called upon to protect the newborn from the army of gunmen.</p>
      </div>
    </div>
  );
}

export default Comedy11;