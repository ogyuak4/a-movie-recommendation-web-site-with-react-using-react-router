import React from 'react';
import { Link } from 'react-router-dom';

function Drama6() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Köksüz(2013)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/koksz.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/drama/14" className="button">Like</Link>
            <Link to="/drama/13" className="button">Dislike</Link>
            <Link to="/recommend/7" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Feride, a young woman, whose world is destroyed by the sudden death of her father, has to take the role of father in his orphaned family. Now she has to take care of her desperate mother and two siblings. Over time, she adheres to this role she has assumed and begins to act as a real head of the house. However, this situation drags each family member into a drama that is difficult to describe. Mother Nurcan desperately replaces her husband, whose daughter Feride lost, while her brother Ilker is disturbed by the responsibility given to Feride and begins to move away from his family. On the other hand, he r sister Özge's struggle with loneliness continues at full speed. Feride makes a decision to get rid of this heavy burden, and this decision changes everyone's destiny..</p>
        </div>
      </div>
    );
  }

export default Drama6