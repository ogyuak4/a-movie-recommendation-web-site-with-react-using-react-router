
import React, { useState } from 'react';
function Recommend80() {
  const movie = {
    title: 'Recommended Movie: V/H/S(2012)',
    image: '../images/vhs.png',
    description: 'When a group of misfits are hired by an unknown third party to burglarize a desolate house and acquire a rare VHS tape, they discover more found footage than they bargained for.',
    imdbUrl: 'https://www.imdb.com/title/tt2105044/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_v%2520h%2520s'
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
export default Recommend80;