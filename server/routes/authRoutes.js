import express from 'express'
import { userRegistration } from '../controllers/authControllers.js'
import { userLogin } from '../controllers/authControllers.js';

const router = express.Router();

router.post("/register",userRegistration);
router.post("/login",userLogin);

export default router