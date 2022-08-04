const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const tokenService = require("../services/token.service");

router.post("/signUp", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({
        error: {
          message: "EMAIL_EXISTS",
          code: 400,
        },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    const tokens = tokenService.generate({ _id: newUser._id });
    await tokenService.save(newUser._id, tokens.refreshToken);

    res.status(201).send({ ...tokens, userId: newUser._id });
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже.",
    });
  }
});

router.post("/signInWithPassword", async (req, res) => {});

router.post("/token", async (req, res) => {});

module.exports = router;
