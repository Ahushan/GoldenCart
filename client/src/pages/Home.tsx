import BlogList from "./Home/BlogList";
import ProductBanner from "../components/ProductBanner";
import CatBanner from "../components/CatBanner";
import LayoutContainer from "../components/LayoutContainer";
import Footer from "../components/layout/Footer/Footer";
import Carousel from "../components/Carousel";
import {
  autoBanner,
  productBanner,
  catBannerImages,
  detailedIconCards,
  heroIconCards,
  blogData,
} from "../data/componentData";
import PopularProductsSec from "../components/PopularProducts";
import {
  featuredProducts,
  latestProducts,
  popularProducts,
} from "../data/productData";
import ProductCategories from "../components/ProductCategories";
import Header from "../components/layout/Header/Header";
import ScrollableCards from "@/components/ScrollableCards";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel autoBanner={autoBanner} />
      <ProductCategories heroIconCards={heroIconCards} />
      <PopularProductsSec popularProducts={popularProducts} />

      <CatBanner catBannerImages={catBannerImages} />

      <div className="bg-white flex flex-col py-5 mt-2">
        <LayoutContainer>
          <div className="font-semibold text-lg">Latest Products</div>
          <p className="text-sm">Stay with Modern things around you.</p>
        </LayoutContainer>
        <ScrollableCards products={latestProducts} />
      </div>

      <ProductCategories detailedIconCards={detailedIconCards} />

      <div className="bg-white py-5 mt-2">
        <LayoutContainer>
          <div className="font-semibold text-lg">Featured Products</div>
          <p className="text-sm">Stay with Modern things around you.</p>
        </LayoutContainer>
        <ScrollableCards products={featuredProducts} />
      </div>

      <ProductBanner productBanner={productBanner} />

      <div className="bg-white py-5 mt-2">
        <LayoutContainer>
          <div className="font-semibold text-lg">Suggested Products</div>
          <p className="text-sm">Great suggestions for you.</p>
        </LayoutContainer>
        <ScrollableCards products={latestProducts} />
      </div>

      <BlogList blogData={blogData} />
      <Footer />
    </>
  );
};

export default Home;
