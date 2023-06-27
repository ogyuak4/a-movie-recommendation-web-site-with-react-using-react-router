
import React, { useState } from 'react';
function Recommend44() {
  const movie = {
    title: 'Recommended Movie: Kanashimi no Beradonna(1973)',
    image: '../images/bella.png',
    description: 'Blessed--and at the same time cursed--with the precious but fatal gift of beauty, the young peasant, Jeanne, falls in love with the beautiful villager, Jean, in middle-aged France. However, as the villages foul feudal lord exercises the "Droit du Seigneur" or the "Right of the First Night" on the couples wedding night, a desperate plunge to a world of disturbing hallucinations will eventually lead Jeanne to a damned Faustian bargain with the Prince of Darkness. Thirsting for power and sweet retribution, Jeanne will gradually transform into an omnipotent and destructive vessel of seduction, as her newly acquired powers go hand in hand with the blackest of witchcraft. Is there a limit to Jeannes hatred?',
    imdbUrl: 'https://www.imdb.com/title/tt0071203/?ref_=nv_sr_srsg_0_tt_4_nm_4_q_belladonna'
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
export default Recommend44;