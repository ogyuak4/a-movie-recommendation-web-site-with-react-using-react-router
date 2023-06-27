import React from 'react';
import { Link } from 'react-router-dom';

function Adventure6() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Pirates of the Caribbean: The Curse of the Black Pearl(2003)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/blackpearl.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/adventure/1" className="button">Like</Link>
          <Link to="/adventure/1" className="button">Dislike</Link>
          <Link to="/recommend/37" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made..</p>
      </div>
    </div>
  );
}

export default Adventure6