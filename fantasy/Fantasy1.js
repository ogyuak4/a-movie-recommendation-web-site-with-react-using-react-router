import React from 'react';
import { Link } from 'react-router-dom';

function Fantasy1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Troll Hunter(2010)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/troll.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/fantasy/2" className="button">Like</Link>
          <Link to="/fantasy/2" className="button">Dislike</Link>
          <Link to="/recommend/74" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A group of students investigates a series of mysterious bear killings, but learns that there are much more dangerous things going on. They start to follow a mysterious hunter, learning that he is actually a troll hunter.</p>
      </div>
    </div>
  );
}

export default Fantasy1;