import Header from "../components/Header.jsx";
import BlogList from "./Home/BlogList.jsx";
import ProductBanner from "../components/ProductBanner";
import CatBanner from "../components/CatBanner.jsx";
import LayoutContainer from "../components/LayoutContainer";
import Footer from "../components/Footer";
import Carousel from "../components/Carousal";
import Iconcards from "../components/Iconcards.jsx";
import ScrollableProductCards from "../components/ScrollableProductCards";
import {
  AutoBannerData,
  ProductBannerData,
  CatBannerImages,
  DetailedIconCardsData,
  heroIconCardsData,
  BlogData,
} from "../data-files/componentData.jsx";
import PopularProducts from "../components/PopularProducts.jsx";
import {
  LatestProductsData,
  FeaturedProductsData,
} from "../data-files/Data.js";
import { tabLabels } from "../data-files/componentData";

const Home = () => {

  return (
    <>
      <Header />
      <LayoutContainer>
        <Carousel images={AutoBannerData} />
      </LayoutContainer>
      <LayoutContainer>
        <Iconcards IconcardsData={heroIconCardsData} />
      </LayoutContainer>
      <PopularProducts tabLablesData={tabLabels}/>
      <div className="p-5 mt-2">
        <LayoutContainer>
          <CatBanner images={CatBannerImages} />
        </LayoutContainer>
      </div>
      <div className="bg-white flex flex-col py-5 mt-2">
        <LayoutContainer>
          <div className="font-semibold text-lg">Latest Products</div>
          <p className="text-sm">Stay with Modern things around you.</p>
        </LayoutContainer>
        <ScrollableProductCards ProductsData={LatestProductsData} />
      </div>
      <LayoutContainer>
        <Iconcards IconcardsData={DetailedIconCardsData} />
      </LayoutContainer>
      <div className="bg-white py-5 mt-2">
        <LayoutContainer>
          <div className="font-semibold text-lg">Featured Products</div>
          <p className="text-sm">Stay with Modern things around you.</p>
          <ScrollableProductCards ProductsData={FeaturedProductsData} />
        </LayoutContainer>
      </div>
      <ProductBanner banners={ProductBannerData} />
      <div className="bg-white py-5 mt-2">
        <LayoutContainer>
          <div className="font-semibold text-lg">Suggested Products</div>
          <p className="text-sm">Great suggestions for you.</p>
        </LayoutContainer>
        <ScrollableProductCards ProductsData={LatestProductsData} />
      </div>
      <BlogList Data={BlogData} />
      <Footer />
    </>
  );
};

export default Home;
