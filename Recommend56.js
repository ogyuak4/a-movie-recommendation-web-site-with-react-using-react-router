
import React, { useState } from 'react';
function Recommend56() {
  const movie = {
    title: 'Recommended Movie: Up in the Air(2009)',
    image: '../images/upintheair.png',
    description: 'Ryan Bingham enjoys living out of a suitcase for his job, travelling around the country firing people, but finds that lifestyle threatened by the presence of a potential love interest, and a new hire presenting a new business model.',
    imdbUrl: 'https://www.imdb.com/title/tt1193138/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_up%2520in%2520the%2520air'
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
export default Recommend56;