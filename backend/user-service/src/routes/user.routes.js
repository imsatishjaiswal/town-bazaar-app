import express from "express";
const router = express.Router();
import userController from "../controllers/user.controller.js";

router.post("/register", userController.createUser);
router.get("/", userController.getUsers);

export default router;
