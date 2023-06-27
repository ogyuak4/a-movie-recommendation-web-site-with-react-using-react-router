import React from 'react';
import { Link } from 'react-router-dom';

function Biography3() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">The Blind Side(2009)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/blind.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/biography/2" className="button">Like</Link>
            <Link to="/biography/2" className="button">Dislike</Link>
            <Link to="/recommend/48" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">The story of Michael Oher, a homeless and traumatized boy who became an All-American football player and first-round NFL draft pick with the help of a caring woman and her family..</p>
        </div>
      </div>
    );
  }
  
  export default Biography3;