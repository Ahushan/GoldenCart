import { Link } from "react-router-dom";
type IconCardsProps = {
  heroIconCards?: { img: string; name: string; path: string }[];
  detailedIconCards?: { img: string; name: string; path?: string }[];
};

const IconCards: React.FC<IconCardsProps> = ({
  heroIconCards,
  detailedIconCards,
}) => {
  const cardsToRender = heroIconCards || detailedIconCards || [];
  return (
    <div className=" mx-auto p-4 px-10 ">
      <div className="flex gap-4 overflow-x-auto flex-nowrap no-scrollbar p-4 items-center justify-start">
        {cardsToRender.map((card, index) => (
          <Link
            key={index}
            to={card.path || "#"}
            className="flex-shrink-0 flex flex-col items-center gap-2 bg-white shadow-sm hover:shadow-lg p-4 rounded-lg w-[110px] hover:translate-y-1 hover:scale-105 transition-all duration-300"
          >
            <img
              src={card.img}
              alt={card.name}
              className="w-12 h-12 object-contain"
            />
            <h2 className="text-center font-semibold text-nowrap text-purple-800">
              {card.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IconCards;
