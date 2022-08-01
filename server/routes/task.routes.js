const express = require("express");
const router = express.Router({ mergeParams: true });
// const Task = require("../models/Task");

router.get("/", (req, res) => {
  try {
    // const tasks = await Task.find();
    res.status(200).send("Задачи");
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже.",
    });
  }
});

module.exports = router;
