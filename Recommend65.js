
import React, { useState } from 'react';
function Recommend65() {
  const movie = {
    title: 'Recommended Movie: Carne de neón(2010)',
    image: '../images/neon.png',
    description: 'Hoping to earn his mothers respect, a young hustler-turned-businessman tries to open a brothel with his two useless buddies.',
    imdbUrl: 'https://www.imdb.com/title/tt1259570/?ref_=fn_al_tt_1'
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
export default Recommend65;