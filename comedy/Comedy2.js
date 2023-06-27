import React from 'react';
import { Link } from 'react-router-dom';

function Comedy2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Filth(2013)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/filth.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/comedy/6" className="button">Like</Link>
          <Link to="/comedy/5" className="button">Dislike</Link>
          <Link to="/recommend/54" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A corrupt, junkie cop with bipolar disorder attempts to manipulate his way through a promotion in order to win back his wife and daughter while also fighting his own inner demons.</p>
      </div>
    </div>
  );
}

export default Comedy2;