import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = ({ banners }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    afterChange: (current) => setActiveIndex(current),
  };

  return (
    <Slider
      {...settings}
      className="w-[98%] m-auto my-4 overflow-hidden rounded-md"
    >
      {banners.map((banner, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            className="relative flex items-center justify-center rounded-2xl h-[250px] md:h-[400px]
            w-full p-6 group overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={banner.image}
              alt={`${banner.name} background`}
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-1" />

            <motion.img
              src={banner.productImg}
              alt={banner.name}
              className="absolute md:left-8
               left-0 top-1/2 transform -translate-y-1/2 h-[200px] md:h-[380px] z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />

            <motion.div
              className="relative bg-white/30 p-2 sm:p-5 md:p-6 rounded-lg h-fit shadow-lg z-30
             w-[50%] sm:w-[70%] md:w-2/3 lg:w-1/2 xl:w-2/5 ml-auto lg:mt-6 md:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h2 className="text-lg sm:text-2xl font-bold text-white">
                {banner.name}
              </h2>
              <p className="text-white  hidden md:block mt-2 text-sm sm:text-base">
                {banner.details}
              </p>
              <p className="text-white text-xs sm:text-sm mt-1 line-clamp-2 
               max-w-[95%] overflow-y-scroll h-[90px] ppname
              ">
                {banner.description}
              </p>
              <button className="mt-4 px-4 sm:px-6 py-2 bg-indigo-800
               text-white rounded-lg shadow-md hover:bg-purple-700 transition-all text-sm sm:text-base">
                Shop Now
              </button>
            </motion.div>
          </div>
        );
      })}
    </Slider>
  );
};

export default BannerSlider;
