import React from 'react';
import { Link } from 'react-router-dom';

function SciFi2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Children of Men(2006)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/children.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/scifi/1" className="button">Like</Link>
          <Link to="/scifi/1" className="button">Dislike</Link>
          <Link to="/recommend/94" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">In 2027, in a chaotic world in which women have somehow become infertile, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea.</p>
      </div>
    </div>
  );
}

export default SciFi2;