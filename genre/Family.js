import React from 'react';
import { Link } from 'react-router-dom';

function Family() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Harry Potter and the Sorcerer's Stone(2001)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/harry1.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/family/2" className="button">Like</Link>
          <Link to="/family/1" className="button">Dislike</Link>
          <Link to="/recommend/70" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.</p>
      </div>
    </div>
  );
}

export default Family;