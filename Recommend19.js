
import React, { useState } from 'react';
function Recommend19() {
  const movie = {
    title: 'Recommended Movie: Upgrade(2018)',
    image: '../images/upgrade.png',
    description: 'Set in the near-future, technology controls nearly all aspects of life. But when the world of Grey, a self-labeled technophobe, is turned upside down, his only hope for revenge is an experimental computer chip implant.',
    imdbUrl: 'https://www.imdb.com/title/tt6499752/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_upgrade'
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
export default Recommend19;