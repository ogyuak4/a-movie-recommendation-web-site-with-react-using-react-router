import React from 'react';
import { Link } from "react-router-dom"


function Drama10() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Calibre(2018)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/calibre.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/drama/3" className="button">Like</Link>
            <Link to="/drama/3" className="button">Dislike</Link>
            <Link to="/recommend/11" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">A shocking deed turned their weekend trip into a nightmare. Now their only hope is to swallow their paranoia and act normal.</p>
        </div>
      </div>
    );
  }

export default Drama10