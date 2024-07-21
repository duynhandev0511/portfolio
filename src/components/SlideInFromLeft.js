// src/components/SlideInFromLeft.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../stylesheet/EffectSlide.css';

const SlideInFromLeft = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={`slide-in-from-left ${inView ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default SlideInFromLeft;
