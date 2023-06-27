import React from 'react';
import { Link } from 'react-router-dom';

function Comedy10() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Groundhog Day(1993)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/gday.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/comedy/3" className="button">Like</Link>
          <Link to="/comedy/3" className="button">Dislike</Link>
          <Link to="/recommend/62" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A weather man is reluctantly sent to cover a story about a weather forecasting "rat" (as he calls it). This is his fourth year on the story, and he makes no effort to hide his frustration. On awaking the 'following' day, he discovers that it's Groundhog Day again, and again, and again. First he uses this to his advantage, then comes the realisation that he is doomed to spend the rest of eternity in the same place, seeing the same people do the same thing every day.</p>
      </div>
    </div>
  );
}

export default Comedy10;