import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { Product } from "@/data/types";

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
    <Card className="flex-shrink-0 flex flex-col gap-2 w-[240px] bg-slate-100 hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden">
      <CardHeader className="p-0 relative h-[240px] overflow-hidden">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 p-2 rounded-md text-center bg-indigo-900 text-white font-bold text-[10px]">
          {discount}%
        </div>
      </CardHeader>

      <CardContent className="px-4 pt-2 pb-0 flex-grow">
        <p className="text-xs text-gray-600">{title}</p>
        <p className="text-sm text-gray-800">{description}</p>
        <div className="text-sm text-yellow-500">
          {"★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))}
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-sm line-through text-gray-500">${price}</span>
          <span className="text-indigo-600 font-semibold">
            ${discountPrice}
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
  );
};

export default Cards;
