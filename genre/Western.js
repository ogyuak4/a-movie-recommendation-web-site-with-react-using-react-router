import React from 'react';
import { Link } from 'react-router-dom';

function Western() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Wind River(2017)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/wind.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/western/2" className="button">Like</Link>
          <Link to="/western/1" className="button">Dislike</Link>
          <Link to="/recommend/106" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A wildlife officer, who is haunted by a tragedy that happened because of him, teams up with an FBI agent in solving a murder of a young woman on a Wyoming Native American reservation and hopes to get redemption from his past regrets..</p>
      </div>
    </div>
  );
}

export default Western;