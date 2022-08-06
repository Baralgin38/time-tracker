const express = require("express");
const router = express.Router({ mergeParams: true });
const Project = require("../models/Project");
const auth = require("../middleware/auth.middleware");

router
  .route("/")
  .get(auth, async (req, res) => {
    try {
      const projects = await Project.find({ creator: req.user._id });
      res.status(200).send(projects);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка, попробуйте позже.",
      });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newProject = await Project.create({
        ...req.body,
        creator: req.user._id,
      });
      res.status(200).send(newProject);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка, попробуйте позже.",
      });
    }
  });

router
  .route("/:projectId")
  .patch(auth, async (req, res) => {
    try {
      const { projectId } = req.params;
      const updatedProject = await Project.findByIdAndUpdate(
        projectId,
        req.body,
        { new: true }
      );
      res.status(200).send(updatedProject);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка, попробуйте позже.",
      });
    }
  })
  .delete(auth, async (req, res) => {
    try {
      const { projectId } = req.params;
      const removedProject = await Project.findById(projectId);
      await removedProject.remove();
      return res.send(null);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка, попробуйте позже.",
      });
    }
  });

module.exports = router;
