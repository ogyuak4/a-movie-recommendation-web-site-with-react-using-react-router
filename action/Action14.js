import React from 'react';
import { Link } from 'react-router-dom';

function Action14() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Hardcore Henry(2015)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/hhenry.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/action/1" className="button">Like</Link>
            <Link to="/action/1" className="button">Dislike</Link>
            <Link to="/recommend/30" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Waking inside a laboratory on an airship, a man recalls bullies from his childhood. A scientist, Estelle, greets him and tells him his name is Henry, she is his wife, and that he has been revived from an accident that left him amnesiac and mute. After she replaces a missing arm and leg with cybernetic prostheses, mercenaries led by the psychokinetic Akan raid the ship, claiming all of Estelle's research is Akan's corporate property. He kills Estelle's scientists before attempting to murder Henry, but Henry and Estelle flee in an escape pod, landing in Moscow. Estelle is abducted by the mercenaries, who try to kill Henry..</p>
        </div>
      </div>
    );
  }
  
  export default Action14