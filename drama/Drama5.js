import React from 'react';
import { Link } from "react-router-dom";


function Drama5() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Beyaz Melek(2007)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/bmelek.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/drama/12" className="button">Like</Link>
            <Link to="/drama/11" className="button">Dislike</Link>
            <Link to="/recommend/6" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Mala Ahmet, the old leader of a Turkish tribe is suffering from cancer. While running away from the compulsory chemotherapy in the hospital he suddenly finds himself in a nursery home where he is confronted with a different but cruel culture of life.</p>
        </div>
      </div>
    );
  }

export default Drama5