
import React, { useState } from 'react';
function Recommend27() {
  const movie = {
    title: 'Recommended Movie: Vantage Point(2008)',
    image: '../images/vpoint.png',
    description: 'The attempted assassination of the American President is told and re-told from several different perspectives.',
    imdbUrl: 'https://www.imdb.com/title/tt0443274/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_vantage%2520point'
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
export default Recommend27;