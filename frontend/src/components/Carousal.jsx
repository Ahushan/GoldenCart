import React, { useTransition } from 'react';
import Slider from 'react-slick';

const Carousel = ({ images }) => {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 200, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />, 
    prevArrow: <SamplePrevArrow />, 
    autoplay: true, 
    autoplaySpeed: 2000,
  };

  return (
    <div className="relative w-full h-fit z-30 my-3">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-[150px] md:h-[400px]">
            <img src={image.path} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom next arrow component
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent rounded-full p-2 shadow w-10 h-10 hover:bg-black"
    >
      <b className='text-white'>&#10095;</b>
    </button>
  );
};

// Custom previous arrow component
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent rounded-full p-2 shadow w-10 h-10 hover:bg-black"
    >
      <b className='text-white'>&#10094;</b>
    </button>
  );
};

export default Carousel;