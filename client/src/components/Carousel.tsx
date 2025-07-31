import React from "react";
import Slider from "react-slick";
import { AutoBannerItem } from "../data/types";
import LayoutContainer from "./LayoutContainer";
import { Link } from "react-router-dom";

type CarouselProps = {
  autoBanner: AutoBannerItem[];
};

const Carousel: React.FC<CarouselProps> = ({ autoBanner }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <LayoutContainer>
      <section className="relative w-full h-[200px] sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[560px] 2xl:h-[480px] my-3 
      rounded-lg overflow-hidden z-30">
        <Slider {...settings}>
          {autoBanner.map((img, index) => (
            <Link to={`/${img.name}`} key={index} className="w-full h-full xl:scale-90">
              <img
                src={img.path}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </Link>
          ))}
        </Slider>
      </section>
    </LayoutContainer>
  );
};

export default Carousel;
