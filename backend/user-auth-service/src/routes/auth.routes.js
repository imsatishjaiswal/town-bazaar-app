import express from "express";
const router = express.Router();
import authController from "../controllers/auth.controller.js";

router.post("/auth/register", authController.registerUser);
router.post("/auth/login", authController.loginUser);

export default router;
