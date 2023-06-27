
import React, { useState } from 'react';
function Recommend83() {
  const movie = {
    title: 'Recommended Movie: V/H/S/2(2013)',
    image: '../images/vhs2.png',
    description: 'Searching for a missing student, two private investigators break into his house and find collection of VHS tapes. Viewing the horrific contents of each cassette, they realize there may be dark motives behind the students disappearance.',
    imdbUrl: 'https://www.imdb.com/title/tt2450186/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_v%2520h%2520s%25202'
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
export default Recommend83;