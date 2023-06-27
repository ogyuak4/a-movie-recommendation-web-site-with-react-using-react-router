import React from 'react';
import { Link } from 'react-router-dom';

function Musical1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">The Ballad of Buster Scruggs(2018)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/ballad.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/musical/2" className="button">Like</Link>
          <Link to="/musical/2" className="button">Dislike</Link>
          <Link to="/recommend/87" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Six tales of life and violence in the Old West, following a singing gunslinger, a bank robber, a traveling impresario, an elderly prospector, a wagon train, and a perverse pair of bounty hunters.</p>
      </div>
    </div>
  );
}

export default Musical1;