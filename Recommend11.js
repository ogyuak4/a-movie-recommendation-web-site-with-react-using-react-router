
import React, { useState } from 'react';
function Recommend11() {
  const movie = {
    title: 'Recommended Movie: Calibre(2018)',
    image: '../images/calibre.png',
    description: 'A shocking deed turned their weekend trip into a nightmare. Now their only hope is to swallow their paranoia and act normal.',
    imdbUrl: 'https://www.imdb.com/title/tt6218358/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_calibre'
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
export default Recommend11;