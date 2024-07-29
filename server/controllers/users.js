import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user";

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