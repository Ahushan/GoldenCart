import { pool as db } from "../config/db.js";

export const createProduct = async (
  product_id,
  product_category,
  product_name,
  product_description,
  product_rating,
  discount,
  product_price,
  discount_price,
  product_image,
  stock,
  slug
) => {
  try {
    const [result] = await db.query(
      `INSERT INTO allproducts (
        product_id,
        product_category,
        product_name,
        product_description,
        product_rating,
        discount,
        product_price,
        discount_price,
        product_image,
        stock,
        slug
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        product_id,
        product_category,
        product_name,
        product_description,
        product_rating,
        discount,
        product_price,
        discount_price,
        product_image,
        stock,
        slug,
      ]
    );

    return {
      success: true,
      message: "Product created successfully.",
      productId: result.insertId,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to create product.",
      error: error.message,
    };
  }
};

export const getProductById = async (product_id) => {
  try {
    const [result] = await db.query(
      "SELECT * FROM allproducts WHERE product_id = ?",
      [product_id]
    );

    if (result.length === 0) {
      return {
        success: false,
        message: "No product found with the given ID.",
      };
    }

    return result[0];
  } catch (error) {
    return {
      success: false,
      message: "Failed to get product by ID.",
      error: error.message,
    };
  }
};

export const updateProductById = async (
  product_id,
  product_category,
  product_name,
  product_description,
  product_rating,
  discount,
  product_price,
  discount_price,
  product_image,
  stock,
  slug
) => {
  try {
    const [result] = await db.query(
      `UPDATE allproducts SET 
        product_category = ?,
        product_name = ?,
        product_description = ?,
        product_rating = ?,
        discount = ?,
        product_price = ?,
        discount_price = ?,
        product_image = ?,
        stock = ?,
        slug = ?
      WHERE product_id = ?`,
      [
        product_category,
        product_name,
        product_description,
        product_rating,
        discount,
        product_price,
        discount_price,
        product_image,
        stock,
        slug,
        product_id,
      ]
    );

    if (result.affectedRows === 0) {
      return {
        success: false,
        message: "No product found to update.",
      };
    }

    return {
      success: true,
      message: "Product updated successfully.",
      affectedRows: result.affectedRows,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to update product data.",
      error: error.message,
    };
  }
};

export const getProductByCategory = async (product_category) => {
  try {
    const [result] = await db.query(
      `SELECT * from allproducts WHERE product_category = ?`,
      [product_category]
    );

    if (result.affectedRows === 0) {
      return {
        success: false,
        message: "There is no category.",
      };
    }

    return {
      success: true,
      message: "Categories fetched successfully.",
      affectedRows: result.affectedRows,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to update product data.",
      error: error.message,
    };
  }
};

export const getAllProductByCategory = async () => {
  try {
    const [result] = await db.query(
      `SELECT product_category from allproducts group by product_category;`
    );

    if (result.affectedRows === 0) {
      return {
        success: false,
        message: "There is no category.",
      };
    }

    return {
      success: true,
      message: "Categories fetched successfully.",
      affectedRows: result.affectedRows,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to update product data.",
      error: error.message,
    };
  }
};

export const deleteProductById = async (product_id) => {
  try {
    const [result] = await db.query(
      "DELETE FROM allproducts WHERE product_id = ?",
      [product_id]
    );

    if (result.affectedRows === 0) {
      return {
        success: false,
        message: "No product found with the given ID.",
      };
    }

    return {
      success: true,
      message: "Product deleted successfully.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to delete product.",
      error: error.message,
    };
  }
};

export const getAllProducts = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM allproducts");
    return rows;
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch all product data.",
      error: error.message,
    };
  }
};

export const getProductByName = async (name) => {
  try {
    const [result] = await db.query(
      `SELECT * FROM allproducts WHERE product_name LIKE ?`,
      [`%${name}%`]
    );

    if (result.length === 0) {
      return {
        success: false,
        message: "No products found with that name.",
      };
    }

    return result;
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch product by name.",
      error: error.message,
    };
  }
};

export const getProductBySlug = async (slug) => {
  try {
    const [result] = await db.query(
      "SELECT * FROM allproducts WHERE slug LIKE ?",
      [`%${slug}%`]
    );

    if (result.length === 0) {
      return {
        success: false,
        message: "No product found with this slug.",
      };
    }

    return result[0];
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch product by slug.",
      error: error.message,
    };
  }
};


export const searchProducts = async (keyword) => {
  try {
    const [results] = await db.query(
      `SELECT * FROM allproducts 
       WHERE MATCH (product_name, product_category, product_description, slug)
       AGAINST (? IN NATURAL LANGUAGE MODE)`,
      [keyword]
    );

    if (results.length === 0) {
      return {
        success: false,
        message: "No matching products found.",
      };
    }

    return {
      success: true,
      message: "Products found.",
      data: results,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error occurred during product search.",
      error: error.message,
    };
  }
};

export default {
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  getAllProducts,
  getProductByName,
  getProductByCategory,
  getAllProductByCategory,
  getProductBySlug, 
  searchProducts
};
