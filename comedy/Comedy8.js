import React from 'react';
import { Link } from 'react-router-dom';

function Comedy8() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Project X(2012)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/project.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/comedy/2" className="button">Like</Link>
          <Link to="/comedy/2" className="button">Dislike</Link>
          <Link to="/recommend/60" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Three high-school seniors throw a birthday party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.</p>
      </div>
    </div>
  );
}

export default Comedy8;