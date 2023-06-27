import React from 'react';
import { Link } from 'react-router-dom';

function Biography2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Schindler's List(1993)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/schindler.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/biography/6" className="button">Like</Link>
          <Link to="/biography/5" className="button">Dislike</Link>
          <Link to="/recommend/47" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.</p>
      </div>
    </div>
  );
}

export default Biography2;