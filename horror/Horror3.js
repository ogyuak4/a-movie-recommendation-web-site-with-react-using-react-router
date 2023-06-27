import React from 'react';
import { Link } from 'react-router-dom';

function Horror3() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Maniac(2012)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/maniac.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/horror/2" className="button">Like</Link>
          <Link to="/horror/2" className="button">Dislike</Link>
          <Link to="/recommend/82" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Just when the streets seemed safe, a serial killer with a fetish for scalps is back and on the hunt. Frank is the withdrawn owner of a mannequin store, but his life changes when young artist Anna appears asking for his help with her new exhibition. As their friendship develops and Frank's obsession escalates, it becomes clear that she has unleashed a long-repressed compulsion to stalk and kill.</p>
      </div>
    </div>
  );
}

export default Horror3;