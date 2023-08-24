const jwt = require("jsonwebtoken");
const Teacher = require("../models/TeacherSchema");
const Student = require("../models/StudentSchema");

exports.checkForAdmin = async (req, res, next) => {
  //   console.log(req.headers);
  const token = req.headers.authorization;
  if (token) {
    try {
      const payload = jwt.verify(token, process.env.SECRET_KEY);
      let user = await Teacher.findById(payload._id);
      if (!user) {
        return res.status(401).json({ message: "Invalid token" });
      }
      if (!user.isAdmin || !user.isRegistered) {
        return res.status(401).json({ message: "You are not an admin" });
      }
      req.user = user;
      return next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  } else {
    return res.status(401).json({ message: "Authorization token missing" });
  }
};

exports.checkForTeacher = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const payload = jwt.verify(token, process.env.SECRET_KEY);
      let user = await Teacher.findById(payload._id);
      if (!user) {
        return res.status(401).json({ message: "Invalid token" });
      }
      if (!user.isRegistered) {
        return res.status(401).json({ message: "You are not Registered" });
      }
      req.user = user;
      return next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  } else {
    return res.status(401).json({ message: "Authorization token missing" });
  }
};
