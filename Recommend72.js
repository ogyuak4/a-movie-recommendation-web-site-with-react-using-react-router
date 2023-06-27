
import React, { useState } from 'react';
function Recommend72() {
  const movie = {
    title: 'Recommended Movie: Harry Potter and the Chamber of Secrets(2002)',
    image: '../images/harry2.png',
    description: 'An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.',
    imdbUrl: 'https://www.imdb.com/title/tt0295297/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_harry%2520potter%2520cham'
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
export default Recommend72;