import db from "../config/db.js";

export const getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM allproducts");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const getLatestProducts = async (req , res) => {
    try {
        const [rows] = await db.query("SELECT * FROM allproducts where product_id = 1");
        res.json(rows) 
    } catch (error) {
        res.status(500).json({ message : "Error in Get latest products from database ",error})
    }
}

export const getFeaturedProducts = async (req , res) => {
    try {
        const [rows] = await db.query("SELECT * FROM allproducts where product_id = 4");
        res.json(rows) 
    } catch (error) {
        res.status(500).json({ message : "Error in Get latest products from database ",error})
    }
}