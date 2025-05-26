import Carousel from "../components/Carousal";
import Iconcards from "../components/Iconcards";
import CorousalImages from "../data-files/CarousalData";
import ScrollableProductCards from "../components/ScrollableProductCards";
import PopularProductsData from "../data-files/PopularProductsData";
import LatestProducts from "../data-files/LatestProducts";
import FeaturedProductsData from "../data-files/FeaturedProductsData";
import PopularProducts1 from "./Home/PopularProducts1";
import BlogList from "./Home/Blog/BlogList";
import BlogData from "./Home/Blog/BlogData";
import ProductBanner from "../components/ProductBanne";
import ProductBannerData from "../data-files/ProductBannerImagesData/ProductBannerData";
import heroIconCardsData from "../data-files/iconsCards/HeroIconCardsData/heroIconCardsData";
import CatBanner from "../components/CatBanner";
import CatBaannerData from "../data-files/CatBanner/CatBannerData";
import DetailedIconCardsData from "../data-files/iconsCards/FeatuuredIconCardsData/DetailedIconCardsDaata";
import LayoutContainer from "../components/LayoutContainer";
import Footer from "../components/Footer";
import Header from "../pages/Header";

const Home = () => {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Carousel images={CorousalImages} />
      </LayoutContainer>

      <LayoutContainer>
        <Iconcards IconcardsData={heroIconCardsData} />
      </LayoutContainer>

      <PopularProducts1 ProductsData={PopularProductsData} />

      <div className="p-5 mt-2">
        <LayoutContainer>
          <CatBanner images={CatBaannerData} />
        </LayoutContainer>
      </div>

      <div className="bg-white flex flex-col py-5 mt-2">
        <LayoutContainer>
          <div className="font-semibold text-lg">Latest Products</div>
          <p className="text-sm">Stay with Modern things around you.</p>
        </LayoutContainer>
        <ScrollableProductCards ProductsData={LatestProducts} />
      </div>

      <LayoutContainer>
        <Iconcards IconcardsData={DetailedIconCardsData} />
      </LayoutContainer>

      <div className="bg-white py-5 mt-2">
        <LayoutContainer>
          <div className="font-semibold text-lg">Featured Products</div>
          <p className="text-sm">Stay with Modern things around you.</p>
        </LayoutContainer>
        <ScrollableProductCards ProductsData={FeaturedProductsData} />
      </div>

      <ProductBanner banners={ProductBannerData} />

      <div className="bg-white py-5 mt-2">
        <LayoutContainer>
          <div className="font-semibold text-lg">Suggested Products</div>
          <p className="text-sm">Great suggestions for you.</p>
        </LayoutContainer>
        <ScrollableProductCards ProductsData={LatestProducts} />
      </div>

      <BlogList Data={BlogData} />
      <Footer />
    </>
  );
};

export default Home;
