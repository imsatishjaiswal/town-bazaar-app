import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
const app = express();

app.use(
  "/users",
  createProxyMiddleware({
    target: "http://localhost:8001",
    changeOrigin: true,
  }),
);

app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://localhost:8001",
    changeOrigin: true,
  }),
);

app.use(
  "/customers",
  createProxyMiddleware({
    target: "http://localhost:8002",
    changeOrigin: true,
  }),
);

app.listen(8000, () =>
  console.log(
    "API Gateway running on port:",
    `${process.env.GATEWAY_PORT || 8000}`,
  ),
);
