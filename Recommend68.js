
import React, { useState } from 'react';
function Recommend68() {
  const movie = {
    title: 'Recommended Movie: Kvinden i buret(2013)',
    image: '../images/depq.png',
    description: 'Police inspector Carl Mørck is put in charge of a department of cold cases, joined only by his assistant Assad. They dig into a case about a missing woman.',
    imdbUrl: 'https://www.imdb.com/title/tt2438644/?ref_=nv_sr_srsg_2_tt_8_nm_0_q_department'
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
export default Recommend68;