import React from 'react';
import { Link } from 'react-router-dom';

function Family1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Aladdin(2019)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/aladdin.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/family/2" className="button">Like</Link>
          <Link to="/family/2" className="button">Dislike</Link>
          <Link to="/recommend/71" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.</p>
      </div>
    </div>
  );
}

export default Family1;