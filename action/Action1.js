import React from 'react';
import { Link } from 'react-router-dom';

function Action1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Den of Thieves(2018)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/dot.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/action/4" className="button">Like</Link>
          <Link to="/action/3" className="button">Dislike</Link>
          <Link to="/recommend/17" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A gritty L.A crime saga which follows the intersecting and often personally connected lives of an elite unit of the LA County Sheriff's Dept. and the state's most successful bank robbery crew as the outlaws plan an impossible heist on the Federal Reserve Bank of downtown Los Angeles...</p>
      </div>
    </div>
  );
}

export default Action1