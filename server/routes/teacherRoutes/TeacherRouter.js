const router = require("express").Router();
const Teacher = require("../../models/TeacherSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @route POST api/v1/teacher/register
// @desc Register teacher
// @access Public
router.get("/:id", async (req, res) => {
  try {
    // console.log(req.params.id);
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(400).json({ msg: "teacher does not exist" });
    }
    res.json({ data: teacher, success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    console.log(email, oldPassword, newPassword);
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    if (oldPassword !== teacher.password) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    teacher.password = newPassword;
    await teacher.save();
    // console.log(teacher);
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
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    if (password !== teacher.password) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    const payload = {
      id: teacher.id,
      name: teacher.name,
      email: teacher.email,
      role: "teacher",
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
    const data = await Teacher.updateMany({ password: "1" });
    await Teacher.updateMany({ password: "1" });
    res.json({ msg: "Updated Successfully", success: true, data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
