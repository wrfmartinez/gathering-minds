import express from "express";
import User from "../models/user";
import verifyToken from "../middleware/verify-token";

const router = express.Router();

router.get("/:userId", verifyToken, async (req: any, res) => {
  try {
    if (req.user._id !== req.params.userId) {
      return res.status(401).json({ error: "Unauthorized" })
    }
    const user = await User.findById(req.user._id);
    if (!user) {
      res.status(404)
      throw new Error("Profile not found");
    }
    res.json({ user });
  } catch (error) {
    if (res.statusCode === 404) {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
})

export default router;