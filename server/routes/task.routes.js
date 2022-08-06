const express = require("express");
const router = express.Router({ mergeParams: true });
const Task = require("../models/Task");
const auth = require("../middleware/auth.middleware");

router
  .route("/:projectId")
  .post(auth, async (req, res) => {
    try {
      const { projectId } = req.params;

      const newTask = await Task.create({
        ...req.body,
        projectId: projectId,
      });

      res.status(201).send(newTask);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка, попробуйте позже.",
      });
    }
  })
  .get(auth, async (req, res) => {
    try {
      const { projectId } = req.params;

      const tasks = await Task.find({ projectId });

      res.status(200).send(tasks);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка, попробуйте позже.",
      });
    }
  });

router
  .route("/:taskId")
  .patch(auth, async (req, res) => {
    try {
      const { taskId } = req.params;

      const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, {
        new: true,
      });
      res.status(200).send(updatedTask);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка, попробуйте позже.",
      });
    }
  })
  .delete(auth, async (req, res) => {
    try {
      const { taskId } = req.params;
      const removedTask = await Task.findById(taskId);
      await removedTask.remove();
      return res.send(null);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка, попробуйте позже.",
      });
    }
  });

module.exports = router;
