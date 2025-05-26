import { FaShoppingCart, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom";


const Cards = ({ imageSrc, discount, title, description, rating, prize, discountPrize }) => {
  return (
    <Link className="flex-shrink-0 flex flex-col gap-2 w-[240px] bg-slate-200 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
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
          <div className="text-sm line-through">${prize}</div>
          <div className="text-indigo-600 font-semibold">${discountPrize}</div>
        </div>
      </div>
      <button className="mt-2 flex items-center justify-center hover:bg-blue-600 hover:text-white font-semibold py-1 px-2 rounded bg-white text-blue-600 border border-blue-600 transition duration-200">
        <FaShoppingCart className="mr-1" />
        Add to Cart
      </button>
    </Link>
  )
}
export default Cards;

{/* <div className="container justify-center items-center flex flex-wrap gap-4">
          {PopularProductsData.map((product, index) => (
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
        </div> */}