import React from 'react';
import { Link } from 'react-router-dom';

function Musical() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Singin' in the Rain(1952)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/singin.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/musical/2" className="button">Like</Link>
          <Link to="/musical/1" className="button">Dislike</Link>
          <Link to="/recommend/86" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A silent film star falls for a chorus girl just as he and his delusionally jealous screen partner are trying to make the difficult transition to talking pictures in 1920s Hollywood.</p>
      </div>
    </div>
  );
}

export default Musical;