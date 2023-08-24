const router = require("express").Router();
const Teacher = require("../../models/TeacherSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Admin Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Please fill all the fields" });
    }
    const user = await Teacher.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "Create Account",
      });
    }
    // console.log(user);
    if (!user.isRegistered) {
      return res.status(400).json({
        success: false,
        msg: "You are not verified. Check your email",
      });
    }
    if (!user.isAdmin) {
      return res.status(400).json({
        success: false,
        msg: "You are not an admin",
      });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({
        success: false,
        msg: "Wrong Password. Please enter correct Password",
      });
    }
    const payload = { _id: user._id };
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    res.status(200).json({
      success: true,
      msg: "Login Successfull",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      msg: "Error while login",
      error,
    });
  }
});

module.exports = router;
