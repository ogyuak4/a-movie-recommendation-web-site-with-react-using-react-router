import React from 'react';
import { Link } from 'react-router-dom';

function War() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">1917(2019)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/1917.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/war/2" className="button">Like</Link>
          <Link to="/war/1" className="button">Dislike</Link>
          <Link to="/recommend/103" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.</p>
      </div>
    </div>
  );
}

export default War;