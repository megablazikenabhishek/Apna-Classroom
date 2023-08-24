const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const TeacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Name must be at least 2 characters long"],
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [1, "Age must be at least 1 year old"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      minlength: [5, "Email must be at least 5 characters long"],
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isRegistered: {
      type: Boolean,
      default: false,
    },
    birthday: {
      type: String,
      required: [true, "Birthday is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    contactNumber: {
      type: String,
      required: [true, "Contact Number is required"],
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
    },
    yearsOfExperience: {
      type: Number,
      default: 0,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

TeacherSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  } catch (error) {
    console.log(error);
  }
});

const Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher;
