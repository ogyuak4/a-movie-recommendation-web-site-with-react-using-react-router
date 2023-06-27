
import React, { useState } from 'react';

function Recommend2() {


  const movie = {
    title: 'Recommended Movie: Jagten (2012)',
    image: '../images/jagten.png',
    description: 'Lucas is a Kindergarten teacher who takes great care of his students. Unfortunately for him, young Klara has a run-away imagination and concocts a lie about her teacher. Before Lucas is even able to understand the consequences, he has become the outcast of the town. The hunt is on to prove his innocence before its taken from him for good',
    imdbUrl: 'https://www.imdb.com/title/tt2106476/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_jagten'
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
export default Recommend2