import React from 'react';
import { Link } from 'react-router-dom';

function Animation1() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Coco(2017)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/coco.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/animation/4" className="button">Like</Link>
            <Link to="/animation/3" className="button">Dislike</Link>
            <Link to="/recommend/39" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.</p>
        </div>
      </div>
    );
  }
  
  export default Animation1;