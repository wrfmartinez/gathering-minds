import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
    }
  }
}

const router = express.Router();
const SALT_LENGTH = 12;

router.post("/signup", async (req, res) => {
  try {
    // check if email is already registered
    const userInDatabase = await User.findOne({
      username: req.body.email,
    });
    if (userInDatabase) {
      return res.json({ error: "Email is already registered." });
    }
    // create a new user w/ hashed password
    const user = await User.create({
      email: req.body.email,
      hashedPassword: bcrypt.hashSync(req.body.password, SALT_LENGTH),
    });
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET
    );
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user && bcrypt.compareSync(req.body.password, user.hashedPassword)) {
      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET
      );
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
