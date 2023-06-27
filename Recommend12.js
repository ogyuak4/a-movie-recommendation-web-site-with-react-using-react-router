
import React, { useState } from 'react';
function Recommend12() {
  const movie = {
    title: 'Recommended Movie: Das Leben der Anderen(2006)',
    image: '../images/dlda.png',
    description: 'In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.',
    imdbUrl: 'https://www.imdb.com/title/tt0405094/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_das%2520leben%2520der%2520anderen'
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
export default Recommend12;