
import React, { useState } from 'react';
function Recommend61() {
  const movie = {
    title: 'Recommended Movie: Double Date(2017)',
    image: '../images/ddate.png',
    description: 'A man cant speak to ladies. His friend makes things happen but with 2 man-killing sisters looking for a virgin man to sacrifice to bring daddy back from the dead..',
    imdbUrl: 'https://www.imdb.com/title/tt6136778/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_double%2520date'
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
export default Recommend61;