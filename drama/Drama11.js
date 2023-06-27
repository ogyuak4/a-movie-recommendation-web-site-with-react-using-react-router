import React from 'react';
import { Link } from 'react-router-dom';


function Drama11() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Das Leben der Anderen(2006)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/dlda.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/drama/6" className="button">Like</Link>
            <Link to="/drama/6" className="button">Dislike</Link>
            <Link to="/recommend/12" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Gerd Wiesler is an officer with the Stasi, the East German secret police. The film begins in 1984 when Wiesler attends a play written by Georg Dreyman, who is considered by many to be the ultimate example of the loyal citizen. Wiesler has a gut feeling that Dreyman can't be as ideal as he seems, and believes surveillance is called for. The Minister of Culture agrees but only later does Wiesler learn that the Minister sees Dreyman as a rival and lusts after his partner Christa-Maria. The more time he spends listening in on them, the more he comes to care about them. The once rigid Stasi officer begins to intervene in their lives, in a positive way, protecting them whenever possible. Eventually, Wiesler's activities catch up to him and while there is no proof of wrongdoing, he finds himself in menial jobs - until the unbelievable happens..</p>
        </div>
      </div>
    );
  }

export default Drama11