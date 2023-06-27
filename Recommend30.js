
import React, { useState } from 'react';
function Recommend30() {
  const movie = {
    title: 'Recommended Movie: Hardcore Henry(2015)',
    image: '../images/hhenry.png',
    description: 'Henry is resurrected from death with no memory, and he must save his wife from a telekinetic warlord with a plan to bio-engineer soldiers.',
    imdbUrl: 'https://www.imdb.com/title/tt3072482/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_hardcore%2520henry'
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
export default Recommend30;