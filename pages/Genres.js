import React from 'react';
import { Link } from "react-router-dom"


function Genres() {
  return (
    <div className='genres'>
      <h1>Select your genre for the movie you want to see!!</h1>
      <Link to="action" className='action'>Action</Link>
      <Link to="adventure" className='adventure'>Adventure</Link>
      <Link to="animation" className='animation'>Animation</Link>
      <Link to="biography" className='biography'>Biography</Link>
      <Link to="comedy" className='comedy'>Comedy</Link>
      <Link to="crime" className='crime'>Crime</Link>
      <Link to="drama" className='drama'>Drama</Link>
      <Link to="family" className='family'>Family</Link>
      <Link to="fantasy" className='fantasy'>Fantasy</Link>
      <Link to="history" className='history'>History</Link>
      <Link to="horror" className='horror'>Horror</Link>
      <Link to="musical" className='musical'>Musical</Link>
      <Link to="romance" className='romance'>Romance</Link>
      <Link to="scifi" className='scifi'>Science_Fiction</Link>
      <Link to="short" className='short'>Short</Link>
      <Link to="sport" className='sport'>Sport</Link>
      <Link to="thriller" className='thriller'>Thriller</Link>
      <Link to="war" className='war'>War</Link>
      <Link to="western" className='western'>Western</Link>
    </div>
  );
}

export default Genres;