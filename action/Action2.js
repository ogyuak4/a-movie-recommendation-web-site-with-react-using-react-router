import React from 'react';
import { Link } from 'react-router-dom';

function Action2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">The Hunt(2020)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/hunt.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/action/6" className="button">Like</Link>
          <Link to="/action/5" className="button">Dislike</Link>
          <Link to="/recommend/18" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Twelve strangers wake up in a clearing. They don't know where they are -- or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted, Crystal, turns the tables on her pursuers</p>
      </div>
    </div>
  );
}

export default Action2