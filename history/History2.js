import React from 'react';
import { Link } from 'react-router-dom';

function History2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">The Message(1976)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/message.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/history/1" className="button">Like</Link>
          <Link to="/history/1" className="button">Dislike</Link>
          <Link to="/recommend/78" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">In the 7th century, Mohammed, Peace Be Upon Him, is visited by Angel Gabriel who urges him to lead the people of Mecca and worship God. But they're exiled in Medina before returning to Mecca to take up arms against their oppressors and liberate their city in the name of God (Allah).</p>
      </div>
    </div>
  );
}

export default History2;