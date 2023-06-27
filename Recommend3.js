
import React, { useState } from 'react';

function Recommend3() {


  const movie = {
    title: 'Recommended Movie: 40 (2009)',
    image: '../images/40.png',
    description: 'A bag full of money lands in front of you. Is it luck? The answer to your prayers? Part of a predetermined plan? Or all of the above? Set in the chaotic streets of Istanbul, 40 is a story of three strangers making their way in a city of 12 million, all searching...for one bag.',
    imdbUrl: 'https://www.imdb.com/title/tt1468700/?ref_=fn_tt_tt_4'
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

export default Recommend3;