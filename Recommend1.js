
import React, { useState } from 'react';

function Recommend1() {


  const movie = {
    title: 'Recommended Movie: Babam ve Oğlum (2005)',
    image: '../images/babamveolm.png',
    description: 'Sadik is one of the rebellious youth who has been politically active as a university student and became a left-wing journalist in the 70s, despite his fathers expectations of him becoming an agricultural engineer and taking control of their family farm in an Aegean village. On the dawn of September 12, 1980, when a merciless military coup hits the country, they cannot find access to any hospital or a doctor and his wife dies while giving birth to their only child, Deniz. After a long-lasting period of torture, trials, and jail time, Sadik returns to his village with 7-8 years old Deniz, knowing that it will be hard to correct things with his father, Huseyin.',
    imdbUrl: 'https://www.imdb.com/title/tt0476735/'
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

export default Recommend1;
