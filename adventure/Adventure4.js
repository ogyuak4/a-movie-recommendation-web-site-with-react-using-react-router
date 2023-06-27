import React from 'react';
import { Link } from 'react-router-dom';

function Adventure4() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">The Suicide Squad(2021)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/ss.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/adventure/2" className="button">Like</Link>
          <Link to="/adventure/2" className="button">Dislike</Link>
          <Link to="/recommend/35" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Supervillains Harley Quinn, Bloodsport, Peacemaker, and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese..</p>
      </div>
    </div>
  );
}

export default Adventure4