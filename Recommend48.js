
import React, { useState } from 'react';
function Recommend48() {
  const movie = {
    title: 'Recommended Movie: The Blind Side(2009)',
    image: '../images/blind.png',
    description: 'The story of Michael Oher, a homeless and traumatized boy who became an All-American football player and first-round NFL draft pick with the help of a caring woman and her family.',
    imdbUrl: 'https://www.imdb.com/title/tt0878804/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_blind%2520side'
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
export default Recommend48;