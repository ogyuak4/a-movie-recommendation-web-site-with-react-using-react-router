import React from 'react';
import { Link } from 'react-router-dom';

function Sport() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Dangal(2016)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/dangal.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/sport/2" className="button">Like</Link>
          <Link to="/sport/1" className="button">Dislike</Link>
          <Link to="/recommend/97" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.</p>
      </div>
    </div>
  );
}

export default Sport;