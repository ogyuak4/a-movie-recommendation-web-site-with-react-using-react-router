import React from 'react';
import { Link } from 'react-router-dom';


function Action5() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Inception(2010)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/inception.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/action/12" className="button">Like</Link>
            <Link to="/action/11" className="button">Dislike</Link>
            <Link to="/recommend/21" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.</p>
        </div>
      </div>
    );
  }
  
  export default Action5