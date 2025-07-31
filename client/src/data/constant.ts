import { NavCategory } from "./types";

export const navCategories: NavCategory[] = [
  {
    id: 0,
    name: "Home",
    subcategories: [],
  },
  {
    id: 1,
    name: "Fashion",
    subcategories: [
      {
        id: 1,
        name: "Men",
        varients: ["Shirts", "Jeans", "Trousers", "Joggers", "Caps", "Jackets"],
      },
      {
        id: 2,
        name: "Women",
        varients: ["Dresses", "Tops", "Leggings", "Sarees", "Heels", "Handbags"],
      },
      {
        id: 3,
        name: "Kids",
        varients: ["T-shirts", "Shorts", "Frocks", "Sneakers", "School Bags"],
      },
    ],
  },
  {
    id: 2,
    name: "Electronics",
    subcategories: [
      {
        id: 4,
        name: "Mobile Phones",
        varients: ["Android", "iOS", "Feature Phones", "Refurbished"],
      },
      {
        id: 5,
        name: "Laptops",
        varients: ["Gaming", "Ultrabooks", "Business", "Student"],
      },
      {
        id: 6,
        name: "Smart Watches",
        varients: ["Apple", "Samsung", "Noise", "Boat", "Fire-Boltt"],
      },
      {
        id: 7,
        name: "Cameras",
        varients: ["DSLR", "Mirrorless", "Action", "Security"],
      },
    ],
  },
  {
    id: 3,
    name: "Bags",
    subcategories: [
      {
        id: 8,
        name: "Handbags",
        varients: ["Tote", "Clutch", "Sling", "Hobo"],
      },
      {
        id: 9,
        name: "Backpacks",
        varients: ["Casual", "Laptop", "Travel", "School"],
      },
      {
        id: 10,
        name: "Travel Bags",
        varients: ["Duffel", "Suitcase", "Trolley", "Cabin Bags"],
      },
    ],
  },
  {
    id: 4,
    name: "Footwear",
    subcategories: [
      {
        id: 11,
        name: "Men",
        varients: ["Loafers", "Sneakers", "Sandals", "Formal"],
      },
      {
        id: 12,
        name: "Women",
        varients: ["Heels", "Ballerinas", "Flip-Flops", "Wedges"],
      },
      {
        id: 13,
        name: "Kids",
        varients: ["School Shoes", "Sneakers", "Sandals"],
      },
    ],
  },
  {
    id: 5,
    name: "Groceries",
    subcategories: [
      {
        id: 14,
        name: "Fruits & Vegetables",
        varients: ["Organic", "Leafy Greens", "Root Vegetables", "Fresh Fruits"],
      },
      {
        id: 15,
        name: "Dairy Products",
        varients: ["Milk", "Cheese", "Butter", "Curd"],
      },
      {
        id: 16,
        name: "Beverages",
        varients: ["Tea", "Coffee", "Juices", "Energy Drinks"],
      },
    ],
  },
  {
    id: 6,
    name: "Beauty",
    subcategories: [
      {
        id: 17,
        name: "Skincare",
        varients: ["Moisturizers", "Cleansers", "Serums", "Sunscreens"],
      },
      {
        id: 18,
        name: "Makeup",
        varients: ["Lipstick", "Foundation", "Eyeliner", "Mascara"],
      },
      {
        id: 19,
        name: "Fragrances",
        varients: ["Perfume", "Deodorant", "Body Mist"],
      },
    ],
  },
  {
    id: 7,
    name: "Wellness",
    subcategories: [
      {
        id: 20,
        name: "Supplements",
        varients: ["Vitamins", "Protein", "Herbal"],
      },
      {
        id: 21,
        name: "Fitness Equipment",
        varients: ["Dumbbells", "Yoga Mats", "Resistance Bands"],
      },
      {
        id: 22,
        name: "Personal Care",
        varients: ["Sanitary", "Toothpaste", "Shampoo", "Soap"],
      },
    ],
  },
  {
    id: 8,
    name: "Jewellery",
    subcategories: [
      {
        id: 23,
        name: "Necklaces",
        varients: ["Gold", "Silver", "Diamond", "Artificial"],
      },
      {
        id: 24,
        name: "Earrings",
        varients: ["Studs", "Jhumkas", "Hoops", "Danglers"],
      },
      {
        id: 25,
        name: "Bracelets",
        varients: ["Charm", "Cuff", "Bangle", "Chain"],
      },
    ],
  },
];
