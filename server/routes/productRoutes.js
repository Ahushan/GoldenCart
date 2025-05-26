import express from "express";
import { getAllProducts , getLatestProducts , getFeaturedProducts} from "../controllers/productControllers.js";
const router = express.Router();

router.get("/", getAllProducts);
router.get("/latest", getLatestProducts);
router.get("/featured", getFeaturedProducts);

export default router;
