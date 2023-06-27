import React from 'react';
import { Link } from 'react-router-dom';

function Action3() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Upgrade(2018)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/upgrade.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/action/8" className="button">Like</Link>
            <Link to="/action/7" className="button">Dislike</Link>
            <Link to="/recommend/19" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Grey's a stay-at-home mechanic, whose wife is Asha. One day, Grey asks Asha to help him return a car to his client. Whilst Grey and Asha's self-driving car malfunctions, it crashes. Grey watches helplessly as Asha bleeds to death next to him. Grey returns home - a widowed quadriplegic, under the care of his mother. His wife's death and the inability of police to identify their attackers cause him to sink into a depression. After a suicide attempt, he's offered to have high tech chip implanted - enabling him to walk. Though initially hesitant, he's persuaded to have the surgery.</p>
        </div>
      </div>
    );
  }
  
  export default Action3