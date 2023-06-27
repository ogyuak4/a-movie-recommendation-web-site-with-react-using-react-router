import React from 'react';
import { Link } from 'react-router-dom';

function History1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Istanbul Kanatlarimin Altinda(1996)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/istanbul.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/history/2" className="button">Like</Link>
          <Link to="/history/2" className="button">Dislike</Link>
          <Link to="/recommend/77" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">The story takes us back to the 17th century Istanbul, and the powerful times of the Ottoman Empire under the rule of Sultan Murad IV. Hezarfen Ahmet Celebi, Logari Celebi, Bekri Mustafa and Evliya Celebi are four good friends who do research to enable human beings to fly.</p>
      </div>
    </div>
  );
}

export default History1;