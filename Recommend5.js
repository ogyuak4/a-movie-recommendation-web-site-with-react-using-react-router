
import React, { useState } from 'react';
function Recommend5() {
  const movie = {
    title: 'Recommended Movie: Låt den rätte komma in(2008)',
    image: '../images/komma.png',
    description: 'Oskar, an overlooked and bullied boy, finds love and revenge through Eli, a beautiful but peculiar girl.',
    imdbUrl: 'https://www.imdb.com/title/tt1139797/?ref_=nv_sr_srsg_0_tt_4_nm_0_q_rat%2520den%2520komma'
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
export default Recommend5;
