import React, { useState, useEffect, useRef, TouchEvent, useCallback, useMemo } from 'react';
import './ImageCarousel.css';
import { ImageCarouselProps } from './types';
import Navigation from './components/Navigation';
import Slide from './components/Slide';
import LoadingPlaceholder from './components/LoadingPlaceholder';

const ImageCarousel = (props: ImageCarouselProps) => {
  const {
    images,
    autoPlay = true,
    interval = 3000,
    showArrows = true,
    showDots = true,
    className = '',
    transitionDuration = 500,
    swipeThreshold = 50,
    arrowStyle = 'default',
    dotStyle = 'default',
    transitionStyle = 'smooth',
    containerClassName = '',
    slideClassName = '',
    arrowClassName = '',
    dotClassName = '',
    onSlideChange,
    pauseOnHover = false,
    infinite = true,
    infiniteTransition = 'smooth',
    showLoadingPlaceholder = true,
    loadingPlaceholder,
    placeholderColor = '#f0f0f0',
    onImagesLoaded,
  } = props;

  const [currentIndex, setCurrentIndex] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const carouselRef = useRef<HTMLDivElement>(null);

  const slides = useMemo(() => {
    if (infiniteTransition === 'infinite') {
      return [images[images.length - 1], ...images, images[0]];
    }
    return images;
  }, [images, infiniteTransition]);

  useEffect(() => {
    const loadImages = async () => {
      const loadPromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set(Array.from(prev).concat(src)));
            resolve(src);
          };
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.all(loadPromises);
        setIsLoading(false);
        onImagesLoaded?.();
      } catch (error) {
        console.error('Error loading images:', error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, [images, onImagesLoaded]);

  const getRealIndex = useCallback((index: number) => {
    if (infiniteTransition === 'infinite') {
      if (index === 0) return images.length - 1;
      if (index === images.length + 1) return 0;
      return index - 1;
    }
    return index;
  }, [images.length, infiniteTransition]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    onSlideChange?.(index % images.length);

    setTimeout(() => {
      setIsTransitioning(false);
      
      if (infiniteTransition === 'infinite') {
        if (index === 0) {
          setCurrentIndex(images.length);
        } else if (index === images.length + 1) {
          setCurrentIndex(1);
        }
      }
    }, transitionDuration);
  }, [onSlideChange, transitionDuration, isTransitioning, images.length, infiniteTransition]);

  const goToPrevious = useCallback(() => {
    if (!infinite && currentIndex === 0) return;
    
    if (infinite && currentIndex === 0) {
      if (infiniteTransition === 'instant') {
        goToSlide(images.length - 1);
      } else if (infiniteTransition === 'slide') {
        const container = carouselRef.current?.querySelector('.carousel-container') as HTMLElement;
        if (container) {
          container.style.transition = 'none';
          container.style.transform = `translateX(-${(images.length + 1) * 100}%)`;
          requestAnimationFrame(() => {
            container.style.transition = `transform ${transitionDuration}ms ease-in-out`;
            goToSlide(images.length - 1);
          });
        }
      } else if (infiniteTransition === 'jump') {
        const container = carouselRef.current?.querySelector('.carousel-container') as HTMLElement;
        if (container) {
          container.style.transition = `opacity ${transitionDuration}ms ease-in-out`;
          container.style.opacity = '0';
          setTimeout(() => {
            goToSlide(images.length - 1);
            container.style.opacity = '1';
          }, transitionDuration / 2);
        }
      } else if (infiniteTransition === 'infinite') {
        goToSlide(currentIndex - 1);
      } else {
        goToSlide(images.length - 1);
      }
    } else {
      goToSlide(currentIndex - 1);
    }
  }, [currentIndex, images.length, infinite, goToSlide, infiniteTransition, transitionDuration]);

  const goToNext = useCallback(() => {
    if (!infinite && currentIndex === images.length - 1) return;
    
    if (infinite && currentIndex === images.length - 1) {
      if (infiniteTransition === 'instant') {
        goToSlide(0);
      } else if (infiniteTransition === 'slide') {
        const container = carouselRef.current?.querySelector('.carousel-container') as HTMLElement;
        if (container) {
          container.style.transition = 'none';
          container.style.transform = `translateX(0)`;
          requestAnimationFrame(() => {
            container.style.transition = `transform ${transitionDuration}ms ease-in-out`;
            goToSlide(0);
          });
        }
      } else if (infiniteTransition === 'jump') {
        const container = carouselRef.current?.querySelector('.carousel-container') as HTMLElement;
        if (container) {
          container.style.transition = `opacity ${transitionDuration}ms ease-in-out`;
          container.style.opacity = '0';
          setTimeout(() => {
            goToSlide(0);
            container.style.opacity = '1';
          }, transitionDuration / 2);
        }
      } else if (infiniteTransition === 'infinite') {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(0);
      }
    } else {
      goToSlide(currentIndex + 1);
    }
  }, [currentIndex, images.length, infinite, goToSlide, infiniteTransition, transitionDuration]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (autoPlay && !isPaused) {
      timer = setInterval(goToNext, interval);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoPlay, interval, goToNext, isPaused]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > swipeThreshold;
    const isRightSwipe = distance < -swipeThreshold;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  }, [touchStart, touchEnd, goToNext, goToPrevious, swipeThreshold]);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  }, [pauseOnHover]);

  const getTransitionStyle = useCallback(() => {
    switch (transitionStyle) {
      case 'fade':
      case 'zoom':
      case 'flip':
        return {
          transform: 'none',
          transition: isTransitioning ? `all ${transitionDuration}ms ease-in-out` : 'none',
          opacity: isLoading ? 0 : 1,
        };
      default:
        return {
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? `transform ${transitionDuration}ms ease-in-out` : 'none',
          opacity: isLoading ? 0 : 1,
        };
    }
  }, [currentIndex, transitionStyle, isTransitioning, transitionDuration, isLoading]);

  const getSlideClassName = useCallback((index: number) => {
    const baseClass = `carousel-slide ${slideClassName}`;
    if (transitionStyle === 'fade' || transitionStyle === 'zoom' || transitionStyle === 'flip') {
      return `${baseClass} ${index === currentIndex ? 'active' : ''}`;
    }
    return baseClass;
  }, [slideClassName, transitionStyle, currentIndex]);

  return (
    <div
      ref={carouselRef}
      className={`image-carousel ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
    >
      {isLoading && showLoadingPlaceholder && (
        <LoadingPlaceholder
          placeholderColor={placeholderColor}
          loadingPlaceholder={loadingPlaceholder}
        />
      )}
      <div
        className={`carousel-container ${containerClassName} transition-${transitionStyle}`}
        style={getTransitionStyle()}
        role="presentation"
      >
        {slides.map((image, index) => (
          <Slide
            key={index}
            image={image}
            index={index}
            isActive={index === currentIndex}
            className={getSlideClassName(index)}
            loadedImages={loadedImages}
            getRealIndex={getRealIndex}
          />
        ))}
      </div>

      <Navigation
        currentIndex={getRealIndex(currentIndex)}
        totalSlides={images.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onDotClick={goToSlide}
        showArrows={showArrows}
        showDots={showDots}
        arrowStyle={arrowStyle}
        dotStyle={dotStyle}
        arrowClassName={arrowClassName}
        dotClassName={dotClassName}
        infinite={infinite}
        infiniteTransition={infiniteTransition}
      />
    </div>
  );
};

export { ImageCarousel }; 