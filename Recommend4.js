
import React, { useState } from 'react';

function Recommend4() {


  const movie = {
    title: 'Recommended Movie: Trainspotting(1996)',
    image: '../images/transpoitting.png',
    description: 'Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.',
    imdbUrl: 'https://www.imdb.com/title/tt0117951/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_transpoitting'
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

export default Recommend4;