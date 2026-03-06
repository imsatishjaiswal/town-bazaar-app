import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
const app = express();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 8001;
app.use(express.json());
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/", userRoutes);
app.listen(PORT, () => console.log(`User Service running on port: ${PORT}`));
