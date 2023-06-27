import React from 'react';
import { Link } from 'react-router-dom';

function Comedy5() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">The Hangover(2009)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/hangover.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/comedy/12" className="button">Like</Link>
          <Link to="/comedy/11" className="button">Dislike</Link>
          <Link to="/recommend/57" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.</p>
      </div>
    </div>
  );
}

export default Comedy5;