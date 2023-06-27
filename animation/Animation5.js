import React from 'react';
import { Link } from 'react-router-dom';

function Animation5() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Açela(2020)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/acela.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/animation/1" className="button">Like</Link>
            <Link to="/animation/1" className="button">Dislike</Link>
            <Link to="/recommend/43" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Açela and her friends embark on an enchanting journey deep into a mysterious forest to discover the village's legend of the Taleteller.</p>
        </div>
      </div>
    );
  }
  
  export default Animation5;