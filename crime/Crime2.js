import React from 'react';
import { Link } from 'react-router-dom';

function Crime2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Wrath of Man(2021)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/wrath.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/crime/1" className="button">Like</Link>
          <Link to="/crime/1" className="button">Dislike</Link>
          <Link to="/recommend/69" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Mysterious and wild-eyed, a new security guard for a cash truck surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.</p>
      </div>
    </div>
  );
}

export default Crime2;