import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../stylesheet/EffectSlide.css';

const SlideInFromRight = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={`slide-in-from-right ${inView ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default SlideInFromRight;
