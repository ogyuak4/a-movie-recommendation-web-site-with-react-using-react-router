import React from 'react';
import { Link } from 'react-router-dom';

function Drama1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Jagten(2012)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/jagten.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/drama/4" className="button">Like</Link>
          <Link to="/drama/3" className="button">Dislike</Link>
          <Link to="/recommend/2" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.</p>
      </div>
    </div>
  );
}

export default Drama1