import React from 'react';
import { Link } from 'react-router-dom';

function Horror4() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">V/H/S/2(2013)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/vhs2.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/horror/2" className="button">Like</Link>
          <Link to="/horror/2" className="button">Dislike</Link>
          <Link to="/recommend/83" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Searching for a missing student, two private investigators break into his house and find collection of VHS tapes. Viewing the horrific contents of each cassette, they realize there may be dark motives behind the student's disappearance.</p>
      </div>
    </div>
  );
}

export default Horror4;