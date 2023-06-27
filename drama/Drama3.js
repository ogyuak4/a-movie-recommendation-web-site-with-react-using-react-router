import React from 'react';
import { Link } from "react-router-dom";


function Drama3() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Trainspotting(1996)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/transpoitting.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/drama/8" className="button">Like</Link>
            <Link to="/drama/7" className="button">Dislike</Link>
            <Link to="/recommend/4" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">A wild, freeform, Rabelaisian trip through the darkest recesses of Edinburgh low-life, focusing on Mark Renton and his attempt to give up his heroin habit, and how the latter affects his relationship with family and friends: Sean Connery wannabe Sick Boy, dimbulb Spud, psycho Begbie, 14-year-old girlfriend Diane, and clean-cut athlete Tommy, who's never touched drugs but can't help being curious about them...</p>
        </div>
      </div>
    );
  }

export default Drama3