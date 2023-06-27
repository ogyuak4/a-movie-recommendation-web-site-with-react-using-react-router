import React from 'react';
import { Link } from 'react-router-dom';

function Adventure3() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Idiocracy(2006)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/idiocracy.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/adventure/2" className="button">Like</Link>
          <Link to="/adventure/2" className="button">Dislike</Link>
          <Link to="/recommend/34" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Corporal Joe Bauers, a decisively average American, is selected as a guinea pig for a top-secret hibernation program but is forgotten, awakening to a future so incredibly moronic he's easily the most intelligent person alive..</p>
      </div>
    </div>
  );
}

export default Adventure3