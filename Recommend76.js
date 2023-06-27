
import React, { useState } from 'react';
function Recommend76() {
  const movie = {
    title: 'Recommended Movie: Kingdom of Heaven(2005)',
    image: '../images/kingdom.png',
    description: 'Balian of Ibelin travels to Jerusalem during the Crusades of the 12th century, and there he finds himself as the defender of the city and its people.',
    imdbUrl: 'https://www.imdb.com/title/tt0320661/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_kingdom%2520of%2520heave'
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
export default Recommend76;