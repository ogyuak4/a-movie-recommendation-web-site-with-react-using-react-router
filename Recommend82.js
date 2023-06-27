
import React, { useState } from 'react';
function Recommend82() {
  const movie = {
    title: 'Recommended Movie: Maniac(2012)',
    image: '../images/maniac.png',
    description: 'As he helps a young artist with her upcoming exhibition, the owner of a mannequin shops deadly, suppressed desires come to the surface.',
    imdbUrl: 'https://www.imdb.com/title/tt2103217/?ref_=nv_sr_srsg_3_tt_8_nm_0_q_maniac'
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
export default Recommend82;