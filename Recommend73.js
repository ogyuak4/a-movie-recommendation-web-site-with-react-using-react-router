
import React, { useState } from 'react';
function Recommend73() {
  const movie = {
    title: 'Recommended Movie: Scott Pilgrim vs. the World(2010)',
    image: '../images/scott.png',
    description: 'In a magically realistic version of Toronto, a young man must defeat his new girlfriends seven evil exes one by one in order to win her heart.',
    imdbUrl: 'https://www.imdb.com/title/tt0446029/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_scott%2520pilgrim'
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
export default Recommend73;