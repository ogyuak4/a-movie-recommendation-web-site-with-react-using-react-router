import React from 'react';
import { Link } from 'react-router-dom';

function Crime1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Kvinden i buret(2013)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/depq.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/crime/2" className="button">Like</Link>
          <Link to="/crime/2" className="button">Dislike</Link>
          <Link to="/recommend/68" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Police inspector Carl Mørck is put in charge of a department of cold cases, joined only by his assistant Assad. They dig into a case about a missing woman.</p>
      </div>
    </div>
  );
}

export default Crime1;