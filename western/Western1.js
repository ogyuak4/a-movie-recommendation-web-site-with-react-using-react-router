import React from 'react';
import { Link } from 'react-router-dom';

function Western1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Once Upon a Time in the West(1968)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/once.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/western/2" className="button">Like</Link>
          <Link to="/western/2" className="button">Dislike</Link>
          <Link to="/recommend/107" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Story of a young woman, Mrs. McBain, who moves from New Orleans to frontier Utah, on the very edge of the American West. She arrives to find her new husband and family slaughtered, but by whom? The prime suspect, coffee-lover Cheyenne, befriends her and offers to go after the real killer, assassin gang leader Frank, in her honor. He is accompanied by Harmonica, a man already on a quest to get even.</p>
      </div>
    </div>
  );
}

export default Western1;