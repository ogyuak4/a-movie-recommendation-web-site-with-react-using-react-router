import React from 'react';
import { Link } from 'react-router-dom';

function Horror6() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">The Witch(2015)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/witch.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/horror/1" className="button">Like</Link>
          <Link to="/horror/1" className="button">Dislike</Link>
          <Link to="/recommend/85" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">New England, 1630: William and Katherine try to lead a devout Christian life, homesteading on the edge of an impassible wilderness, with five children. When their newborn son mysteriously vanishes and their crops fail, the family begins to turn on one another. "The Witch" is a chilling portrait of a family unraveling within their own sins, leaving them prey for an inconceivable evil.</p>
      </div>
    </div>
  );
}

export default Horror6;