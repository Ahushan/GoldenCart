import { useState, useRef } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { tabLabels } from "../../data/componentData";
import { FaShoppingCart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PopularProductsType, Product, TabLabel } from "../../data/types";

// CARD COMPONENT
const Cards = ({
  imageSrc,
  discount,
  title,
  description,
  rating,
  price,
  discountPrice,
}: Product) => (
  <div className="flex-shrink-0 flex flex-col gap-2 min-w-[80%] sm:min-w-[260px] bg-slate-200 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
    <div className="relative overflow-hidden h-[240px] rounded-lg">
      <img
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute top-2 left-2 bg-blue-900 text-white text-[10px] font-bold p-2 rounded z-10">
        {discount}%
      </div>
    </div>

    <div className="flex-grow p-2">
      <p className="text-xs font-light">{title}</p>
      <p className="text-sm font-normal truncate">{description}</p>
      <div className="text-yellow-500 text-sm">
        {"★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm line-through text-gray-500">${price}</span>
        <span className="text-blue-600 font-semibold">${discountPrice}</span>
      </div>
    </div>

    <button
      aria-label="Add to cart"
      className="mt-2 flex items-center justify-center hover:bg-blue-600 hover:text-white font-semibold py-1 px-2 rounded bg-white text-blue-600 border border-blue-600 transition duration-200"
    >
      <FaShoppingCart className="mr-1" />
      Add to Cart
    </button>
  </div>
);

// MAIN COMPONENT
const PopularProducts = ({
  popularProducts,
}: {
  popularProducts: PopularProductsType;
}) => {
  const [value, setValue] = useState(0);
  const currentTabLabel = tabLabels[value].toLowerCase() as TabLabel;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const scroll = (direction: "left" | "right") => {
    const offset = direction === "left" ? -260 : 260;
    scrollContainerRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  if (!popularProducts?.[currentTabLabel]) {
    return <p className="p-4 text-center">No products available.</p>;
  }

  console.log(currentTabLabel);
  console.log(popularProducts[currentTabLabel]);
  
  

  return (
    <div className="bg-white mt-2 py-6">
      <div className="px-4 sm:px-8 lg:px-16 max-w-screen-xl mx-auto">
        {/* Header + Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h5 className="text-xl font-semibold">Popular Products</h5>
            <h5 className="text-2xl text-blue-600 font-extrabold tracking-wider my-2">
              {currentTabLabel.toUpperCase()}
            </h5>
            <p className="text-sm text-gray-600">
              Do not miss the current offers until the end of March.
            </p>
          </div>

          <Box sx={{ maxWidth: { xs: "100%", sm: 480 }, bgcolor: "background.paper" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="Popular product tabs"
              className="ppname"
            >
              {tabLabels.map((label, idx) => (
                <Tab key={idx} label={label} />
              ))}
            </Tabs>
          </Box>
        </div>

        {/* Cards Carousel */}
        <div className="relative w-full py-8">
          {/* Navigation buttons - visible only on desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("left")}
              className="bg-white rounded-full p-4 bg-opacity-70 shadow-md hover:bg-gray-100"
              aria-label="Scroll left"
            >
              <FaChevronLeft className="text-blue-600" />
            </button>
          </div>

          <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("right")}
              className="bg-white rounded-full p-4 bg-opacity-70 shadow-md hover:bg-gray-100"
              aria-label="Scroll right"
            >
              <FaChevronRight className="text-blue-600" />
            </button>
          </div>

          {/* Scrollable card container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide pb-4"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {popularProducts[currentTabLabel].map((product, idx) => (
              <Cards key={idx} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
