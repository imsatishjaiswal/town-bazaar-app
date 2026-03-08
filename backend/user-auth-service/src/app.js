import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 8001;
app.use(express.json());
app.use(cors());
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/", userRoutes);
app.use("/", authRoutes);
app.listen(PORT, () => console.log(`User Service running on port: ${PORT}`));
