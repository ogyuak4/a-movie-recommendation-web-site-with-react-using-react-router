import React from 'react';
import { Link } from 'react-router-dom';

function Comedy14() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Mayhem(2017)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/mayhem.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/comedy/1" className="button">Like</Link>
          <Link to="/comedy/1" className="button">Dislike</Link>
          <Link to="/recommend/66" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Mayhem tells the story of a virus that infects a corporate law office on the day attorney Derek Cho (Yeun) is framed by a co-worker and wrongfully fired. The infection is capable of making people act out their wildest impulses. Trapped in the quarantined building, our hero is forced to savagely fight tooth and nail for not only his job but his life.</p>
      </div>
    </div>
  );
}

export default Comedy14;