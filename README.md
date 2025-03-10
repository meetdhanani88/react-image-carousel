# React Image Carousel

A modern, feature-rich image carousel component for React applications with TypeScript support.

## Features 🌟

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

## Installation 📦

```bash
npm install react-image-carousel
# or
yarn add react-image-carousel
```

## Quick Start 🚀

```jsx
import { ImageCarousel } from 'react-image-carousel';

function App() {
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
    />
  );
}
```

## Props Documentation 📝

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

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.
## License 📄

MIT License - feel free to use this component in your projects! 

