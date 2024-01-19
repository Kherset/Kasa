import './styles.css';
import React, { useState } from 'react';

const Carousel = ({ images }) => {
// To manage the current slide index in the carousel
const [currentSlide, setCurrentSlide] = useState(0);

// Function to navigate to the previous slide in the carousel
const prevSlide = () => {
  // Update the current slide index using the previous index, ensuring it wraps around
  setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length); // % use to stay within the valid range of indices for the images array
};

// Function to navigate to the next slide in the carousel
const nextSlide = () => {
  // Update the current slide index using the previous index, ensuring it wraps around
  setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
};

  return (
    <div className="carousel" style={{ background: `url(${images[currentSlide]}) center / cover` }}>
      <i className="fa-solid fa-chevron-left chevron-carousel-left" onClick={prevSlide}></i>
      <i className="fa-solid fa-chevron-right chevron-carousel-right" onClick={nextSlide}></i>
      <span className='slider-progress'>{currentSlide + 1}/{images.length}</span>
    </div>
  );
};

export default Carousel;
