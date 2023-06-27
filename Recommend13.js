
import React, { useState } from 'react';
function Recommend13() {
  const movie = {
    title: 'Recommended Movie: Yedinci Kogustaki Mucize(2019)',
    image: '../images/yedkogus.png',
    description: 'A story of love between a mentally-ill father who was wrongly accused of murder and his lovely six year old daughter. Prison will be their home. ',
    imdbUrl: 'https://www.imdb.com/title/tt10431500/?ref_=nv_sr_srsg_0_tt_4_nm_4_q_7.%2520ko%25C4%259Fu%25C5%259Fta'
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
export default Recommend13;