import React from 'react';
import { Link } from 'react-router-dom';

function Sport2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Warrior(2011)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/warrior.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/sport/1" className="button">Like</Link>
          <Link to="/sport/1" className="button">Dislike</Link>
          <Link to="/recommend/99" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">Two brothers face the fight of a lifetime - and the wreckage of their broken family - within the brutal, high-stakes world of Mixed Martial Arts (MMA) fighting in Lionsgate's action/drama, WARRIOR. A former Marine, haunted by a tragic past, Tommy Riordan returns to his hometown of Pittsburgh and enlists his father, a recovered alcoholic and his former coach, to train him for an MMA tournament awarding the biggest purse in the history of the sport. As Tommy blazes a violent path towards the title prize, his brother, Brendan, a former MMA fighter unable to make ends meet as a public school teacher, returns to the amateur ring to provide for his family. Even though years have passed, recriminations and past betrayals keep Brendan bitterly estranged from both Tommy and his father. But when Brendan's unlikely rise as an underdog sets him on a collision course with Tommy, the two brothers must finally confront the forces that tore them apart, all the while waging the most intense, winner-takes-all battle of their lives</p>
      </div>
    </div>
  );
}

export default Sport2;