
import React, { useState } from 'react';
function Recommend41() {
  const movie = {
    title: 'Recommended Movie: Spider-Man: Into the Spider-Verse(2018)',
    image: '../images/spider.png',
    description: 'Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
    imdbUrl: 'https://www.imdb.com/title/tt4633694/?ref_=nv_sr_srsg_4_tt_7_nm_1_q_spiderman'
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
export default Recommend41;