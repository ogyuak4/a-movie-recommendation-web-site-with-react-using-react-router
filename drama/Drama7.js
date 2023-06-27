import React from 'react';
import { Link } from "react-router-dom";


function Drama7() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">L'été en pente douce(1987)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/douce.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/drama/2" className="button">Like</Link>
            <Link to="/drama/2" className="button">Dislike</Link>
            <Link to="/recommend/8" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Fane wants nothing but a quiet countryside life with the woman and the sweet, brain damaged brother he loves. Envious neighbours however have plans of their own.</p>
        </div>
      </div>
    );
  }

export default Drama7