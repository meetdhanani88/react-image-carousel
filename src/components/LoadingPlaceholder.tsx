import React from 'react';

interface LoadingPlaceholderProps {
  placeholderColor: string;
  loadingPlaceholder?: React.ReactNode;
}

const LoadingPlaceholder = (props: LoadingPlaceholderProps) => {
  const {
    placeholderColor,
    loadingPlaceholder,
  } = props;

  return (
    <div 
      className="carousel-loading-placeholder"
      style={{ backgroundColor: placeholderColor }}
    >
      {loadingPlaceholder || (
        <div className="carousel-loading-spinner">
          <div className="spinner"></div>
          <span>Loading images...</span>
        </div>
      )}
    </div>
  );
};

export default LoadingPlaceholder; 