
import React, { useState } from 'react';
function Recommend78() {
  const movie = {
    title: 'Recommended Movie: The Message(1976)',
    image: '../images/message.png',
    description: 'This epic historical drama chronicles the life and times of Prophet Muhammad and serves as an introduction to early Islamic history.',
    imdbUrl: 'https://www.imdb.com/title/tt0074896/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_the%2520message'
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
export default Recommend78;