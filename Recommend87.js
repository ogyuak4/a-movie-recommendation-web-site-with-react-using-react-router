
import React, { useState } from 'react';
function Recommend87() {
  const movie = {
    title: 'Recommended Movie: The Ballad of Buster Scruggs(2018)',
    image: '../images/ballad.png',
    description: 'Six tales of life and violence in the Old West, following a singing gunslinger, a bank robber, a traveling impresario, an elderly prospector, a wagon train, and a perverse pair of bounty hunters.',
    imdbUrl: 'https://www.imdb.com/title/tt6412452/?ref_=nv_sr_srsg_0_tt_1_nm_0_q_ballad%2520buster%2520scruggs'
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
export default Recommend87;