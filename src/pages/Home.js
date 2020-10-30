import React from 'react';
import Title from '../components/Title';
import Portret from '../components/Portret';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="page">
          <div className="inner">
            <Title />
            <div className="title-img">
              <Portret />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
