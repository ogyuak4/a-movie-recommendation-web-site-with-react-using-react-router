import React from 'react';
import { Link } from 'react-router-dom';

function Romance() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Buffalo '66(1998)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/buffalo.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/romance/2" className="button">Like</Link>
          <Link to="/romance/1" className="button">Dislike</Link>
          <Link to="/recommend/89" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">After being released from prison, Billy is set to visit his parents with his wife, whom he does not actually have. This provokes Billy to act out, as he kidnaps a girl and forces her to act as his wife for the visit.</p>
      </div>
    </div>
  );
}

export default Romance;