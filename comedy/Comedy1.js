import React from 'react';
import { Link } from 'react-router-dom';

function Comedy1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">The Gentlemen(2019)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/gentlemen.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/comedy/4" className="button">Like</Link>
          <Link to="/comedy/3" className="button">Dislike</Link>
          <Link to="/recommend/53" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A talented American graduate of Oxford, using his unique skills, and audacity, creates a marijuana empire using the estates of impoverished British aristocrats. However, when he tries to sell his empire to a fellow American billionaire, a chain of events unfolds, involving blackmail, deception, mayhem and murder between street thugs, Russian oligarchs, Triad gangsters and gutter journalists.</p>
      </div>
    </div>
  );
}

export default Comedy1;