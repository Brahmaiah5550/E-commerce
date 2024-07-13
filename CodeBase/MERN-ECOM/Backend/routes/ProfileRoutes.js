import express from "express";
import { User } from "../models/UserModel.js";
import { authMiddleware } from "../models/AuthMiddleware.js";

var router = express.Router();

router.get("/profile", authMiddleware, async (req, res) => {
  //authMiddleware lo unna userId ekkadiki vastadi req lo ki,vachinadanni req.body ki set chestunnam

  console.log("me", req.userId);
  var existUserObj = await User.findById(req.userId)
  var res = await User.findById(req.body.id)
  if (existUserObj) {
    return res.json(existUserObj);
  } else {
    return res.status(400).send("user not found");
  }
});

export default router;
