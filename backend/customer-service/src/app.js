import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import customerRoutes from "./routes/customer.routes.js";

const app = express();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 8003;

app.use(express.json());

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected in Customer Service"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/", customerRoutes);

app.listen(PORT, () =>
  console.log(`Customer Service running on port: ${PORT}`),
);
