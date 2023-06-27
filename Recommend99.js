
import React, { useState } from 'react';
function Recommend99() {
  const movie = {
    title: 'Recommended Movie: Warrior(2011)',
    image: '../images/warrior.png',
    description: 'The youngest son of an alcoholic former boxer returns home, where hes trained by his father for competition in a mixed martial arts tournament - a path that puts the fighter on a collision course with his estranged, older brother.',
    imdbUrl: 'https://www.imdb.com/title/tt1291584/?ref_=nv_sr_srsg_3_tt_8_nm_0_q_warrior'
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
export default Recommend99;