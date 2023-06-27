
import React, { useState } from 'react';
function Recommend9() {
  const movie = {
    title: 'Recommended Movie: Requiem for a Dream(2000)',
    image: '../images/rfd.png',
    description: 'The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.',
    imdbUrl: 'https://www.imdb.com/title/tt0180093/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_requiem%2520for%2520drea'
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
export default Recommend9;
