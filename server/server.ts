import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import JWTRouter from "./controllers/jwt-router";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
    }
  }
}

const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected: ${mongoose.connection.name}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
