import React from 'react';
import { Link } from 'react-router-dom';

function War1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Life Is Beautiful(1997)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/vita.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/war/2" className="button">Like</Link>
          <Link to="/war/2" className="button">Dislike</Link>
          <Link to="/recommend/104" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.</p>
      </div>
    </div>
  );
}

export default War1;