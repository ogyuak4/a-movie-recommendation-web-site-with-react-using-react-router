
import React, { useState } from 'react';
function Recommend89() {
  const movie = {
    title: 'Recommended Movie: Buffalo 66(1998)',
    image: '../images/buffalo.png',
    description: 'After being released from prison, Billy is set to visit his parents with his wife, whom he does not actually have. This provokes Billy to act out, as he kidnaps a girl and forces her to act as his wife for the visit.',
    imdbUrl: 'https://www.imdb.com/title/tt0118789/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_buffalo'
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
export default Recommend89;