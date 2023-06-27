
import React, { useState } from 'react';
function Recommend63() {
  const movie = {
    title: 'Recommended Movie: Shoot Em Up(2007)',
    image: '../images/shoot.png',
    description: 'A man named Mr. Smith delivers a womans baby during a shootout, and is then called upon to protect the newborn from the army of gunmen.',
    imdbUrl: 'https://www.imdb.com/title/tt0465602/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_shoot%2520em%2520up'
  };
  const [likeCount, setLikeCount] = useState(0);
  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };
  const handleIMDbClick = () => {
    window.open(movie.imdbUrl, '_blank');
  };
  return (
    <div className="recommend-container">
      <h1 className="recommend-title">{movie.title}</h1>
      <div className="recommend-content">
        <img className="recommend-image" src={movie.image} alt="Movie Poster" />
        <p className="recommend-description">{movie.description}</p>
        <button className="recommend-button" onClick={handleLikeClick}>
          Like ({likeCount})
        </button>
        <button className="recommend-button" onClick={handleIMDbClick}>Go to IMDb</button>
      </div>
    </div>
  );
}
export default Recommend63;