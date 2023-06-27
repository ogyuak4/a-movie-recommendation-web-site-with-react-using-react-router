import React from 'react';
import { Link } from 'react-router-dom';

function Action10() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Snatch(2000)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/snatch.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/action/3" className="button">Like</Link>
            <Link to="/action/3" className="button">Dislike</Link>
            <Link to="/recommend/26" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Turkish and his close friend/accomplice Tommy get pulled into the world of match fixing by the notorious Brick Top. Things get complicated when the boxer they had lined up gets badly beaten by Mickey, who comes into the equation after Turkish, an unlicensed boxing promoter wants to buy a caravan off of Travellers. They then try to convince Mickey not only to fight for them, but to lose for them too. Whilst all this is going on, a huge diamond heist takes place, and a fistful of motley characters enter the story, including 'Cousin Avi', 'Boris The Blade', 'Franky Four Fingers' and 'Bullet Tooth Tony'. Things go from bad to worse as it all becomes about the money, the guns, and the damned dog.</p>
        </div>
      </div>
    );
  }
  
  export default Action10