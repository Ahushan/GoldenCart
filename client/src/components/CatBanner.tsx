import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CatBannerImage } from "../data/types";
import LayoutContainer from "./LayoutContainer";

interface CatBannerType {
  catBannerImages: CatBannerImage[];
}
const CatBanner = ({ catBannerImages }: CatBannerType) => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900, // lg
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 4,
        },
      },
    ],
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="p-5 mt-2">
      <LayoutContainer>
        <div className="w-full overflow-hidden">
          <Slider {...settings}>
            {catBannerImages.map((img, index) => (
              <div key={index} className="px-2">
                <div className="w-[250px] h-[120px] sm:w-[280px] sm:h-[130px] md:w-[300px] md:h-[140px] lg:w-[320px] lg:h-[150px] xl:w-[340px] xl:h-[160px] 2xl:w-[360px] 2xl:h-[180px] rounded-md overflow-hidden">
                  <img
                    src={img.path}
                    alt={`CatBanner-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </LayoutContainer>
    </div>
  );
};

export default CatBanner;
