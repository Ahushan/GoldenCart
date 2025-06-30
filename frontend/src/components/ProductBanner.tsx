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
      className="w-[98%] m-auto my-4 overflow-hidden rounded-md"
    >
      {productBanner.map((banner, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            className="relative flex items-center justify-center rounded-2xl h-96 w-full p-6 group"
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
              className="absolute left-8 top-1/2 transform -translate-y-1/2 h-72 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />

            <motion.div
              className="relative ml-auto bg-white/30 p-6 rounded-lg shadow-lg w-2/5 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold text-white">{banner.name}</h2>
              <p className="text-white mt-2">{banner.details}</p>
              <p className="text-white text-sm mt-1">{banner.description}</p>
              <button className="mt-4 px-6 py-2 bg-indigo-800 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all">
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
