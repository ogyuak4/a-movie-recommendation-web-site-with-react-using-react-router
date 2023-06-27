import React from 'react';
import { Link } from 'react-router-dom';

function Comedy6() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Naked(1993)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/naked.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/comedy/14" className="button">Like</Link>
          <Link to="/comedy/13" className="button">Dislike</Link>
          <Link to="/recommend/58" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Johnny flees Manchester for London, to avoid a beating from the family of a girl he has raped. There he finds an old girlfriend, and spends some time homeless, spending much of his time ranting at strangers, and meeting characters in plights very much like his own.</p>
      </div>
    </div>
  );
}

export default Comedy6;