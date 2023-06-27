
import React, { useState } from 'react';
function Recommend96() {
  const movie = {
    title: 'Recommended Movie: One-Minute Time Machine(2014)',
    image: '../images/one.png',
    description: 'James is all too eager to put his one-minute time machine to use in winning the heart of Regina, until he discovers the unexpected consequences of his actions.',
    imdbUrl: 'https://www.imdb.com/title/tt3620860/?ref_=ttls_li_tt'
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
export default Recommend96;