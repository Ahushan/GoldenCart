import express from "express";
import {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} from "../controllers/wishlistControllers.js";
// import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/", addToWishlist);
router.delete("/:product_id", removeFromWishlist);
router.get("/:userId", getWishlist);

export default router;
