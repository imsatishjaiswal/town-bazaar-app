import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
const app = express();

//User service gateway
app.use(
  "/users",
  createProxyMiddleware({
    target: "http://localhost:8001",
    changeOrigin: true,
  }),
);

//Customer service gateway
app.use(
  "/customers",
  createProxyMiddleware({
    target: "http://localhost:8002",
    changeOrigin: true,
  }),
);

//Store gateway
app.listen(8000, () =>
  console.log(
    "API Gateway running on port:",
    `${process.env.GATEWAY_PORT || 8000}`,
  ),
);
