import React from 'react';
import { Link } from 'react-router-dom';

function Horror1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">V/H/S(2012)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/vhs.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/horror/4" className="button">Like</Link>
          <Link to="/horror/3" className="button">Dislike</Link>
          <Link to="/recommend/80" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">When a group of misfits are hired by an unknown third party to burglarize a desolate house and acquire a rare VHS tape, they discover more found footage than they bargained for...</p>
      </div>
    </div>
  );
}

export default Horror1;