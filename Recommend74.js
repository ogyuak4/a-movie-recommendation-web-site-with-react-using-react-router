
import React, { useState } from 'react';
function Recommend74() {
  const movie = {
    title: 'Recommended Movie: Trolljegeren(2010)',
    image: '../images/troll.png',
    description: 'A group of students investigates a series of mysterious bear killings, but learns that there are much more dangerous things going on. They start to follow a mysterious hunter, learning that he is actually a troll hunter.',
    imdbUrl: 'https://www.imdb.com/title/tt1740707/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_troll%2520hunter'
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
export default Recommend74;