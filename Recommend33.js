
import React, { useState } from 'react';
function Recommend33() {
  const movie = {
    title: 'Recommended Movie: Balada triste de trompeta(2010)',
    image: '../images/balada.png',
    description: 'A young trapeze artist must decide between her lust for Sergio, the Happy Clown, or her affection for Javier, the Sad Clown, both of whom are deeply disturbed.',
    imdbUrl: 'https://www.imdb.com/title/tt1572491/?ref_=nv_sr_srsg_0_tt_1_nm_1_q_balada%2520trista'
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
export default Recommend33;