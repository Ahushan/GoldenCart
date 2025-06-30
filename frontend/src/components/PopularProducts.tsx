import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { tabLabels } from "../data/componentData"; // Ensure this path is correct
import { useRef } from "react";
import { FaShoppingCart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PopularProductsType, Product, TabLabel } from "../data/types";

type PopularProductsProps = {
  popularProducts: PopularProductsType;
};
// MARK: CARD COMPONENT
const Cards = ({
  imageSrc,
  discount,
  title,
  description,
  rating,
  price,
  discountPrice,
}: Product) => {
  return (
    <div className="flex-shrink-0 flex flex-col gap-2 w-[240px] bg-slate-200 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="wrapper overflow-hidden h-[240px] rounded-lg relative">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="object-cover z-0 w-full h-full hover:scale-110 transition-all duration-300"
        />
        <div className="absolute top-2 left-2 p-2 rounded-[8px] text-center bg-blue-900 text-white z-1 font-bold w-9.5 overflow-hidden text-[10px]">
          {discount}%
        </div>
      </div>
      <div className="contents p-2 flex-grow">
        <p className="font-light text-xs">{title}</p>
        <p className="font-normal text-sm">{description}</p>
        <div className="text-sm text-yellow-500">
          {"★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))}
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-sm line-through">${price}</div>
          <div className="text-blue-600 font-semibold">${discountPrice}</div>
        </div>
      </div>
      <button className="mt-2 flex items-center justify-center hover:bg-blue-600 hover:text-white font-semibold py-1 px-2 rounded bg-white text-blue-600 border border-blue-600 transition duration-200">
        <FaShoppingCart className="mr-1" />
        Add to Cart
      </button>
    </div>
  );
};

// MARK: MAIN COMPONENT
const PopularProducts: React.FC<PopularProductsProps> = ({
  popularProducts,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const currentTabLabel = tabLabels[value] as TabLabel;

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  if (!popularProducts || !popularProducts[currentTabLabel]) {
    return <p>No products available.</p>;
  }
  return (
    <div className="bg-white py-5 mt-2">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* LEFT SECTION */}
          <div className="left-section">
            <h5 className="font-semibold text-xl">Popular Products</h5>
            <h5 className="font-semibold text-2xl text-blue-600 m-4">
              {currentTabLabel}
            </h5>
            <p className="text-sm">
              Do not miss the current offers until the end of March.
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className="right-section">
            <Box
              sx={{
                maxWidth: { xs: 320, sm: 480 },
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
                className="ppname"
              >
                {tabLabels.map((label, index) => (
                  <Tab key={index} label={label} />
                ))}
              </Tabs>
            </Box>
          </div>
        </div>
        {/* Cards */}
        <div className="relative max-w-full px-4 py-8">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button
              onClick={scrollLeft}
              className="bg-white rounded-full bg-opacity-50 p-4 shadow-md hover:bg-gray-100 focus:outline-none"
              aria-label="Scroll left"
            >
              <FaChevronLeft className="text-blue-600" />
            </button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button
              onClick={scrollRight}
              className="bg-white rounded-full p-4 shadow-md bg-opacity-50 hover:bg-gray-100 focus:outline-none"
              aria-label="Scroll right"
            >
              <FaChevronRight className="text-blue-600" />
            </button>
          </div>

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {popularProducts[currentTabLabel].map((product, index) => (
              <Cards
                key={index}
                imageSrc={product.imageSrc}
                discount={product.discount}
                title={product.title}
                description={product.description}
                rating={product.rating}
                price={product.price}
                discountPrice={product.discountPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
