export default function CarouselItem({ slide, stopSlide, startSlide, index }) {
  return (
    <div
      className='carousel-item'
      onMouseEnter={stopSlide}
      onMouseOut={startSlide}
    >
      <img src={slide} alt={index} />
    </div>
  );
}
