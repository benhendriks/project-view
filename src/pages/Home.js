import React from 'react';

import Title from '../components/Title'
import Slide from '../components/Slide'

function Home() {
  return (
    <div className="container">
      <div className="page">
        <div className="inner">
          <Title />
        </div>
      </div>
          <Slide />
    </div>
  );
}

export default Home;
