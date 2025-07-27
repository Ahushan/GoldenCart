import BlogList from "./Home/BlogList";
import ProductBanner from "../components/ProductBanner";
import CatBanner from "../components/CatBanner";
import LayoutContainer from "../components/LayoutContainer";
import Footer from "../components/layout/Footer/Footer";
import Carousel from "../components/Carousel";
import ScrollableProductCards from "../components/ScrollableProductCards";
import {
  autoBanner,
  productBanner,
  catBannerImages,
  detailedIconCards,
  heroIconCards,
  blogData,
} from "../data/componentData";
import PopularProducts1 from "../components/PopularProducts";
import {
  featuredProducts,
  latestProducts,
  popularProducts,
} from "../data/productData";
import ProductCategories from "../components/ProductCategories";
import Header from "../components/layout/Header/Header";

const Home = () => {  
  return (
    <>
      <Header />
      <Carousel autoBanner={autoBanner} />
      <ProductCategories heroIconCards={heroIconCards} />
      <PopularProducts1 popularProducts={popularProducts} />

      <CatBanner catBannerImages={catBannerImages} />

      <div className="bg-white flex flex-col py-5 mt-2">
        <LayoutContainer>
          <div className="font-semibold text-lg">Latest Products</div>
          <p className="text-sm">Stay with Modern things around you.</p>
        </LayoutContainer>
        <ScrollableProductCards products={latestProducts} />
      </div>

      <ProductCategories detailedIconCards={detailedIconCards} />

      <div className="bg-white py-5 mt-2">
        <LayoutContainer>
          <div className="font-semibold text-lg">Featured Products</div>
          <p className="text-sm">Stay with Modern things around you.</p>
        </LayoutContainer>
      </div>

      <ProductBanner productBanner={productBanner} />

      <div className="bg-white py-5 mt-2">
        <LayoutContainer>
          <div className="font-semibold text-lg">Suggested Products</div>

          <ScrollableProductCards products={featuredProducts} />

          <p className="text-sm">Great suggestions for you.</p>
        </LayoutContainer>
        <ScrollableProductCards products={latestProducts} />
      </div>

      <BlogList blogData={blogData} />
      <Footer />
    </>
  );
};

export default Home;
