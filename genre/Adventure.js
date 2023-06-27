import React from 'react';
import { Link } from 'react-router-dom';


function Adventure() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">The Grand Budapest Hotel(2014)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/budapest.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/adventure/2" className="button">Like</Link>
          <Link to="/adventure/1" className="button">Dislike</Link>
          <Link to="/recommend/31" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">This movie recounts the adventures of M. Gustave (Ralph Fiennes), a legendary concierge at a famous European hotel between the wars, and Zero Moustafa (Tony Revolori), the lobby boy who becomes his most trusted friend. The story involves the theft and recovery of a priceless Renaissance painting and the battle for an enormous family fortune - all against the backdrop of a suddenly and dramatically changing continent.</p>
      </div>
    </div>
  );
}

export default Adventure;