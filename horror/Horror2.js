import React from 'react';
import { Link } from 'react-router-dom';

function Horror2() {
  return (
    <div className="drama-container">
      <h1 className="drama-h1">Oculus(2013)</h1>
      <div className="drama-content">
        <img className="drama-image" src="../images/oculus.png" alt="Movie Poster" />
        <div className="button-container">
          <Link to="/horror/6" className="button">Like</Link>
          <Link to="/horror/5" className="button">Dislike</Link>
          <Link to="/recommend/81" className="button">Haven't Watched</Link>
        </div>
        <p className="drama-description">The 21-year-old Timothy "Tim" Allen Russell is discharged from a mental institution by his psychiatrist, Dr. Shawn Graham, completely healed from a childhood trauma where his father purportedly tortured and killed his mother before being killed himself by Tim. His sister Kaylie welcomes him in the parking area and brings him home. Then she tells that they need to destroy an ancient mirror that she has found through working at an auction house. She then steals the mirror and the reluctant Tim follows his sister and has fragmented recollections from their childhood, going back to when his father Alan buys a mirror for the home office of their new family home. Kaylie and Tim see a woman with their father in his office and the behaviors of Alan and Marie change, ending in a family tragedy. Kaylie blames the mirror and now she wants to destroy it with Tim. Will they succeed?</p>
      </div>
    </div>
  );
}

export default Horror2;