import React from 'react';
import { Link } from 'react-router-dom';

function Action4() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Lock, Stock and Two Smoking Barrels(1998)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/lockstock.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/action/10" className="button">Like</Link>
            <Link to="/action/9" className="button">Dislike</Link>
            <Link to="/recommend/20" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Four Jack-the-lads find themselves heavily - seriously heavily - in debt to an East End hard man and his enforcers after a crooked card game. Overhearing their neighbours in the next flat plotting to hold up a group of out-of-their-depth drug growers, our heroes decide to stitch up the robbers in turn. In a way the confusion really starts when a pair of antique double-barrelled shotguns go missing in a completely different scam.</p>
        </div>
      </div>
    );
  }
  
  export default Action4