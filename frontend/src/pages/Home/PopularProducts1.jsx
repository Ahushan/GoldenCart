// For Demo . . . . . . . . . 
import * as React from "react";
import { useState, useRef } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { FaShoppingCart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PopularProductsData from "../../data-files/PopularProductsData";

const Cards = ({
  imageSrc,
  discount,
  title,
  description,
  rating,
  prize,
  discountPrize,
}) => {
  return (
    <div className="flex-shrink-0 flex flex-col gap-2 w-[240px] bg-slate-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="wrapper overflow-hidden h-[240px] rounded-lg relative">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="object-cover z-0 w-full h-full hover:scale-110 transition-all duration-300"
        />
        <div className="absolute top-2 left-2 p-2 rounded-[8px] text-center bg-indigo-900 text-white z-1 font-bold w-9.5 overflow-hidden text-[10px]">
          {discount}%
        </div>
      </div>
      <div className="p-4 ">
      <div className="contents p-2 flex-grow">
        <p className="font-light text-xs">{title}</p>
        <p className="font-normal text-sm">{description}</p>
        <div className="text-sm text-yellow-500">
          {"★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))}
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-sm line-through">${prize}</div>
          <div className="text-indigo-600 font-semibold">${discountPrize}</div>
        </div>
      </div>
      </div>
      <button className="mt-2 m-4 flex items-center  group/subgroup hover:bg-indigo-600 justify-center hover:text-white font-semibold py-1 px-2 rounded bg-white text-indigo-600 border border-indigo-600 transition duration-200">
        <FaShoppingCart className="mr-1 group-hover/subgroup:-translate-x-3 transition ease-in-out" />
        Add to Cart
      </button>
    </div>
  );
};

// MAIN COMPONENT
const PopularProducts1 = () => {
  const [value, setValue] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabLabels = [
    "Fashion",
    "Electronics",
    "Bags",
    "Groceries",
    "Beauty",
    "Wellness",
    "Jewellery",
  ];

  const currentTabLabel = tabLabels[value];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white py-5 mt-2">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          
          <div>
            <h5 className="font-semibold text-xl">Popular Products</h5>
            <h5 className="font-kanit text-2xl font-bold text-indigo-600 my-2">
              {currentTabLabel}
            </h5>
            <p className="text-sm">
              Do not miss the current offers until the end of March.
            </p>
          </div>

          {/* RIGHT */}
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: 500 },
              bgcolor: "background.paper",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
              className="text-xs sm:text-sm"
            >
              {tabLabels.map((label, index) => (
                <Tab key={index} label={label} />
              ))}
            </Tabs>
          </Box>
        </div>

        {/* Cards with Navigation */}
        <div className="relative w-full py-8 group">
          {/* Scroll Left */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 hidden md:block group-hover:block">
            <button
              onClick={scrollLeft}
              className="bg-white rounded-full bg-opacity-80 p-2 shadow hover:bg-gray-100 focus:outline-none"
              aria-label="Scroll left"
            >
              <FaChevronLeft className="text-indigo-600" />
            </button>
          </div>

          {/* Scroll Right */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10 hidden md:block group-hover:block">
            <button
              onClick={scrollRight}
              className="bg-white rounded-full p-2 shadow bg-opacity-80 hover:bg-gray-100 focus:outline-none"
              aria-label="Scroll right"
            >
              <FaChevronRight className="text-indigo-600" />
            </button>
          </div>

          {/* Cards Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 pb-4 scroll-smooth scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {PopularProductsData[currentTabLabel]?.map((product, index) => (
              <Cards
                key={index}
                imageSrc={product.imageSrc}
                discount={product.discount}
                title={product.title}
                description={product.description}
                rating={product.rating}
                prize={product.prize}
                discountPrize={product.discountPrize}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts1;
