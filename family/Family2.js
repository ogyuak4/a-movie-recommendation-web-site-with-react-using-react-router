import React from 'react';
import { Link } from 'react-router-dom';

function Family2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Harry Potter and the Chamber of Secrets(2002)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/harry2.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/family/1" className="button">Like</Link>
          <Link to="/family/1" className="button">Dislike</Link>
          <Link to="/recommend/72" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.</p>
      </div>
    </div>
  );
}

export default Family2;