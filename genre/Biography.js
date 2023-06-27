import React from 'react';
import { Link } from 'react-router-dom';

function Biography() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">The Wolf of Wall Street(2013)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/wolf.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/biography/2" className="button">Like</Link>
          <Link to="/biography/1" className="button">Dislike</Link>
          <Link to="/recommend/45" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.</p>
      </div>
    </div>
  );
}

export default Biography;