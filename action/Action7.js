import React from 'react';
import { Link } from 'react-router-dom';

function Action7() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Dune(2021)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/dune.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/action/2" className="button">Like</Link>
            <Link to="/action/2" className="button">Dislike</Link>
            <Link to="/recommend/23" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">A mythic and emotionally charged hero's journey, "Dune" tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.</p>
        </div>
      </div>
    );
  }
  
  export default Action7