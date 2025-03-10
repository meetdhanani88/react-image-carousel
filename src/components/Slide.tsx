import React from 'react';
import { SlideProps } from '../types';

const Slide = (props: SlideProps) => {
  const {
    image,
    index,
    isActive,
    className,
    loadedImages,
    getRealIndex,
  } = props;

  return (
    <div
      className={`carousel-slide ${className}`}
      role="group"
      aria-roledescription="slide"
      aria-label={`${getRealIndex(index) + 1}`}
      aria-hidden={!isActive}
    >
      <img 
        src={image} 
        alt={`Slide ${getRealIndex(index) + 1}`}
        style={{ opacity: loadedImages.has(image) ? 1 : 0 }}
      />
    </div>
  );
};

export default Slide; 