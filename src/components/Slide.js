import React, { useEffect, useRef } from 'react';

import { gsap } from "gsap";

const Slide = () => {

  let img1 = useRef(null);
  let img2 = useRef(null);
  let img3 = useRef(null);

  useEffect(() => {
    gsap.from([line1, line2], 0.8, {
    delay: 0.8,
    ease: "power3.out",
    y: 64,
    stagger: {
      amount: 0.15
    }
    });
  }, [line1, line2]);

  return (
    <div className="slides">
      <div className="img-slider">
        <div ref={el => img1 = el} className="img">

        </div>
      </div>
      <div className="img-slider">
        <div ref={el => img2 = el} className="img">

        </div>
        <div className="img-slider">
        <div ref={el => img3 = el} className="img">

        </div>
      </div>
    </div>
  );
};

export default Slide;
