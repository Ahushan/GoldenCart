// MARK: ProvidingData
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiGift } from "react-icons/tfi";
import { FaAmazonPay } from "react-icons/fa";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsHeadset } from "react-icons/bs";

// MARK: AutoBannerData
import banner1 from "../assets/HeroBanner/banner-1.jpeg";
import banner2 from "../assets/HeroBanner/banner-2.jpeg";
import banner3 from "../assets/HeroBanner/banner-3.jpg";
import banner4 from "../assets/HeroBanner/banner-4.jpeg";
import banner5 from "../assets/HeroBanner/banner-5.jpeg";


// MARK: ProductBannerData
import img1 from "./Images/ProductBannerImages/BgImages/img5.jpg";
import img2 from "./Images/ProductBannerImages/BgImages/img2.webp";
import img3 from "./Images/ProductBannerImages/BgImages/img3.webp";
import img4 from "./Images/ProductBannerImages/BgImages/img4.webp";
//
import iphone15 from "./Images/ProductBannerImages/ProductImage/iPhone-15-Pro-Max.png";
import googlePixel from "./Images/ProductBannerImages/ProductImage/GOOGLE-PIXEL-7.png";
import oneplus11 from "./Images/ProductBannerImages/ProductImage/oneplus11.png";
import s23u from "./Images/ProductBannerImages/ProductImage/Galaxy-S23-Ultra-PNG-HD-Image.png";

//MARK: CatBanner
import image1 from "./Images/CatBannerImages/img1.jpg";
import image2 from "./Images/CatBannerImages/img2.jpg";
import image3 from "./Images/CatBannerImages/img3.webp";
import image4 from "./Images/CatBannerImages/img4.webp";
import image5 from "./Images/CatBannerImages/img5.avif";
import image6 from "./Images/CatBannerImages/img6.jpeg";
import image7 from "./Images/CatBannerImages/img7.jpg";
import image8 from "./Images/CatBannerImages/img8.webp";
import image9 from "./Images/CatBannerImages/img9.webp";
import image10 from "./Images/CatBannerImages/img10.webp";

//MARK: Products-Small-Images
import Electronics from "./Images/IconCatagoriesImages/headphones.png";
import Fashion from "./Images/IconCatagoriesImages/consumption.png";
import Bags from "./Images/IconCatagoriesImages/school-bag.png";
import Footwear from "./Images/IconCatagoriesImages/sneakers.png";
import Groceries from "./Images/IconCatagoriesImages/groceries.png";
import Beauty from "./Images/IconCatagoriesImages/products.png";
import Jewel from "./Images/IconCatagoriesImages/jewelry.png";
import Wellness from "./Images/IconCatagoriesImages/meditation.png";
// Hero Icon cards
import Toys from "./Images/IconCatagoriesImages/toys.png";
import Stationery from "./Images/IconCatagoriesImages/school-supplies.png";
import HomeDecor from "./Images/IconCatagoriesImages/sofa.png";
import Kitchen from "./Images/IconCatagoriesImages/kitchen.png";
import Sports from "./Images/IconCatagoriesImages/sports.png";

// MARK: BlogData
import BlogImage1 from "../assets/BlogImages/blog1.webp";
import BlogImage2 from "../assets/BlogImages/blog2.webp";
import BlogImage3 from "../assets/BlogImages/blog3.webp";

// MARK: AutoBannerData
export const autoBanner = [
  {
    name: 'green-shoes',
    path: banner1,
  },
  {
    name: 'lg-tv',
    path: banner2,
  },
  {
    path: banner3,
  },
  {
    name: 'electric-scooter',
    path: banner4,
  },
  {
    name: 'sports-shoes',
    path: banner5,
  },
];

// MARK: ProductBannerData
export const productBanner = [
  {
    name: "iPhone 15 Pro Max",
    image: img1,
    details: "This is a description of Product 1.",
    description:
      "The latest iPhone with advanced features and stunning design.",
    productImg: iphone15,
  },
  {
    name: "Samsung Galaxy S23 Ultra",
    image: img2,
    details: "This is a description of Product 2.",
    description: "Experience the power of the latest Galaxy smartphone.",
    productImg: s23u,
  },
  {
    name: "Google Pixel 7",
    image: img3,
    details: "This is a description of Product 3.",
    description: "Capture stunning photos with the best camera phone.",
    productImg: googlePixel,
  },
  {
    name: "OnePlus 11",
    image: img4,
    details: "This is a description of Product 4.",
    description: "Fast performance and sleek design in one package.",
    productImg: oneplus11,
  },
];

//MARK: CatBanner
export const catBannerImages = [
  { path: image1 },
  { path: image2 },
  { path: image3 },
  { path: image4 },
  { path: image5 },
  { path: image6 },
  { path: image7 },
  { path: image8 },
  { path: image9 },
  { path: image10 },
];

//MARK: Products-Samll-Images
export const detailedIconCards = [
  { img: Toys, name: "Toys" },
  { img: Stationery, name: "Stationery" },
  { img: HomeDecor, name: "Home Decor" },
  { img: Kitchen, name: "Kitchen" },
  { img: Sports, name: "Sports" },
  { img: Fashion, name: "Fashion" },
  { img: Electronics, name: "Electronics" },
  { img: Bags, name: "Bags" },
  { img: Footwear, name: "Footwear" },
  { img: Groceries, name: "Groceries" },
  { img: Beauty, name: "Beauty" },
  { img: Wellness, name: "Wellness" },
  { img: Jewel, name: "Jewellery" },
];

//MARK: heroIconCardsData
export const heroIconCards = [
  {
    img: Fashion,
    name: "Fashion",
    path: "/products/fashion",
  },
  {
    img: Toys,
    name: "Toys",
    path: "/products/toys",
  },
  {
    img: Electronics,
    name: "Electronics",
    path: "/products/electronics",
  },
  {
    img: Bags,
    name: "Bags",
    path: "/products/bags",
  },
  {
    img: Footwear,
    name: "Footwear",
    path: "/products/footwear",
  },
  {
    img: Groceries,
    name: "Groceries",
    path: "/products/groceries",
  },
  {
    img: Beauty,
    name: "Beauty",
    path: "/products/beauty",
  },
  {
    img: Wellness,
    name: "Wellness",
    path: "/products/wellness",
  },
  {
    img: Jewel,
    name: "Jewellery",
    path: "/products/jewellery",
  },
];

// MARK: BlogData
export const blogData = [
  {
    imgPath: BlogImage1,
    title: "Empowering change, delivering every single time success",
    content:
      "We are excited to hear from you! Whether you’re looking for strategic insights, customized solutions...",
  },
  {
    imgPath: BlogImage2,
    title: "Innovating for a Sustainable Future",
    content:
      "Discover how innovation can lead to sustainable practices that benefit both business and the environment.",
  },
  {
    imgPath: BlogImage3,
    title: "The Future of Technology in Business",
    content:
      "Explore the latest technological advancements and how they are transforming the business landscape.",
  },
];

type ProvidingDataItem = {
  icon: React.ElementType;
  title: string;
  des: string;
};

// MARK: ProvidingData
export const ProvidingData: ProvidingDataItem[] = [
  {
    icon: LiaShippingFastSolid,
    title: "Free Shipping",
    des: "For all Orders Over $100",
  },
  {
    icon: PiKeyReturnLight,
    title: "30 Days Returns",
    des: "For an Exchange Products",
  },
  {
    icon: TfiGift,
    title: "Special Gifts",
    des: "Our First Products order",
  },
  {
    icon: FaAmazonPay,
    title: "Secured Payment",
    des: "Payment Cards Accepted",
  },
  {
    icon: BsHeadset,
    title: "Support 24/7",
    des: "Contact us Anytime",
  },
];

export const tabLabels = [
  "Fashion",
  "Electronics",
  "Bags",
  "Groceries",
  "Beauty",
  "Wellness",
  "Jewellery",
];
