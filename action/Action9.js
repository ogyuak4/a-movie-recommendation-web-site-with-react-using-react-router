import React from 'react';
import { Link } from 'react-router-dom';

function Action9() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Collateral(2004)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/collateral.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/action/3" className="button">Like</Link>
            <Link to="/action/3" className="button">Dislike</Link>
            <Link to="/recommend/25" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">This action thriller follows LA cabbie Max Durocher, the type of person who can wax poetic about other people's lives, which impresses U.S. Justice Department prosecutor Annie Farrell, one of his fares, so much that she gives him her telephone number at the end of her ride. Although a dedicated man as seen through the efficiency in which he does his work, he can't or won't translate that eloquence into a better life for himself. He deludes himself into believing that his now twelve year cabbie job is temporary and that someday he will own his own limousine service. He even lies to his hospitalized mother that he already owns one, with a further lie that he tells her as such primarily to make her happy, rather than the truth which is that he won't do anything to achieve that dream. One night, Max picks up a well dressed man named Vincent, who asks Max to be his only fare for the evening. For a flat fee of $600, plus an extra $100 if he gets to the airport on time - Vincent wants Max to drive him to five stops that evening. Max somewhat reluctantly agrees. Max learns the hard way at their first stop when a body falls from a third story apartment window and lands dead on top of his cab that Vincent is a contract hit man. Vincent's main goal, as per his current contract, is to kill five people, one at each of the stops, but he will not let others get in the way of that goal, even if it means killing them, including Max. As Vincent forces Max to continue driving him for the evening, Max tries slyly at every turn to take back control of his life from Vincent, especially when Max learns of one of the names on Vincent's hit list. Meanwhile, LAPD narcotics detective, Ray Fanning, and ultimately the FBI get involved when Vincent's first victim is associated with a case in which Ray is working undercover. Ray is able to piece together information which makes him hot on Max and Vincent's tail.</p>
        </div>
      </div>
    );
  }
  
  export default Action9