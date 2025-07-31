import { Link } from "react-router-dom";
import LayoutContainer from "./LayoutContainer";

type ProductCategoriesProps = {
  heroIconCards?: { img: string; name: string; path: string }[];
  detailedIconCards?: { img: string; name: string; path?: string }[];
};

const ProductCategories = ({
  heroIconCards,
  detailedIconCards,
}: ProductCategoriesProps) => {
  const cardsToRender = heroIconCards || detailedIconCards || [];

  return (
    <section className="py-4">
      <LayoutContainer>
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Scrollable on small screens, grid on md+ */}
          <div
            className="
              flex gap-4 overflow-x-auto flex-nowrap no-scrollbar 
              sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
              justify-start items-center
            "
          >
            {cardsToRender.map((card, index) => (
              <Link
                key={index}
                to={card.path || "#"}
                className="
                  flex-shrink-0 sm:flex-shrink 
                  flex flex-col items-center gap-2 
                  bg-white shadow-sm hover:shadow-lg 
                  p-4 rounded-lg 
                  w-[100px] sm:w-full
                  transition-all duration-300 ease-in-out
                  hover:scale-90 hover:-translate-y-1
                "
              >
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-12 h-12 object-contain"
                />
                <h2 className="text-center font-semibold text-sm text-purple-800 truncate w-full">
                  {card.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default ProductCategories;
