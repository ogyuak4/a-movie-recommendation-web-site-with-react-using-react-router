import React from 'react';
import { Link } from 'react-router-dom';

function Animation3() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Spider-Man: Into the Spider-Verse(2018)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/spider.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/animation/2" className="button">Like</Link>
            <Link to="/animation/2" className="button">Dislike</Link>
            <Link to="/recommend/41" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Phil Lord and Christopher Miller, the creative minds behind The Lego Movie and 21 Jump Street, bring their unique talents to a fresh vision of a different Spider-Man Universe, with a groundbreaking visual style that's the first of its kind. "Spider-Man(TM): Into the Spider-Verse" introduces Brooklyn teen Miles Morales (Shameik Moore), and the limitless possibilities of the Spider-Verse, where more than one can wear the mask..</p>
        </div>
      </div>
    );
  }
  
  export default Animation3;