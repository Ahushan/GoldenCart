import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { tabLabels } from "../data/componentData";
import { PopularProductsType, TabLabel } from "../data/types";
import ProductTabs from "./ui/productTabs";
import Cards from "./Card";

type PopularProductsProps = {
  popularProducts: PopularProductsType;
};

const PopularProducts: React.FC<PopularProductsProps> = ({ popularProducts }) => {
  const [value, setValue] = useState(tabLabels[0]);
  const currentTabLabel = value.toLowerCase() as TabLabel;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollContainerRef.current?.scrollBy({
      left: dir === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  if (!popularProducts || !popularProducts[currentTabLabel]) {
    return <p className="text-center text-gray-500 py-8">No products available.</p>;
  }

  return (
    <section className="bg-white py-5 mt-2">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="">
            <h5 className="font-semibold text-lg md:text-xl">Popular Products</h5>
            <h2 className="font-extrabold font-kanit text-xl md:text-2xl text-purple-600 capitalize">
              {currentTabLabel}
            </h2>
            <p className="text-sm text-gray-600">
              Don’t miss current offers until the end of March.
            </p>
          </div>
          <ProductTabs value={value} onChange={setValue} tabLabels={tabLabels} />
        </div>

        <div className="relative w-full py-8">
          {/* Navigation buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/70 shadow hover:bg-gray-100 hidden md:inline-block"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-blue-600" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/70 shadow hover:bg-gray-100 hidden md:inline-block"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-blue-600" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide pt-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {popularProducts[currentTabLabel].map((product, index) => (
              <Cards key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
