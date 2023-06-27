import React from 'react';
import { Link } from 'react-router-dom';


function Biography1() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">A Beautiful Mind(2001)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/buytufil.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/biography/4" className="button">Like</Link>
          <Link to="/biography/3" className="button">Dislike</Link>
          <Link to="/recommend/46" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">From the heights of notoriety to the depths of depravity, John Forbes Nash, Jr. experienced it all. A mathematical genius, he made an astonishing discovery early in his career and stood on the brink of international acclaim. But the handsome and arrogant Nash soon found himself on a painful and harrowing journey of self-discovery. After many years of struggle, he eventually triumphed over his tragedy, and finally - late in life - received the Nobel Prize.</p>
      </div>
    </div>
  );
}

export default Biography1;