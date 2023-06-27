import React from 'react';
import { Link } from 'react-router-dom';

function Action13() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">The Dark Knight(2008)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/tdk.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/action/1" className="button">Like</Link>
            <Link to="/action/1" className="button">Dislike</Link>
            <Link to="/recommend/29" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as "The Joker" appears in Gotham, creating a new wave of chaos. Batman's struggle against The Joker becomes deeply personal, forcing him to "confront everything he believes" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes.</p>
        </div>
      </div>
    );
  }
  
  export default Action13