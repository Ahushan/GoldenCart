import wishlistModel from "../models/wishlistModel.js";

export const addToWishlist = async (req, res) => {
  const { product_id } = req.body;
  const userId = req.user?.id;

  if (!userId || !product_id) {
    return res.status(400).json({ success: false, message: "Missing user ID or product ID" });
  }

  const result = await wishlistModel.addWishlist(userId, product_id);
  if (result.success) {
    return res.status(201).json(result);
  } else {
    return res.status(500).json(result);
  }
};

export const removeFromWishlist = async (req, res) => {
  const { product_id } = req.params;
  const userId = req.user?.id;

  if (!userId || !product_id) {
    return res.status(400).json({ success: false, message: "Missing user ID or product ID" });
  }

  const result = await wishlistModel.deleteWishlist(userId, product_id);
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json(result);
  }
};

export const getWishlist = async (req, res) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(400).json({ success: false, message: "User ID is required" });
  }

  const result = await wishlistModel.getAllWishlistsById(userId);
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json(result);
  }
};
