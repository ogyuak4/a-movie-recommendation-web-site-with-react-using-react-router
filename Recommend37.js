
import React, { useState } from 'react';
function Recommend37() {
  const movie = {
    title: 'Recommended Movie: Pirates of the Caribbean: The Curse of the Black Pearl(2003)',
    image: '../images/blackpearl.png',
    description: 'Blacksmith Will Turner teams up with eccentric pirate "Captain" Jack Sparrow to save his love, the governors daughter, from Jacks former pirate allies, who are now undead.',
    imdbUrl: 'https://www.imdb.com/title/tt0325980/?ref_=nv_sr_srsg_0_tt_6_nm_2_q_black%2520pearl'
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
export default Recommend37;