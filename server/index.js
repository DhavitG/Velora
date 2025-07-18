import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import veloraRoutes from "./routes/veloraRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["https://velora-ai.netlify.app", "http://localhost:5173"], // production + dev
  })
);

app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/velora", veloraRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(8080);
  } catch (e) {
    console.error(e);
  }
};

startServer();
