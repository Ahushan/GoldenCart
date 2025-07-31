import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "../data/types";
import { FaShoppingCart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

type CardsProps = {
  products: Product[];
  Arrow?: boolean;
};

const ScrollableCards = ({ products, Arrow = false }: CardsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -260, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 260, behavior: "smooth" });
  };

  return (
    <div className="relative w-full py-8">
      {/* Arrows */}
      {Arrow && (
        <>
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
            <button
              onClick={scrollLeft}
              className="bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-gray-100"
              aria-label="Scroll left"
            >
              <FaChevronLeft className="text-blue-600" />
            </button>
          </div>
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
            <button
              onClick={scrollRight}
              className="bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-gray-100"
              aria-label="Scroll right"
            >
              <FaChevronRight className="text-blue-600" />
            </button>
          </div>
        </>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto px-4 no-scrollbar containe"
      >
        {products.map((product, idx) => (
          <Card
            key={idx}
            className="flex-shrink-0 flex flex-col gap-2 w-[240px] bg-slate-100 hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden"
          >
            <CardHeader className="p-0 relative h-[240px] overflow-hidden">
              <img
                src={product.imageSrc || "/placeholder.svg"}
                alt={product.title}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-2 left-2 p-2 rounded-md text-center bg-indigo-900 text-white font-bold text-[10px]">
                {product.discount}%
              </div>
            </CardHeader>

            <CardContent className="px-4 pt-2 pb-0 flex-grow">
              <p className="text-xs text-gray-600">{product.title}</p>
              <p className="text-sm text-gray-800">{product.description}</p>
              <div className="text-sm text-yellow-500">
                {"★".repeat(Math.floor(product.rating)) +
                  "☆".repeat(5 - Math.floor(product.rating))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm line-through text-gray-500">
                  ${product.price}
                </span>
                <span className="text-indigo-600 font-semibold">
                  ${product.discountPrice}
                </span>
              </div>
            </CardContent>

            <CardFooter className="px-4 pb-4 mt-auto">
              <Button variant="secondary" className="w-full group/inner">
                <FaShoppingCart className="mr-2 group-hover/inner:-translate-x-1 transition-transform" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ScrollableCards;
