import React from 'react';
import { Link } from 'react-router-dom';

function Horror5() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Get Out(2017)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/getout.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/horror/1" className="button">Like</Link>
          <Link to="/horror/1" className="button">Dislike</Link>
          <Link to="/recommend/84" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.</p>
      </div>
    </div>
  );
}

export default Horror5;