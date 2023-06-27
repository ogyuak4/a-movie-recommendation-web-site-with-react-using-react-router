import React from 'react';
import { Link } from 'react-router-dom';

function Thriller2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">68 Kill(2017)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/kill.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/thriller/1" className="button">Like</Link>
          <Link to="/thriller/1" className="button">Dislike</Link>
          <Link to="/recommend/102" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">It started with a couple dead bodies and $68,000 in stolen cash. Chip Taylor's girlfriend Liza had the perfect plan to rip off her rich sugar daddy. It should have been an easy in and out kind of deal. Nobody would get hurt and they would come out of it with enough loot to solve their problems. But things started going wrong as soon as they were inside the rich man's house, and for Chip it was only the beginning of the longest, most terrifying ride of his life.</p>
      </div>
    </div>
  );
}

export default Thriller2;