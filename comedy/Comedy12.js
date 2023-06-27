import React from 'react';
import { Link } from 'react-router-dom';

function Comedy12() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">The Big Lebowski(1998)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/bigl.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/comedy/6" className="button">Like</Link>
          <Link to="/comedy/6" className="button">Dislike</Link>
          <Link to="/recommend/64" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.</p>
      </div>
    </div>
  );
}

export default Comedy12;