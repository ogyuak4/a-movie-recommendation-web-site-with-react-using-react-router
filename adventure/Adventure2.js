import React from 'react';
import { Link } from 'react-router-dom';

function Adventure2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Balada triste de trompeta(2010)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/balada.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/adventure/6" className="button">Like</Link>
          <Link to="/adventure/5" className="button">Dislike</Link>
          <Link to="/recommend/33" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A young trapeze artist must decide between her lust for Sergio, the Happy Clown, or her affection for Javier, the Sad Clown, both of whom are deeply disturbed.</p>
      </div>
    </div>
  );
}

export default Adventure2