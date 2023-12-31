import React from 'react';
import { Link } from 'react-router-dom';

function Animation2() {
    return (
      <div className="drama-container">
        <h1 className="drama-h1">Sen to Chihiro no kamikakushi(2001)</h1>
        <div className="drama-content">
          <img className="drama-image" src="../images/spirited.png" alt="Movie Poster" />
          <div className="button-container">
            <Link to="/animation/6" className="button">Like</Link>
            <Link to="/animation/5" className="button">Dislike</Link>
            <Link to="/recommend/40" className="button">Haven't Watched</Link>
          </div>
          <p className="drama-description">Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town. When her parents see a restaurant with great-smelling food but no staff, they decide to eat and pay later. However, Chihiro refuses to eat and decides to explore the theme park a bit more. She meets a boy named Haku who tells her that Chihiro and her parents are in danger, and they must leave immediately. She runs to the restaurant and finds that her parents have turned into pigs. In addition, the theme park turns out to be a town inhabited by demons, spirits, and evil gods. At the center of the town is a bathhouse where these creatures go to relax. The owner of the bathhouse is the evil witch Yubaba, who is intent on keeping all trespassers as captive workers, including Chihiro. Chihiro must rely on Haku to save her parents in hopes of returning to their world.</p>
        </div>
      </div>
    );
  }
  
  export default Animation2;