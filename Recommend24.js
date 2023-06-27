
import React, { useState } from 'react';
function Recommend24() {
  const movie = {
    title: 'Recommended Movie: Polar(2019)',
    image: '../images/polar.png',
    description: 'A retiring assassin suddenly finds himself on the receiving end of a hit, contracted by none other than his own employer seeking to cash in on the pensions of aging employees.',
    imdbUrl: 'https://www.imdb.com/title/tt4139588/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_polar'
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
export default Recommend24;