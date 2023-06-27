
import React, { useState } from 'react';
function Recommend51() {
  const movie = {
    title: 'Recommended Movie: Bully(2001)',
    image: '../images/bully.png',
    description: 'A pack of naïve teenagers conspire to murder a mutual friend, whose aggressive demeanour has proven too much.',
    imdbUrl: 'https://www.imdb.com/title/tt0242193/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_bully'
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
export default Recommend51;