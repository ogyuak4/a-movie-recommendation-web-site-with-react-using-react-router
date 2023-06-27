
import React, { useState } from 'react';
function Recommend60() {
  const movie = {
    title: 'Recommended Movie: Project X(2012)',
    image: '../images/project.png',
    description: 'Three high-school seniors throw a birthday party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.',
    imdbUrl: 'https://www.imdb.com/title/tt1636826/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_project%2520x'
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
export default Recommend60;