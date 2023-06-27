
import React, { useState } from 'react';
function Recommend77() {
  const movie = {
    title: 'Recommended Movie: İstanbul Kanatlarımın Altında(2009)',
    image: '../images/istanbul.png',
    description: 'The story takes us back to the 17th century Istanbul, and the powerful times of the Ottoman Empire under the rule of Sultan Murad IV. Hezarfen Ahmet Celebi, Logari Celebi, Bekri Mustafa and Evliya Celebi are four good friends who do research to enable human beings to fly.',
    imdbUrl: 'https://www.imdb.com/title/tt0272142/?ref_=nv_sr_srsg_0_tt_1_nm_0_q_istanbul%2520kanatlar%25C4%25B1m%25C4%25B1n%2520alt%25C4%25B1ndake'
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
export default Recommend77;