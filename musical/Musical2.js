import React from 'react';
import { Link } from 'react-router-dom';

function Musical2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Charlie and the Chocolate Factory(2005)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/charlie.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/musical/1" className="button">Like</Link>
          <Link to="/musical/1" className="button">Dislike</Link>
          <Link to="/recommend/88" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">When Willy Wonka decides to let five children into his chocolate factory, he decides to release five golden tickets in five separate chocolate bars, causing complete mayhem. The tickets start to be found, with the fifth going to a very special boy, called Charlie Bucket. With his Grandpa, Charlie joins the rest of the children to experience the most amazing factory ever. But not everything goes to plan within the factory.</p>
      </div>
    </div>
  );
}

export default Musical2;