import React from 'react';
import { Link } from 'react-router-dom';

function Comedy3() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Happy Death Day(2017)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/hdday.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/comedy/8" className="button">Like</Link>
          <Link to="/comedy/7" className="button">Dislike</Link>
          <Link to="/recommend/55" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A teenage girl, trying to enjoy her birthday, soon realizes that this is her final one. That is, if she can figure out who her killer is. She must relive that day, over and over again, dying in a different way each time. Can she solve her own murder?</p>
      </div>
    </div>
  );
}

export default Comedy3;