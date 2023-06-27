
import React, { useState } from 'react';
function Recommend43() {
  const movie = {
    title: 'Recommended Movie: Açela(2020)',
    image: '../images/acela.png',
    description: 'Açela and her friends embark on an enchanting journey deep into a mysterious forest to discover the villages legend of the Taleteller.',
    imdbUrl: 'https://www.imdb.com/title/tt9646548/?ref_=nv_sr_srsg_0_tt_3_nm_5_q_a%25C3%25A7ela'
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
export default Recommend43;