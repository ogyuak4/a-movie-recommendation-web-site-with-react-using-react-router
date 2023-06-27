import React from 'react';
import { Link } from "react-router-dom"


function Home() {
  return (
    <div className='homee'>
      <h1 className='home-h1' >Movie Recommendation</h1>
      <Link to="genres" className='home-link'>Select your genre</Link>
    </div>
  );
}

export default Home;