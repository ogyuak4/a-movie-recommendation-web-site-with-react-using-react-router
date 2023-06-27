
import React, { useState } from 'react';
function Recommend40() {
  const movie = {
    title: 'Recommended Movie: Sen to Chihiro no kamikakushi(2001)',
    image: '../images/spirited.png',
    description: 'During her familys move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.',
    imdbUrl: 'https://www.imdb.com/title/tt0245429/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_spirited%2520away'
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
export default Recommend40;