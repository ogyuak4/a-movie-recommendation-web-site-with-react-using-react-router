import React from 'react';
import { Link } from 'react-router-dom';


function Drama14() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Nefes: Vatan Sağolsun(2009)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/nefes.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/drama/1" className="button">Like</Link>
            <Link to="/drama/1" className="button">Dislike</Link>
            <Link to="/recommend/15" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">A small group of Turkish soldiers in a remote patrol station in eastern Turkey face their near-certain death, during a time the conflict between Turkish Army and separatist militant organization PKK reached its peak point.</p>
        </div>
      </div>
    );
  }

export default Drama14