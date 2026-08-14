import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { connectDB } from "./config/db.js";
import router from "./route.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(router);
const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log("🚀 Server running on port", port);
    });
  } catch (err) {
    console.error("❌ Server start failed:", err.message);
  }
};

startServer();
