import React from 'react';
import { Link } from 'react-router-dom';


function Action() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Mad Max: Fury Road(2015)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/madmax.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/action/2" className="button">Like</Link>
          <Link to="/action/1" className="button">Dislike</Link>
          <Link to="/recommend/16" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and almost everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.</p>
      </div>
    </div>
  );
}

export default Action;