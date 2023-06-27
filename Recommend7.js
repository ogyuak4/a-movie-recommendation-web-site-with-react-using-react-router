
import React, { useState } from 'react';
function Recommend7() {
  const movie = {
    title: 'Recommended Movie: Köksüz(2013)',
    image: '../images/koksz.png',
    description: 'The story of four people who cannot manage to become a family again after a loss and who destroy themselves with each passing day.',
    imdbUrl: 'https://www.imdb.com/title/tt2768444/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_k%25C3%25B6ks%25C3%25BCz'
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
export default Recommend7;
