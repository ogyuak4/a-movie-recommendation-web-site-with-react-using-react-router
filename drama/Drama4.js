import React from 'react';
import { Link } from "react-router-dom";


function Drama4() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Låt den rätte komma in(2008)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/komma.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/drama/10" className="button">Like</Link>
            <Link to="/drama/9" className="button">Dislike</Link>
            <Link to="/recommend/5" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Oskar, a bullied 12-year old, dreams of revenge. He falls in love with Eli, a peculiar girl. She can't stand the sun or food and to come into a room she needs to be invited. Eli gives Oskar the strength to hit back but when he realizes that Eli needs to drink other people's blood to live he's faced with a choice. How much can love forgive? Set in the Stockholm suburb of Blackeberg in 1982.</p>
        </div>
      </div>
    );
  }

export default Drama4