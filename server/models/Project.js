const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    title: { type: String },
    createdAt: { type: String },
    updatedAt: { type: String },
    workingTime: { type: String },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    completedTasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    participants: [
      { type: Schema.Types.ObjectId, ref: "User", required: true },
    ],
  },
  { timestamps: true }
);

module.exports = model("Project", schema);
/*
  - название *
  - дата создания *
  - время последней работы над проектом *
  - итоговое время работы над проектом * 
  - задачи *
  - выполненные задачи *
  - пользователи работающие над проектом *
*/
