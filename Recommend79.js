
import React, { useState } from 'react';
function Recommend79() {
  const movie = {
    title: 'Recommended Movie: The Others(2001)',
    image: '../images/others.png',
    description: 'A woman who lives in her darkened old family house with her two photosensitive children becomes convinced that the home is haunted.',
    imdbUrl: 'https://www.imdb.com/title/tt0230600/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_the%2520others'
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
export default Recommend79;