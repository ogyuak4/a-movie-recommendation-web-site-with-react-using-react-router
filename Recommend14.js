
import React, { useState } from 'react';
function Recommend14() {
  const movie = {
    title: 'Recommended Movie: In Bruges(2008)',
    image: '../images/bruges.png',
    description: 'Guilt-stricken after a job gone wrong, hitman Ray and his partner await orders from their ruthless boss in Bruges, Belgium, the last place in the world Ray wants to be.',
    imdbUrl: 'https://www.imdb.com/title/tt0780536/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_in%2520bruges'
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
export default Recommend14;