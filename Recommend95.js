
import React, { useState } from 'react';
function Recommend95() {
  const movie = {
    title: 'Recommended Movie: Tune for Two(2011)',
    image: '../images/mana.png',
    description: 'An assassin drags his victim into the middle of the snowy woods, digs a pit, positions him next to it and prepares to finish the job. His victim seems to want to go out singing though.',
    imdbUrl: 'https://www.imdb.com/title/tt1879091/?ref_=ttls_li_tt'
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
export default Recommend95;