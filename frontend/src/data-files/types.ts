import { ElementType } from "react";

export interface Product {
  imageSrc: string;
  discount: number;
  title: string;
  description: string;
  rating: number;
  price: string;
  discountPrice: string;
}

export interface PopularProductsType {
  fashion: Product[];
  electronics: Product[];
  bags: Product[];
  groceries: Product[];
  beauty: Product[];
  wellness: Product[];
  jewellery: Product[];
}

export type ProvidingDataItem = {
  icon: ElementType;
  title: string;
  des: string;
};

export type AutoBannerItem = {
  path: string;
};

export type ProductBannerItem = {
  name: string;
  image: string;
  details: string;
  description: string;
  productImg: string;
};

export type CatBannerImage = {
  path: string;
};

export type IconCardItem = {
  img: string;
  name: string;
  path: string;
};

export type HeroIconCardItem = {
  img: string;
  name: string;
  path: string;
};

export type BlogItem = {
  imgPath: string;
  title: string;
  content: string;
};

export type TabLabel =
  | "fashion"
  | "electronics"
  | "bags"
  | "groceries"
  | "beauty"
  | "wellness"
  | "jewellery";
