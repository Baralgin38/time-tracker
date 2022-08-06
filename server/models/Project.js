const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: String },
    updatedAt: { type: String },
    workingTime: { type: String },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    completedTasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = model("Project", schema);
