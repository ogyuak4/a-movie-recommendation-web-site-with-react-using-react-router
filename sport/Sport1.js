import React from 'react';
import { Link } from 'react-router-dom';

function Sport1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Bizim Için Sampiyon(2018)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/sampuan.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/sport/2" className="button">Like</Link>
          <Link to="/sport/2" className="button">Dislike</Link>
          <Link to="/recommend/98" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A true love and success story from the 1990s Turkey, revolving around a jockey (Halis Karatas), a horse (Bold Pilot) and the daughter of the horse's owner who is at the same time the voluntary caretaker of the horse.</p>
      </div>
    </div>
  );
}

export default Sport1;