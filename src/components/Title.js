import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

const Title = () => {

  let line1 = useRef(null);
  let line2 = useRef(null);

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
    <h1 className="page-title">
      <div className="line-wrap">
        <div ref={el => line1 = el} className="line">
          Hi, i'm Ben,
        </div>
      </div>
      <div className="line-wrap">
        <div ref={el => line2 = el} className="line">
          a web developer.
        </div>
      </div>
    </h1>
  );
};

export default Title;