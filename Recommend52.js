
import React, { useState } from 'react';
function Recommend52() {
  const movie = {
    title: 'Recommended Movie: Thank You for Smoking(2005)',
    image: '../images/smoke.png',
    description: 'Satirical comedy follows the machinations of Big Tobaccos chief spokesman, Nick Naylor, who spins on behalf of cigarettes while trying to remain a role model for his 12-year old son.',
    imdbUrl: 'https://www.imdb.com/title/tt0427944/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_thank%2520you'
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
export default Recommend52;