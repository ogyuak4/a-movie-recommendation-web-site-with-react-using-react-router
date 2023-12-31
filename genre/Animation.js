import React from 'react';
import { Link } from 'react-router-dom';


function Animation() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">WALL-E(2008)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/walle.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/animation/2" className="button">Like</Link>
          <Link to="/animation/1" className="button">Dislike</Link>
          <Link to="/recommend/38" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">In a distant, but not so unrealistic, future where mankind has abandoned earth because it has become covered with trash from products sold by the powerful multi-national Buy N Large corporation, WALL-E, a garbage collecting robot has been left to clean up the mess. Mesmerized with trinkets of Earth's history and show tunes, WALL-E is alone on Earth except for a sprightly pet cockroach. One day, EVE, a sleek (and dangerous) reconnaissance robot, is sent to Earth to find proof that life is once again sustainable. WALL-E falls in love with EVE. WALL-E rescues EVE from a dust storm and shows her a living plant he found amongst the rubble. Consistent with her "directive", EVE takes the plant and automatically enters a deactivated state except for a blinking green beacon. WALL-E, doesn't understand what has happened to his new friend, but, true to his love, he protects her from wind, rain, and lightning, even as she is unresponsive. One day a massive ship comes to reclaim EVE, but WALL-E, out of love or loneliness, hitches a ride on the outside of the ship to rescue EVE. The ship arrives back at a large space cruise ship, which is carrying all of the humans who evacuated Earth 700 years earlier. The people of Earth ride around this space resort on hovering chairs which give them a constant feed of TV and video chatting. They drink all of their meals through a straw out of laziness and/or bone loss, and are all so fat that they can barely move. When the auto-pilot computer, acting on hastily-given instructions sent many centuries before, tries to prevent the people of Earth from returning by stealing the plant, WALL-E, EVE, the portly captain, and a band of broken robots stage a mutiny..</p>
      </div>
    </div>
  );
}

export default Animation;