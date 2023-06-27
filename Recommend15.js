
import React, { useState } from 'react';
function Recommend15() {
  const movie = {
    title: 'Recommended Movie: Nefes: Vatan Sağolsun(2009)',
    image: '../images/nefes.png',
    description: 'Story of 40-man Turkish task force who must defend a relay station.',
    imdbUrl: 'https://www.imdb.com/title/tt1171701/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_nefes'
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
export default Recommend15;