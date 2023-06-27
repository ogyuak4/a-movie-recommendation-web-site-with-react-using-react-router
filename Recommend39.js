
import React, { useState } from 'react';
function Recommend39() {
  const movie = {
    title: 'Recommended Movie: Coco(2017)',
    image: '../images/coco.png',
    description: 'Aspiring musician Miguel, confronted with his familys ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.',
    imdbUrl: 'https://www.imdb.com/title/tt2380307/?ref_=nv_sr_srsg_0_tt_1_nm_7_q_coco'
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
export default Recommend39;