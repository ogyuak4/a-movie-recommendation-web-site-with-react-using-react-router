
import React, { useState } from 'react';
function Recommend18() {
  const movie = {
    title: 'Recommended Movie: The Hunt(2020)',
    image: '../images/hunt.png',
    description: 'Twelve strangers wake up in a clearing. They dont know where they are, or how they got there. They dont know theyve been chosen - for a very specific purpose',
    imdbUrl: 'https://www.imdb.com/title/tt8244784/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_the%2520hunt'
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
export default Recommend18;