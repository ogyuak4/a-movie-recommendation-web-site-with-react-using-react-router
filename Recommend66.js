
import React, { useState } from 'react';
function Recommend66() {
  const movie = {
    title: 'Recommended Movie: Mayhem(2017)',
    image: '../images/mayhem.png',
    description: 'A virus spreads through an office complex causing white-collar workers to act out their worst impulses.',
    imdbUrl: 'https://www.imdb.com/title/tt4348012/?ref_=nv_sr_srsg_3_tt_6_nm_2_q_mayhem'
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
export default Recommend66;