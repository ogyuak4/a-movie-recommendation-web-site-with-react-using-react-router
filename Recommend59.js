import React, { useState } from 'react';
function Recommend58() {
  const movie = {
    title: 'Recommended Movie: Kamera o tomeru na!(2017)',
    image: '../images/onecut.png',
    description: 'Things go badly for a hack director and film crew shooting a low budget zombie movie in an abandoned WWII Japanese facility, when they are attacked by real zombies.',
    imdbUrl: 'https://www.imdb.com/title/tt7914416/?ref_=fn_al_tt_1'
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
export default Recommend58;