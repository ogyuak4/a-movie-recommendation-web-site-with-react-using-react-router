import React from 'react';
import { Link } from 'react-router-dom';

function Action11() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Vantage Point(2008)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/vpoint.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/action/6" className="button">Like</Link>
            <Link to="/action/6" className="button">Dislike</Link>
            <Link to="/recommend/27" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">The attempted assassination of the American President is told and re-told from several different perspectives..</p>
        </div>
      </div>
    );
  }
  
  export default Action11