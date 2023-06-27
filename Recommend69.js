
import React, { useState } from 'react';
function Recommend69() {
  const movie = {
    title: 'Recommended Movie: Wrath of Man(2021)',
    image: '../images/wrath.png',
    description: 'A cold and mysterious character working at a cash truck company responsible for moving a lot of money around Los Angeles each week.',
    imdbUrl: 'https://www.imdb.com/title/tt11083552/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_wrath%2520of%2520man'
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
export default Recommend69;