export interface ImageCarouselProps {
  /** Array of image URLs to display in the carousel */
  images: string[];
  /** Enable automatic sliding between images */
  autoPlay?: boolean;
  /** Time between slides in milliseconds (when autoPlay is true) */
  interval?: number;
  /** Show navigation arrows on the sides */
  showArrows?: boolean;
  /** Show navigation dots at the bottom */
  showDots?: boolean;
  /** Custom class name for the main carousel wrapper */
  className?: string;
  /** Duration of slide transition in milliseconds */
  transitionDuration?: number;
  /** Minimum distance in pixels to trigger a swipe on touch devices */
  swipeThreshold?: number;
  /** Style variant for navigation arrows */
  arrowStyle?: 'default' | 'minimal' | 'rounded' | 'modern' | 'floating' | 'outline' | 'gradient';
  /** Style variant for navigation dots */
  dotStyle?: 'default' | 'minimal' | 'square' | 'line' | 'pill' | 'circle' | 'pulse' | 'bar';
  /** Control how the carousel transitions between slides */
  transitionStyle?: 'smooth' | 'instant' | 'slide' | 'jump' | 'infinite' | 'fade' | 'zoom' | 'flip';
  /** Custom class name for the carousel container */
  containerClassName?: string;
  /** Custom class name for individual slides */
  slideClassName?: string;
  /** Custom class name for navigation arrows */
  arrowClassName?: string;
  /** Custom class name for navigation dots */
  dotClassName?: string;
  /** Callback function triggered when the current slide changes */
  onSlideChange?: (index: number) => void;
  /** Pause auto-play when hovering over the carousel */
  pauseOnHover?: boolean;
  /** Enable infinite loop through slides */
  infinite?: boolean;
  /** Control how the carousel transitions when looping */
  infiniteTransition?: 'smooth' | 'instant' | 'slide' | 'jump' | 'infinite';
  /** Show loading placeholder while images are loading */
  showLoadingPlaceholder?: boolean;
  /** Custom loading placeholder component */
  loadingPlaceholder?: React.ReactNode;
  /** Background color for the loading placeholder */
  placeholderColor?: string;
  /** Callback function triggered when all images are loaded */
  onImagesLoaded?: () => void;
}

export interface NavigationProps {
  currentIndex: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
  showArrows: boolean;
  showDots: boolean;
  arrowStyle: string;
  dotStyle: string;
  arrowClassName?: string;
  dotClassName?: string;
  infinite: boolean;
  infiniteTransition: string;
}

export interface SlideProps {
  image: string;
  index: number;
  isActive: boolean;
  className?: string;
  loadedImages: Set<string>;
  getRealIndex: (index: number) => number;
} 