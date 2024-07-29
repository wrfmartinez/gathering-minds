import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import User from "./models/User.ts";
import Course from "./models/Course.ts";

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

app.get("/", (req, res) => {
  res.render
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
