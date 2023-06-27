import React from 'react';
import { Link } from 'react-router-dom';

function Fantasy2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Free Guy(2021)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/free.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/fantasy/1" className="button">Like</Link>
          <Link to="/fantasy/1" className="button">Dislike</Link>
          <Link to="/recommend/75" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">When Guy, a bank teller, learns that he is a non-player character in a bloodthirsty, open-world video game, he goes on to become the hero of the story and takes the responsibility of saving the world.</p>
      </div>
    </div>
  );
}

export default Fantasy2;