const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/project", require("./project.routes"));
router.use("/task", require("./task.routes"));

module.exports = router;
