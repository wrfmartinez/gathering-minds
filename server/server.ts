import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import JWTRouter from "./controllers/jwt-router";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      JWT_SECRET: string;
    }
  }
}

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected: ${mongoose.connection.name}`);
});

// ROUTES
app.use("/jwt-router", JWTRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
