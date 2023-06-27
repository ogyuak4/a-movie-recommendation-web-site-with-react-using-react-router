import React from 'react';
import { Link } from 'react-router-dom';


function Action6() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Game Night(2018)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/gamenight.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/action/14" className="button">Like</Link>
            <Link to="/action/13" className="button">Dislike</Link>
            <Link to="/recommend/22" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Married competitive gamer couple Max and Annie are trying to have a child, but their attempts are unsuccessful due to Max's stress surrounding his feelings of inadequacy when compared to his successful, attractive brother Brooks. During Max and Annie's routine weekend game night with their friends Ryan, and married couple Kevin and Michelle, Brooks shows up Max by arriving in a Corvette Stingray (Max's dream car) and sharing an embarrassing childhood story about Max. Brooks offers to host the next game night at a house he's renting while he's in town. Meanwhile, Max and Annie are trying to keep their game nights secret from their neighbor Gary, an awkward police officer after his divorce from their friend Debbie..</p>
        </div>
      </div>
    );
  }
  
  export default Action6