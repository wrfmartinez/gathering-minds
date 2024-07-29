import express from "express";
import jwt from "jsonwebtoken";
const router = express.Router();

router.get("/sign-token", (req, res) => {
  // mock user object
  const user = {
    _id: 1,
    email: "example@test.com",
    password: "test",
  };
  // create a token using the sign method
  const token = jwt.sign({ user }, process.env.JWT_SECRET);
  res.json({ token });
});

router.post("verify-token", (req, res) => {
  const token: string = req.headers.authorization?.split("")[1] ? req.headers.authorization.split("")[1] : "";
  // add verify method
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ decoded });
  } catch (error) {
    res.status(401).json({ error: "Invalid token." });
  }
});

export default router;
