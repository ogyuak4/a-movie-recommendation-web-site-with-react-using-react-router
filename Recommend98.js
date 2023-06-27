
import React, { useState } from 'react';
function Recommend98() {
  const movie = {
    title: 'Recommended Movie: Bizim Için Sampiyon(2018)',
    image: '../images/sampuan.png',
    description: 'A true love and success story from the 1990s Turkey, revolving around a jockey (Halis Karatas), a horse (Bold Pilot) and the daughter of the horses owner who is at the same time the voluntary caretaker of the horse.',
    imdbUrl: 'https://www.imdb.com/title/tt9124428/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_%25C5%259Fampiyon'
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
export default Recommend98;