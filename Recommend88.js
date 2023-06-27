
import React, { useState } from 'react';
function Recommend88() {
  const movie = {
    title: 'Recommended Movie: Charlie and the Chocolate Factory(2005)',
    image: '../images/charlie.png',
    description: 'A young boy wins a tour through the most magnificent chocolate factory in the world, led by the worlds most unusual candy maker.',
    imdbUrl: 'https://www.imdb.com/title/tt0367594/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_charlie%2520chocolate'
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
export default Recommend88;