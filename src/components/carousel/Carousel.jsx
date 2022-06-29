import './Carousel.css';
import ItemCarousel from './ItemCarousel';
import CarouselControls from './CarouselControls';
import CarouselIndicators from './CarouselIndicators';
import { useState, useEffect, useRef } from 'react';

export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideInterval = useRef();

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 3000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);

  const prev = () => {
    startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    startSlideTimer();
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const switchIndex = (index) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  return (
    <div className='carousel'>
      <div
        className='carousel-inner'
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <ItemCarousel
            slide={slide}
            index={index}
            key={index}
            stopSlide={stopSlideTimer}
            startSlide={startSlideTimer}
          />
        ))}
      </div>

      <CarouselIndicators
        slides={slides}
        currentIndex={currentSlide}
        switchIndex={switchIndex}
      />
      {/* <CarouselControls prev={prev} next={next} /> */}
    </div>
  );
}
