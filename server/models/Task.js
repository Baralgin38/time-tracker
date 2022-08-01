const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String },
    createdAt: { type: String },
  },
  { timestamps: true }
);

module.exports = model("Project", schema);
