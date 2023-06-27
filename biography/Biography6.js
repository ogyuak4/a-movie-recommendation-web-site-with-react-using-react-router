import React from 'react';
import { Link } from 'react-router-dom';

function Biography6() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Bully(2001)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/bully.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/biography/1" className="button">Like</Link>
            <Link to="/biography/1" className="button">Dislike</Link>
            <Link to="/recommend/51" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">After finding himself at the constant abuse of his best friend Bobby, Marty has become fed up with his friend's twisted ways. His girlfriend, a victim of Bobby's often cruel ways, couldn't agree more and they strategize murdering Bobby with a group of willing and unwilling participants in a small Florida town. In the midst of their plotting, they contemplate the possible aftermath.</p>
        </div>
      </div>
    );
  }
  
  export default Biography6;