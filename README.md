# React Image Carousel

A modern, feature-rich image carousel component for React applications with smooth transitions, touch support, and customizable navigation.



## ✨ Features

- 🖼️ **Multiple Transition Effects**
  - Smooth sliding
  - Fade transitions
  - Zoom effects
  - 3D flip animations
  - Instant transitions
  - Jump transitions
  - Seamless infinite loops

- 🎨 **Customizable Styles**
  - Modern arrow designs
  - Various dot indicators
  - Customizable colors and sizes
  - Responsive design

- 🎯 **Interactive Controls**
  - Touch/swipe support
  - Keyboard navigation
  - Custom navigation buttons
  - Progress indicators

- ⚡ **Performance Optimized**
  - Lazy image loading
  - Smooth animations
  - Efficient state management
  - Optimized re-renders

- ♿ **Accessibility**
  - ARIA labels
  - Keyboard navigation
  - Screen reader support
  - Focus management

## 🚀 Quick Start

```bash
npm install react-image-carousel
# or
yarn add react-image-carousel
```

```tsx
import { ImageCarousel } from 'react-image-carousel';

const App = () => {
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
  ];

  return (
    <ImageCarousel
      images={images}
      autoPlay={true}
      interval={3000}
      showArrows={true}
      showDots={true}
      transitionStyle="smooth"
    />
  );
};
```

## 📦 Requirements

- React 18 or higher
- TypeScript 4.5 or higher
- Modern browser with CSS Grid and CSS Transitions support

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🔄 React 19 Support

This component is fully compatible with React 19 and its new features:

- Uses the new JSX transform
- Compatible with React 19's automatic batching
- Supports React 19's concurrent features
- Optimized for React 19's performance improvements

### React 19 Specific Features

```tsx
// Example of using React 19's automatic batching
const App = () => {
  const [count, setCount] = useState(0);
  
  const handleSlideChange = (index: number) => {
    // These updates will be batched automatically in React 19
    setCount(prev => prev + 1);
    setCurrentSlide(index);
  };

  return (
    <ImageCarousel
      images={images}
      onSlideChange={handleSlideChange}
    />
  );
};
```

### Performance Optimizations

The component takes advantage of React 19's performance improvements:

- Uses `useCallback` for memoized functions
- Implements `useMemo` for expensive computations
- Leverages React 19's improved Suspense support
- Optimized for concurrent rendering

## 📖 Props

### Basic Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `string[]` | Required | Array of image URLs to display |
| `autoPlay` | `boolean` | `true` | Enable automatic sliding |
| `interval` | `number` | `3000` | Time between slides in milliseconds |
| `showArrows` | `boolean` | `true` | Show navigation arrows |
| `showDots` | `boolean` | `true` | Show navigation dots |

### Style Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `arrowStyle` | `'default' \| 'minimal' \| 'rounded' \| 'modern' \| 'floating' \| 'outline' \| 'gradient'` | `'default'` | Style variant for navigation arrows |
| `dotStyle` | `'default' \| 'minimal' \| 'square' \| 'line' \| 'pill' \| 'circle' \| 'pulse' \| 'bar'` | `'default'` | Style variant for navigation dots |
| `transitionStyle` | `'smooth' \| 'instant' \| 'slide' \| 'jump' \| 'infinite' \| 'fade' \| 'zoom' \| 'flip'` | `'smooth'` | Transition effect between slides |

### Customization Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Custom class for main wrapper |
| `containerClassName` | `string` | `''` | Custom class for container |
| `slideClassName` | `string` | `''` | Custom class for slides |
| `arrowClassName` | `string` | `''` | Custom class for arrows |
| `dotClassName` | `string` | `''` | Custom class for dots |
| `transitionDuration` | `number` | `500` | Duration of transitions in ms |
| `swipeThreshold` | `number` | `50` | Minimum swipe distance in pixels |

### Behavior Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `infinite` | `boolean` | `true` | Enable infinite loop |
| `pauseOnHover` | `boolean` | `false` | Pause autoplay on hover |
| `showLoadingPlaceholder` | `boolean` | `true` | Show loading state |
| `placeholderColor` | `string` | `'#f0f0f0'` | Loading placeholder color |

### Callback Props

| Prop | Type | Description |
|------|------|-------------|
| `onSlideChange` | `(index: number) => void` | Called when slide changes |
| `onImagesLoaded` | `() => void` | Called when all images load |

## Style Examples 🎨

### Arrow Styles

```jsx
// Modern style
<ImageCarousel
  images={images}
  arrowStyle="modern"
/>

// Floating style
<ImageCarousel
  images={images}
  arrowStyle="floating"
/>

// Gradient style
<ImageCarousel
  images={images}
  arrowStyle="gradient"
/>
```

### Dot Styles

```jsx
// Line style
<ImageCarousel
  images={images}
  dotStyle="line"
/>

// Pulse style
<ImageCarousel
  images={images}
  dotStyle="pulse"
/>

// Bar style
<ImageCarousel
  images={images}
  dotStyle="bar"
/>
```

### Transition Styles

```jsx
// Fade transition
<ImageCarousel
  images={images}
  transitionStyle="fade"
/>

// Zoom transition
<ImageCarousel
  images={images}
  transitionStyle="zoom"
/>

// Flip transition
<ImageCarousel
  images={images}
  transitionStyle="flip"
/>
```

## Advanced Usage Examples 🚀

### Custom Loading Placeholder

```jsx
<ImageCarousel
  images={images}
  loadingPlaceholder={
    <div className="custom-loader">
      <span>Loading...</span>
    </div>
  }
/>
```

### Custom Navigation

```jsx
<ImageCarousel
  images={images}
  showArrows={false}
  showDots={false}
  className="custom-carousel"
  containerClassName="custom-container"
/>
```

### Event Handling

```jsx
<ImageCarousel
  images={images}
  onSlideChange={(index) => {
    console.log(`Current slide: ${index}`);
  }}
  onImagesLoaded={() => {
    console.log('All images loaded!');
  }}
/>
```

## Responsive Design 📱

The carousel is fully responsive and adapts to different screen sizes. You can use the following classes to control the size:

```jsx
// Full width
<ImageCarousel
  images={images}
  className="full-width"
/>

// Full height
<ImageCarousel
  images={images}
  className="full-height"
/>
```

## License 📄

MIT License - feel free to use this component in your projects! 

