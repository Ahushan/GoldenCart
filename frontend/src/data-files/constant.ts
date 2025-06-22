export interface Subcategory {
  id: number;
  name: string;
  linkTo: string;
}

export interface NavCategory {
  id: number;
  name: string;
  linkTo: string;
  subcategories: Subcategory[];
}


export const NavCategories: NavCategory[] = [
  {
    id: 0,
    name: "Home",
    linkTo: "/",
    subcategories: []
  },
  {
    id: 1,
    name: "Fashion",
    linkTo: "/Fashions",
    subcategories: [
      { id: 1, name: "Men", linkTo: "/Mens" },
      { id: 2, name: "Women", linkTo: "/Womens" },
      { id: 3, name: "Children", linkTo: "/Children" }
    ]
  },
  {
    id: 2,
    name: "Electronics",
    linkTo: "/Electronics",
    subcategories: [
      { id: 4, name: "Mobile Phones", linkTo: "/MobilePhones" },
      { id: 5, name: "Laptops", linkTo: "/Laptops" },
      { id: 6, name: "Smart Watch Accessories", linkTo: "/SmartWatchAccessories" },
      { id: 7, name: "Cameras", linkTo: "/Cameras" }
    ]
  },
  {
    id: 3,
    name: "Bags",
    linkTo: "/Bags",
    subcategories: [
      { id: 8, name: "Handbags", linkTo: "/Handbags" },
      { id: 9, name: "Backpacks", linkTo: "/Backpacks" },
      { id: 10, name: "Travel Bags", linkTo: "/TravelBags" }
    ]
  },
  {
    id: 4,
    name: "Footwear",
    linkTo: "/Footwear",
    subcategories: [
      { id: 11, name: "Men", linkTo: "/MenFootwear" },
      { id: 12, name: "Women", linkTo: "/WomenFootwear" },
      { id: 13, name: "Kids", linkTo: "/KidsFootwear" }
    ]
  },
  {
    id: 5,
    name: "Groceries",
    linkTo: "/Groceries",
    subcategories: [
      { id: 14, name: "Fruits & Vegetables", linkTo: "/FruitsVegetables" },
      { id: 15, name: "Dairy Products", linkTo: "/DairyProducts" },
      { id: 16, name: "Beverages", linkTo: "/Beverages" }
    ]
  },
  {
    id: 6,
    name: "Beauty",
    linkTo: "/Beauty",
    subcategories: [
      { id: 17, name: "Skincare", linkTo: "/Skincare" },
      { id: 18, name: "Makeup", linkTo: "/Makeup" },
      { id: 19, name: "Fragrances", linkTo: "/Fragrances" }
    ]
  },
  {
    id: 7,
    name: "Wellness",
    linkTo: "/Wellness",
    subcategories: [
      { id: 20, name: "Supplements", linkTo: "/Supplements" },
      { id: 21, name: "Fitness Equipment", linkTo: "/FitnessEquipment" },
      { id: 22, name: "Personal Care", linkTo: "/PersonalCare" }
    ]
  },
  {
    id: 8,
    name: "Jewellery",
    linkTo: "/Jewellery",
    subcategories: [
      { id: 23, name: "Necklaces", linkTo: "/Necklaces" },
      { id: 24, name: "Earrings", linkTo: "/Earrings" },
      { id: 25, name: "Bracelets", linkTo: "/Bracelets" }
    ]
  }
];
