
import React, { useState } from 'react';
function Recommend25() {
  const movie = {
    title: 'Recommended Movie: Collateral(2004)',
    image: '../images/collateral.png',
    description: 'A cab driver finds himself the hostage of an engaging contract killer as he makes his rounds from hit to hit during one night in Los Angeles..',
    imdbUrl: 'https://www.imdb.com/title/tt0369339/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_collateral'
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
export default Recommend25;