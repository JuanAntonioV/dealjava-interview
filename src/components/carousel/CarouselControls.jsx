import React from 'react';

export default function CarouselControls({ prev, next }) {
  return (
    <div>
      <button className='carousel-control left' onClick={prev}>
        Prev
      </button>
      <button className='carousel-control right' onClick={next}>
        Next
      </button>
    </div>
  );
}
