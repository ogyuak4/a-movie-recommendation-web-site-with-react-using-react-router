
import React, { useState } from 'react';
function Recommend102() {
  const movie = {
    title: 'Recommended Movie: 68 Kill(2017)',
    image: '../images/kill.png',
    description: 'A punk-rock after hours about femininity, masculinity and the theft of $68,000...',
    imdbUrl: 'https://www.imdb.com/title/tt5189894/?ref_=nv_sr_srsg_0_tt_2_nm_0_q_68%2520kill'
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
export default Recommend102;