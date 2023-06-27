import React from 'react';
import { Link } from 'react-router-dom';


function Drama9() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Nightcrawler(2000)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/nightcrawler.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/drama/3" className="button">Like</Link>
            <Link to="/drama/3" className="button">Dislike</Link>
            <Link to="/recommend/10" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">NIGHTCRAWLER is a thriller set in the nocturnal underbelly of contemporary Los Angeles. Jake Gyllenhaal stars as Lou Bloom, a driven young man desperate for work who discovers the high-speed world of L.A. crime journalism. Finding a group of freelance camera crews who film crashes, fires, murder and other mayhem, Lou muscles into the cut-throat, dangerous realm of nightcrawling - where each police siren wail equals a possible windfall and victims are converted into dollars and cents. Aided by Rene Russo as Nina, a veteran of the blood-sport that is local TV news, Lou blurs the line between observer and participant to become the star of his own story.</p>
        </div>
      </div>
    );
  }

export default Drama9