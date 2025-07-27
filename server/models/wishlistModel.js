import { pool as db } from "../config/db.js";

export const addWishlist = async (userId, product_id) => {
  try {
    const [result] = await db.query(
      `INSERT INTO wishlists (user_id, product_id) VALUES (?, ?)`,
      [userId, product_id]
    );

    return {
      success: true,
      message: "Product added to wishlist.",
      affectedRows: result.affectedRows,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to add to wishlist.",
      error: error.message,
    };
  }
};

export const deleteWishlist = async (userId, product_id) => {
  try {
    const [result] = await db.query(
      `DELETE FROM wishlists WHERE user_id = ? AND product_id = ?`,
      [userId, product_id]
    );

    return {
      success: true,
      message: "Product removed from wishlist.",
      affectedRows: result.affectedRows,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to remove from wishlist.",
      error: error.message,
    };
  }
};

export const getAllWishlistsById = async (userId) => {
  try {
    const [result] = await db.query(
      `SELECT ap.* FROM wishlists w
       JOIN allproducts ap ON w.product_id = ap.product_id
       WHERE w.user_id = ?`,
      [userId]
    );

    if (result.length === 0) {
      return {
        success: false,
        message: "No wishlist items found.",
      };
    }

    return {
      success: true,
      wishlist: result,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch wishlist.",
      error: error.message,
    };
  }
};

export default {
  getAllWishlistsById,
  addWishlist,
  deleteWishlist,
};
