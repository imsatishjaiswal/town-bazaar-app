import express from "express";
const router = express.Router();
import customerController from "../controllers/customer.controller.js";

router.post("/auth/register", customerController.createCustomer);
router.get("/:userId", customerController.getCustomer);

export default router;
