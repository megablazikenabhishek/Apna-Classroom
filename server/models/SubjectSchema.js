const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Name must be at least 2 characters long"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [5, "Description must be at least 5 characters long"],
    },
    incharge: {
      type: Array,
      default: [],
    },
    messages: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Subject = mongoose.model("Subject", SubjectSchema);
module.exports = Subject;
