
import React, { useState } from 'react';
function Recommend38() {
  const movie = {
    title: 'Recommended Movie: WALL·E(2008)',
    image: '../images/walle.png',
    description: 'In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.',
    imdbUrl: 'https://www.imdb.com/title/tt0910970/?ref_=nv_sr_srsg_4_tt_4_nm_4_q_wall%2520e'
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
export default Recommend38;