import React from 'react';
import { Link } from 'react-router-dom';

function SciFi() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Prestige(2006)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/prestige.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/scifi/2" className="button">Like</Link>
          <Link to="/scifi/1" className="button">Dislike</Link>
          <Link to="/recommend/92" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.</p>
      </div>
    </div>
  );
}

export default SciFi;