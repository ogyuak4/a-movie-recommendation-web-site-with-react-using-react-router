import React from 'react';
import { Link } from 'react-router-dom';

function Thriller1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Shutter Island(2010)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/shutter.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/thriller/2" className="button">Like</Link>
          <Link to="/thriller/2" className="button">Dislike</Link>
          <Link to="/recommend/101" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.</p>
      </div>
    </div>
  );
}

export default Thriller1;