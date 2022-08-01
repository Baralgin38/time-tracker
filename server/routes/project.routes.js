const express = require("express");
const router = express.Router({ mergeParams: true });
// const Project = require("../models/Project");

router.get("/", (req, res) => {
  try {
    // const projects = await Project.find();
    res.status(200).send("Проекты");
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже.",
    });
  }
});

module.exports = router;
