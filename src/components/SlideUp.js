import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../stylesheet/EffectSlide.css';

const SlideUp = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`slide-up ${inView ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default SlideUp;