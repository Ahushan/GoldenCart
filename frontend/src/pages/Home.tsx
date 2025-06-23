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
  autoBanner,
  productBanner,
  catBannerImages,
  detailedIconCards,
  heroIconCards,
  blogData,
} from "../data-files/componentData";
import PopularProducts1 from "../components/PopularProducts";
import {
  featuredProducts,
  latestProducts,
  popularProducts,
} from "../data-files/productData";

const Home = () => {
  return (
    <>
      <Header />

      <LayoutContainer>
        <Carousel autoBanner={autoBanner} />
      </LayoutContainer>

      <LayoutContainer>
        <IconCards heroIconCards={heroIconCards} />
      </LayoutContainer>

      <PopularProducts1 popularProducts={popularProducts} />

      <div className="p-5 mt-2">
        <LayoutContainer>
          <CatBanner catBannerImages={catBannerImages} />
        </LayoutContainer>
      </div>

      <div className="bg-white flex flex-col py-5 mt-2">
        <LayoutContainer>
          <div className="font-semibold text-lg">Latest Products</div>
          <p className="text-sm">Stay with Modern things around you.</p>
        </LayoutContainer>
        <ScrollableProductCards products={latestProducts} />
      </div>

      <LayoutContainer>
        <IconCards detailedIconCards={detailedIconCards} />
      </LayoutContainer>

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
