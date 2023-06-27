import React from 'react';
import { Link } from 'react-router-dom';

function Thriller() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Restraint(2008)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/restraint.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/thriller/2" className="button">Like</Link>
          <Link to="/thriller/1" className="button">Dislike</Link>
          <Link to="/recommend/100" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">A small time criminal, Ron, has killed the boss of his girlfriend and they are escaping from the police. After killing a gas station attendant, Ron drives to an old manor in the middle of nowhere where Andrew, an agoraphobic, lives, in order to exchange their car. When he notes that Andrew is a wealthy man, Ron decides to get money from Andrew to travel to Thailand. Andrew notices that Dale resembles his fiancée, Gabrielle, who left him six months ago. He proposes that Dale dye her hair and go to the bank with two cheques of $20,000.00 pretending that she is Gabrielle. But things do not go according to plan.</p>
      </div>
    </div>
  );
}

export default Thriller;