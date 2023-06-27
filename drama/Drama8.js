import React from 'react';
import { Link } from 'react-router-dom';


function Drama8() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Requiem for a Dream(2000)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/rfd.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/drama/2" className="button">Like</Link>
            <Link to="/drama/2" className="button">Dislike</Link>
            <Link to="/recommend/9" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Sara Goldfarb (Ellen Burstyn) is a retired widow, living in a small apartment. She spends most of her time watching TV, especially a particular self-help show. She has delusions of rising above her current dull existence by being a guest on that show. Her son, Harry (Jared Leto) is a junkie but along with his friend Tyrone (Marlon Wayans) has visions of making it big by becoming a drug dealer. Harry's girlfriend Marion (Jennifer Connelly) could be fashion designer or artist but is swept along in Harry's drug-centric world. Meanwhile Sara has developed an addiction of her own. She desperately wants to lose weight and so goes on a crash course involving popping pills, pills which turn out to be very addictive and harmful to her mental state.</p>
        </div>
      </div>
    );
  }

export default Drama8