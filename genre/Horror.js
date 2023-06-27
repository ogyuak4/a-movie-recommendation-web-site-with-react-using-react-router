import React from 'react';
import { Link } from 'react-router-dom';

function Horror() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">The Others(2001)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/others.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/horror/2" className="button">Like</Link>
          <Link to="/horror/1" className="button">Dislike</Link>
          <Link to="/recommend/79" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A woman named Grace retires with her two children to a mansion on Jersey, towards the end of the Second World War, where she's waiting for her husband to come back from battle. The children have a disease which means they cannot be touched by direct sunlight without being hurt in some way. They will live alone there with oppressive, strange and almost religious rules, until she needs to hire a group of servants for them. Their arrival will accidentally begin to break the rules with unexpected consequences.</p>
      </div>
    </div>
  );
}

export default Horror;