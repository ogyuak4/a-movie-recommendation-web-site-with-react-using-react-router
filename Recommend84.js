
import React, { useState } from 'react';
function Recommend84() {
  const movie = {
    title: 'Recommended Movie: Get Out(2017)',
    image: '../images/getout.png',
    description: 'A young African-American visits his White girlfriends parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.',
    imdbUrl: 'https://www.imdb.com/title/tt5052448/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_get%2520out'
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
export default Recommend84;