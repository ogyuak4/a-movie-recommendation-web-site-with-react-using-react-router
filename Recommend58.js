import React, { useState } from 'react';
function Recommend58() {
  const movie = {
    title: 'Recommended Movie: Naked(1993)',
    image: '../images/naked.png',
    description: 'An unemployed Mancunian vents his rage on unsuspecting strangers as he embarks on a nocturnal London odyssey.',
    imdbUrl: 'https://www.imdb.com/title/tt0107653/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_naked'
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
export default Recommend58;