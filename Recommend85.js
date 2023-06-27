
import React, { useState } from 'react';
function Recommend85() {
  const movie = {
    title: 'Recommended Movie: The VVitch: A New-England Folktale(2015)',
    image: '../images/witch.png',
    description: 'A family in 1630s New England is torn apart by the forces of witchcraft, black magic and possession.',
    imdbUrl: 'https://www.imdb.com/title/tt4263482/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_witch'
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
export default Recommend85;