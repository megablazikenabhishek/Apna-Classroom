const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const StudentSchema = new mongoose.Schema(
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
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: ["M", "F"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      minlength: [5, "Email must be at least 5 characters long"],
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
    cgpa: {
      type: Number,
    },
    contactNumber: {
      type: String,
      required: [true, "Contact Number is required"],
    },
    rollNumber: {
      type: Number,
      required: [true, "Roll Number is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

// StudentSchema.pre("save", async function (next) {
//   try {
//     if (this.isModified("password")) {
//       this.password = await bcrypt.hash(this.password, 10);
//     }
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// });

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
