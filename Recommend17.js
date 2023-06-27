
import React, { useState } from 'react';
function Recommend17() {
  const movie = {
    title: 'Recommended Movie: Den of Thieves(2018)',
    image: '../images/dot.png',
    description: 'An elite unit of the LA County Sheriffs Dept. and the states most successful bank robbery crew clash as the outlaws plan a seemingly impossible heist on the Federal Reserve Bank.',
    imdbUrl: 'https://www.imdb.com/title/tt1259528/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_den%2520of%2520thieves'
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
export default Recommend17;