
import React, { useState } from 'react';
function Recommend90() {
  const movie = {
    title: 'Recommended Movie: Bitter Moon(1992)',
    image: '../images/bitmoon.png',
    description: 'After hearing stories of her, a passenger on a cruise ship develops an irresistible infatuation with an eccentric paraplegics wife..',
    imdbUrl: 'https://www.imdb.com/title/tt0104779/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_bitter%2520moon'
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
export default Recommend90;