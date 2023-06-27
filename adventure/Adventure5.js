import React from 'react';
import { Link } from 'react-router-dom';

function Adventure5() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Avengers: Endgame(2019)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/avengers.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/adventure/1" className="button">Like</Link>
          <Link to="/adventure/1" className="button">Dislike</Link>
          <Link to="/recommend/36" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face....</p>
      </div>
    </div>
  );
}

export default Adventure5