import React from 'react';
import { Link } from 'react-router-dom';

function Short() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Tune for Two(2011)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/mana.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/short/1" className="button">Like</Link>
          <Link to="/short/1" className="button">Dislike</Link>
          <Link to="/recommend/95" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">An assassin drags his victim into the middle of the snowy woods, digs a pit, positions him next to it and prepares to finish the job. His victim seems to want to go out singing though.</p>
      </div>
    </div>
  );
}

export default Short;