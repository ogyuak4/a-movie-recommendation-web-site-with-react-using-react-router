import React from 'react';
import { Link } from 'react-router-dom';

function Comedy7() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">One Cut of the Dead(2017)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/onecut.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/comedy/2" className="button">Like</Link>
          <Link to="/comedy/2" className="button">Dislike</Link>
          <Link to="/recommend/59" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Things go badly for a hack director and film crew shooting a low budget zombie movie in an abandoned WWII Japanese facility, when they are attacked by real zombies.</p>
      </div>
    </div>
  );
}

export default Comedy7;