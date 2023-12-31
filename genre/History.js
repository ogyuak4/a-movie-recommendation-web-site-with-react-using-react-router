import React from 'react';
import { Link } from 'react-router-dom';

function History() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Kingdom of Heaven(2005)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/kingdom.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/history/2" className="button">Like</Link>
          <Link to="/history/1" className="button">Dislike</Link>
          <Link to="/recommend/76" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">It is the time of the Crusades during the Middle Ages -- the world-shaping 200-year collision between Europe and the East. A blacksmith named Balian has lost his family and nearly his faith. The religious wars raging in the far-off Holy Land seem remote to him, yet he is pulled into that immense drama. Amid the pageantry and intrigues of medieval Jerusalem, he falls in love, grows into a leader, and ultimately uses all his courage and skill to defend the city against staggering odds. Destiny comes seeking Balian in the form of a great knight, Godfrey of Ibelin, a Crusader briefly home to France from fighting in the East. Revealing himself as Balian's father, Godfrey shows him the true meaning of knighthood and takes him on a journey across continents to the fabled Holy City. In Jerusalem at that moment--between the Second and Third Crusades--a fragile peace prevails, through the efforts of its enlightened Christian king, Baldwin IV, aided by his advisor Tiberias, and the military restraint of the legendary Muslim leader Saladin Ayubi. But Baldwin's days are numbered, and strains of fanaticism, greed, and jealousy among the Crusaders threaten to shatter the truce. King Baldwin's vision of peace--a kingdom of heaven--is shared by a handful of knights, including Godfrey of Ibelin, who swear to uphold it with their lives and honor. As Godfrey passes his sword to his son, he also passes on that sacred oath: to protect the helpless, safeguard the peace, and work toward harmony between religions and cultures, so that a kingdom of heaven can flourish on earth. Balian takes the sword and steps into history.</p>
      </div>
    </div>
  );
}

export default History;