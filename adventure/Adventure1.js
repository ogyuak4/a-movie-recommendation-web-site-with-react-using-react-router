import React from 'react';
import { Link } from 'react-router-dom';

function Adventure1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Jumanji: Welcome to the Jungle(2017)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/jumanji.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/adventure/4" className="button">Like</Link>
          <Link to="/adventure/3" className="button">Dislike</Link>
          <Link to="/recommend/32" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">In a brand-new Jumanji adventure, four high-school kids discover an old video-game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji--you must survive it. To beat the game and return to the real world, they must go on the most dangerous adventure of their lives, discover what Alan Parrish left 20 years ago, and change the way they think about themselves --or they'll be stuck in the game forever, to be played by others without break.</p>
      </div>
    </div>
  );
}

export default Adventure1