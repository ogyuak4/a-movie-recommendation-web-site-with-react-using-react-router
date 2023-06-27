import React from 'react';
import { Link } from 'react-router-dom';

function Comedy() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Thank You for Smoking(2005)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/smoke.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/comedy/2" className="button">Like</Link>
          <Link to="/comedy/1" className="button">Dislike</Link>
          <Link to="/recommend/52" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">The chief spokesperson and lobbyist Nick Naylor is the Vice President of the Academy of Tobacco Studies. He is talented in speaking and spins arguments to defend the cigarette industry in the most difficult situations. His best friends are Polly Bailey that works in the Moderation Council in alcohol business, and Bobby Jay Bliss of the gun business own advisory group SAFETY. They frequently meet each other in a bar and they self-title the M.O.D. Squad, a.k.a. Merchants of Death, disputing which industry has killed more people. Nick's greatest enemy is Vermont's Senator Ortolan Finistirre, who defends in the Senate the use of a skull and crossbones on cigarette packs. Nick's son Joey Naylor lives with his mother, and has the chance to know his father in a business trip. When the ambitious reporter Heather Holloway betrays Nick disclosing confidences he had in bed with her, his life turns upside-down. But Nick is good in what he does for the mortgage.</p>
      </div>
    </div>
  );
}

export default Comedy;