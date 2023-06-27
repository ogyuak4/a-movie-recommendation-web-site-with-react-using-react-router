import React from 'react';
import { Link } from 'react-router-dom';


function Drama2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">40(2009)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/40.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/drama/6" className="button">Like</Link>
          <Link to="/drama/5" className="button">Dislike</Link>
          <Link to="/recommend/3" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A bag full of money lands in front of you. Is it luck? The answer to your prayers? Part of a predetermined plan? Or all of the above? Set in the chaotic streets of Istanbul, 40 is a story of three strangers making their way in a city of 12 million, all searching...for one bag.</p>
      </div>
    </div>
  );
}

export default Drama2