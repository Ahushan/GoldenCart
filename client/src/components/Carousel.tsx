import React from "react";
import Slider from "react-slick";
import { AutoBannerItem } from "../data/types";
import LayoutContainer from "./LayoutContainer";
import NextArrowButton from "./common/Buttons/NextArrowButton";
import PrevArrowButton from "./common/Buttons/PrevArrowButton";

type CarouselProps = {
  autoBanner: AutoBannerItem[];
};

const Carousel: React.FC<CarouselProps> = ({ autoBanner }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrowButton />,
    prevArrow: <PrevArrowButton />,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <LayoutContainer>
      <div className="relative w-full h-[400px] z-30 my-3">
        <Slider {...settings}>
          {autoBanner.map((img, index) => (
            <div key={index} className="h-[400px]">
              <img
                src={img.path}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </LayoutContainer>
  );
};

export default Carousel;
