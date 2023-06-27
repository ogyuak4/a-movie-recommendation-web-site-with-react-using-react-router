import React from 'react';
import { Link } from 'react-router-dom';

function Animation6() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Belladonna of Sadness(1973)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/bella.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/animation/1" className="button">Like</Link>
            <Link to="/animation/1" className="button">Dislike</Link>
            <Link to="/recommend/44" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Blessed--and at the same time cursed--with the precious but fatal gift of beauty, the young peasant, Jeanne, falls in love with the beautiful villager, Jean, in middle-aged France. However, as the village's foul feudal lord exercises the "Droit du Seigneur" or the "Right of the First Night" on the couple's wedding night, a desperate plunge to a world of disturbing hallucinations will eventually lead Jeanne to a damned Faustian bargain with the Prince of Darkness. Thirsting for power and sweet retribution, Jeanne will gradually transform into an omnipotent and destructive vessel of seduction, as her newly acquired powers go hand in hand with the blackest of witchcraft. Is there a limit to Jeanne's hatred?</p>
        </div>
      </div>
    );
  }
  
  export default Animation6;