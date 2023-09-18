const router = require("express").Router();
const Student = require("../../models/StudentSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Teacher = require("../../models/TeacherSchema");

// @route POST api/v1/student/register
// @desc Register student
// @access Public
router.get("/:id", async (req, res) => {
  try {
    // console.log(req.params.id);
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(400).json({ msg: "Student does not exist" });
    }
    res.json({ data: student, success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    if (oldPassword !== student.password) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    student.password = newPassword;
    await student.save();
    // console.log(student);
    res.json({ msg: "Password Changed Successfully", success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    if (password !== student.password) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    const payload = {
      id: student.id,
      name: student.name,
      email: student.email,
      role: "student",
    };
    console.log(payload);
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    res.json({ msg: "Logged In Successfully", success: true, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

router.post("/update", async (req, res) => {
  try {
    const data = await Student.updateMany({ password: "1" });
    await Teacher.updateMany({ password: "1" });
    res.json({ msg: "Updated Successfully", success: true, data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
