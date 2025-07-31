import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductBannerItem } from "../data/types";

interface ProductBanner {
  productBanner: ProductBannerItem[];
}

const BannerSlider = ({ productBanner }: ProductBanner) => {
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
    afterChange: (current: number) => setActiveIndex(current),
  };

  return (
    <Slider
      {...settings}
      className="w-full xl:w-[98%] mx-auto my-4 overflow-hidden rounded-lg"
    >
      {productBanner.map((banner, index) => {
        const isActive = index === activeIndex;

        return (
          <>
            <div
              key={index}
              className="relative flex flex-col md:flex-col lg:flex-col xl:flex-row items-center 
            justify-between rounded-2xl min-h-[450px] sm:min-h-[500px] lg:min-h-[520px] w-full p-4 md:p-6 group"
            >
              {/* Background Image */}
              <img
                src={banner.image}
                alt={`${banner.name} background`}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-10" />

              {/* Product Image */}
                <motion.img
                  src={banner.productImg}
                  alt={banner.name}
                  className="relative z-20 h-52 sm:h-72 md:h-80 object-contain mb-4 md:mb-0 xl:ml-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 1.2 }}
                />

              {/* Content Box */}
                <motion.div
                  className="relative z-30 bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg w-full
              md:w-2/4 lg:w-2/5 b2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 1.2 }}
                >
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                    {banner.name}
                  </h2>
                  <p className="text-white mt-2 text-sm sm:text-base">
                    {banner.details}
                  </p>
                  <p className="text-white text-xs sm:text-sm mt-1">
                    {banner.description}
                  </p>
                  <button className="mt-4 px-5 py-2 bg-indigo-800 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all text-sm sm:text-base">
                    Shop Now
                  </button>
                </motion.div>
            </div>
          </>
        );
      })}
    </Slider>
  );
};

export default BannerSlider;
