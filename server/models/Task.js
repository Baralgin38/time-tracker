const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String },
    createdAt: { type: String },
    projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
  },
  { timestamps: true }
);

module.exports = model("Task", schema);
