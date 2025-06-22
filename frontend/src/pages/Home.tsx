import Header from "../components/Header";
import BlogList from "./Home/BlogList";
import ProductBanner from "../components/ProductBanner";
import CatBanner from "../components/CatBanner";
import LayoutContainer from "../components/LayoutContainer";
import Footer from "../components/Footer";
import Carousel from "../components/Carousal";
import IconCards from "../components/IconCards";
import ScrollableProductCards from "../components/ScrollableProductCards";
import {
  AutoBannerData,
  ProductBannerData,
  CatBannerImages,
  DetailedIconCardsData,
  heroIconCardsData,
  BlogData,
} from "../data-files/componentData.js";
import PopularProducts1 from "../components/PopularProducts";
import productsData from "../data-files/productData";

const Home = () => {
  
  const FeaturedProductsData = productsData.Featured;
  const LatestProductsData = productsData.Latest;
  const PopularProductsData = productsData.Popular;
  console.log(PopularProductsData);

  return (
    <>
      <Header />
      <LayoutContainer>
        <Carousel images={AutoBannerData} />
      </LayoutContainer>
      <LayoutContainer>
        <IconCards IconcardsData={heroIconCardsData} />
      </LayoutContainer>
      <PopularProducts1 ProductsData={PopularProductsData} />
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
        <IconCards IconcardsData={DetailedIconCardsData} />
      </LayoutContainer>
      <div className="bg-white py-5 mt-2">
        <LayoutContainer>
          <div className="font-semibold text-lg">Featured Products</div>
          <p className="text-sm">Stay with Modern things around you.</p>
        </LayoutContainer>
      </div>
      <ProductBanner banners={ProductBannerData} />
      <div className="bg-white py-5 mt-2">
        <LayoutContainer>
          <div className="font-semibold text-lg">Suggested Products</div>
          <ScrollableProductCards ProductsData={FeaturedProductsData} />
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
