import React from 'react';

function Home() {
  return (
    <div className="front-page">
      <img className="main-pic" src={ require('./img/ab-art.jpg') } alt={'ab'} />
      <div className="main-text">
        <h2>A Tribute to</h2>
        <h1>Anthony Bourdain</h1>
        <h2>1956-2018</h2>
        <p>"If I'm an advocate for anything, it's to move. As far as you can. Across the ocean, or simply across the river. Walk in someone else's shoes or at least eat their food. It's a plus for everybody."</p>
        <p>--A. B.</p>
      </div>
    </div>

  );
}

export default Home;
