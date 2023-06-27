import React from 'react';
import { Link } from 'react-router-dom';

function Romance1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Bitter Moon(1992)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/bitmoon.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/romance/2" className="button">Like</Link>
          <Link to="/romance/2" className="button">Dislike</Link>
          <Link to="/recommend/90" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">British couple Fiona (Dame Kristin Scott Thomas) and Nigel (Hugh Grant) are sailing to Istanbul en route to India. They encounter a beautiful French woman, and that night, Nigel meets her while dancing alone in the ship's bar. Later, he meets her crippled American husband Oscar (Peter Coyote), who tells him their story. While living in Paris for several years trying to be a writer, he becomes obsessed with a woman he met by chance on a bus. He tracks her down and they start a steamy love affair. Soon, Oscar finds himself enslaved body and soul by her love, and continues to tell Nigel the details of this relationship in various stages over several visits to Oscar's cabin.</p>
      </div>
    </div>
  );
}

export default Romance1;