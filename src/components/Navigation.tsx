import React from 'react';
import { NavigationProps } from '../types';

const Navigation = (props: NavigationProps) => {
  const {
    currentIndex,
    totalSlides,
    onPrevious,
    onNext,
    onDotClick,
    showArrows,
    showDots,
    arrowStyle,
    dotStyle,
    arrowClassName,
    dotClassName,
    infinite,
    infiniteTransition,
  } = props;

  const isNavigationDisabled = (direction: 'prev' | 'next') => {
    if (infinite) return false;
    
    if (direction === 'prev') {
      return currentIndex === 0;
    } else {
      return currentIndex === totalSlides - 1;
    }
  };

  return (
    <>
      {showArrows && (
        <>
          <button
            className={`carousel-arrow prev arrow-${arrowStyle} ${arrowClassName}`}
            onClick={onPrevious}
            aria-label="Previous slide"
            disabled={isNavigationDisabled('prev')}
          >
            &#10094;
          </button>
          <button
            className={`carousel-arrow next arrow-${arrowStyle} ${arrowClassName}`}
            onClick={onNext}
            aria-label="Next slide"
            disabled={isNavigationDisabled('next')}
          >
            &#10095;
          </button>
        </>
      )}

      {showDots && (
        <div
          className={`carousel-dots dot-${dotStyle} ${dotClassName}`}
          role="tablist"
          aria-label="Slides"
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => onDotClick(infiniteTransition === 'infinite' ? index + 1 : index)}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Navigation; 