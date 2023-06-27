
import React, { useState } from 'react';
function Recommend42() {
  const movie = {
    title: 'Recommended Movie: Garfield: A Tale of Two Kitties(2006)',
    image: '../images/garfield.png',
    description: 'Jon and Garfield visit the United Kingdom, where a case of mistaken cat identity finds Garfield ruling over a castle. His reign is soon jeopardized by the nefarious Lord Dargis, who has designs on the estate.',
    imdbUrl: 'https://www.imdb.com/title/tt0455499/?ref_=nv_sr_srsg_0_tt_6_nm_2_q_garfield%25202'
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
export default Recommend42;