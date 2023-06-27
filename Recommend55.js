
import React, { useState } from 'react';
function Recommend55() {
  const movie = {
    title: 'Recommended Movie: Happy Death Day(2017)',
    image: '../images/hdday.png',
    description: 'A college student must relive the day of her murder over and over again, in a loop that will end only when she discovers her killers identity.',
    imdbUrl: 'https://www.imdb.com/title/tt5308322/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_happy%2520death%2520da'
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
export default Recommend55;