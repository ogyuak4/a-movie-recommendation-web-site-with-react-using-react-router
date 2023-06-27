
import React, { useState } from 'react';
function Recommend8() {
  const movie = {
    title: 'Recommended Movie: Lété en pente douce(1987)',
    image: '../images/douce.png',
    description: 'Fane wants nothing but a quiet countryside life with the woman and the sweet, brain damaged brother he loves. Envious neighbours however have plans of their own.',
    imdbUrl: 'https://www.imdb.com/title/tt0094405/?ref_=nv_sr_srsg_0_tt_1_nm_0_q_lete%2520en%2520pnete%2520douce'
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
export default Recommend8;
