
import React, { useState } from 'react';
function Recommend31() {
  const movie = {
    title: 'Recommended Movie: The Grand Budapest Hotel(2014)',
    image: '../images/budapest.png',
    description: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotels glorious years under an exceptional concierge.',
    imdbUrl: 'https://www.imdb.com/title/tt2278388/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_budap'
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
export default Recommend31;