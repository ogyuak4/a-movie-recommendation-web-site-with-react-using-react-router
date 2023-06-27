
import React, { useState } from 'react';
function Recommend6() {
  const movie = {
    title: 'Recommended Movie: Beyaz Melek(2007)',
    image: '../images/bmelek.png',
    description: 'Mala Ahmet, the old leader of a Turkish tribe is suffering from cancer. While running away from the compulsory chemotherapy in the hospital he suddenly finds himself in a nursery home where he is confronted with a different but cruel culture of life.',
    imdbUrl: 'https://www.imdb.com/title/tt1064931/?ref_=nv_sr_srsg_0_tt_3_nm_0_q_beyaz%2520melek'
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
export default Recommend6;
