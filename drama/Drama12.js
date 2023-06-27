import React from 'react';
import { Link } from 'react-router-dom';


function Drama12() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Yedinci Kogustaki Mucize(2019)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/yedkogus.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/drama/6" className="button">Like</Link>
            <Link to="/drama/6" className="button">Dislike</Link>
            <Link to="/recommend/13" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">A story of love between a mentally-ill father who was wrongly accused of murder and his lovely six year old daughter. Prison will be their home.</p>
        </div>
      </div>
    );
  }

export default Drama12