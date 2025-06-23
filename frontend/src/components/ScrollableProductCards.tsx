import { useRef } from "react";
import { FaShoppingCart, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
            {"★".repeat(Math.floor(rating)) +
              "☆".repeat(5 - Math.floor(rating))}
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-sm line-through">${prize}</div>
            <div className="text-indigo-600 font-semibold">
              ${discountPrize}
            </div>
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

const ScrollableProductCards = ({ products }) => {
  const scrollContainerRef = useRef(null);

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

  return (
    <div className="relative px-4 py-8  group">
      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 transition hidden group-hover:block">
        <button
          onClick={scrollLeft}
          className="bg-white rounded-full bg-opacity-50 p-4 shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Scroll left"
        >
          <FaChevronLeft className="text-indigo-600" />
        </button>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 transition hidden group-hover:block">
        <button
          onClick={scrollRight}
          className="bg-white rounded-full p-4 shadow-md bg-opacity-50 hover:bg-gray-100 focus:outline-none"
          aria-label="Scroll right"
        >
          <FaChevronRight className="text-indigo-600" />
        </button>
      </div>

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {Array.isArray(ProductsData) && ProductsData.length > 0 ? (
          ProductsData.map((product, index) => (
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
          ))
        ) : (
          <p>No products available.</p>
        )}{" "}
      </div>
    </div>
  );
};
export default ScrollableProductCards;
