import React from 'react';
import { Link } from 'react-router-dom';

function Short1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">One-Minute Time Machine(2014)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/one.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/genres/short" className="button">Like</Link>
          <Link to="/genres/short" className="button">Dislike</Link>
          <Link to="/recommend/96" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">James is all too eager to put his one-minute time machine to use in winning the heart of Regina, until he discovers the unexpected consequences of his actions.</p>
      </div>
    </div>
  );
}

export default Short1;