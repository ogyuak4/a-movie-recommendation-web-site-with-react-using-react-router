
import React, { useState } from 'react';
function Recommend10() {
  const movie = {
    title: 'Recommended Movie: Nightcrawler(2014)',
    image: '../images/nightcrawler.png',
    description: 'When Louis Bloom, a con man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story.',
    imdbUrl: 'https://www.imdb.com/title/tt2872718/?ref_=nv_sr_srsg_0_tt_6_nm_2_q_nightcrawler'
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
export default Recommend10;
