import './styles.css'
import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return ( <div className="carousel" style={{ background: `url(${images[currentSlide]}) center / cover` }}>
      <i className="fa-solid fa-chevron-left chevron-carousel-left" onClick={prevSlide}></i>
      <i className="fa-solid fa-chevron-right chevron-carousel-right" onClick={nextSlide}></i>
      <span className='slider-progress'>{currentSlide + 1 }/{images.length}</span>
    </div>
  )
}
export default Carousel;
