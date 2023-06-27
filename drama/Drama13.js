import React from 'react';
import { Link } from 'react-router-dom';


function Drama13() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">In Bruges(2008)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/bruges.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/drama/1" className="button">Like</Link>
            <Link to="/drama/1" className="button">Dislike</Link>
            <Link to="/recommend/14" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">London based hit men Ray and Ken are told by their boss Harry Waters to lie low in Bruges, Belgium for up to two weeks following their latest hit, which resulted in the death of an innocent bystander. Harry will be in touch with further instructions. While they wait for Harry's call, Ken, following Harry's advice, takes in the sights of the medieval city with great appreciation. But the charms of Bruges are lost on the simpler Ray, who is already despondent over the innocent death, especially as it was his first job. Things change for Ray when he meets Chloe, part of a film crew shooting a movie starring an American dwarf named Jimmy. When Harry's instructions arrive, Ken, for whom the job is directed, isn't sure if he can carry out the new job, especially as he has gained a new appreciation of life from his stay in the fairytale Bruges. While Ken waits for the inevitable arrival into Bruges of an angry Harry, who feels he must clean up matters on his own, Ray is dealing with his own problems, not only with Harry, but with a Canadian couple and a half-blind thief named Eirik. Ray hopes he can count on both Chloe and Ken to help him carve out a new life for himself. In the end, Harry, involved in an incident with Jimmy, may have to keep to his own principles.</p>
        </div>
      </div>
    );
  }

export default Drama13