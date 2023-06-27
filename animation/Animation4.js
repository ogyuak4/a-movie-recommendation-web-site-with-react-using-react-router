import React from 'react';
import { Link } from 'react-router-dom';

function Animation4() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Garfield: A Tail of Two Kitties(2006)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/garfield.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/animation/2" className="button">Like</Link>
            <Link to="/animation/2" className="button">Dislike</Link>
            <Link to="/recommend/42" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Jon and Garfield visit the United Kingdom, where a case of mistaken cat identity finds Garfield ruling over a castle. His reign is soon jeopardized by the nefarious Lord Dargis, who has designs on the estate..</p>
        </div>
      </div>
    );
  }
  
  export default Animation4;