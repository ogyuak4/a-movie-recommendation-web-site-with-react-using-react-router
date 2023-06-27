
import React, { useState } from 'react';
function Recommend34() {
  const movie = {
    title: 'Recommended Movie: Idiocracy(2006)',
    image: '../images/idiocracy.png',
    description: 'Corporal Joe Bauers, a decisively average American, is selected as a guinea pig for a top-secret hibernation program but is forgotten, awakening to a future so incredibly moronic hes easily the most intelligent person alive.',
    imdbUrl: 'https://www.imdb.com/title/tt0387808/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_iciocracy'
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
export default Recommend34;