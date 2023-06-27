
import React, { useState } from 'react';
function Recommend108() {
  const movie = {
    title: 'Recommended Movie: Brimstone(2016)',
    image: '../images/brimstone.png',
    description: 'From the moment the new Reverend climbs the pulpit, Liz knows that she and her family are in great danger.',
    imdbUrl: 'https://www.imdb.com/title/tt1895315/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_brimstone'
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
export default Recommend108;