import React from 'react';
import { Link } from 'react-router-dom';

function Drama() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Babam ve Oğlum(2005)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/babamveolm.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/drama/2" className="button">Like</Link>
          <Link to="/drama/1" className="button">Dislike</Link>
          <Link to="/recommend/1" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Sadik is one of the rebellious youth who has been politically active as a university student and became a left-wing journalist in the 70's, despite his father's expectations of him becoming an agricultural engineer and taking control of their family farm in an Aegean village. On the dawn of September 12, 1980, when a merciless military coup hits the country, they cannot find access to any hospital or a doctor and his wife dies while giving birth to their only child, Deniz. After a long-lasting period of torture, trials, and jail time, Sadik returns to his village with 7-8 years old Deniz, knowing that it will be hard to correct things with his father, Huseyin</p>
      </div>
    </div>
  );
}

export default Drama;