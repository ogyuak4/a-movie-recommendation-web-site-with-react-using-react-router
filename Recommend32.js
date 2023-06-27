
import React, { useState } from 'react';
function Recommend32() {
  const movie = {
    title: 'Recommended Movie: Jumanji: Welcome to the Jungle(2017)',
    image: '../images/jumanji.png',
    description: 'Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.',
    imdbUrl: 'https://www.imdb.com/title/tt2283362/?ref_=nv_sr_srsg_3_tt_7_nm_1_q_jumanji'
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
export default Recommend32;