const router = require("express").Router();
const Student = require("../../models/StudentSchema");
const { sendStudentMail } = require("../../utils/EmailHandler");

// GET ALL STUDENTS
router.get("/", async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json({ data: students, success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET A STUDENT
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json({ data: student, success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE A STUDENT
router.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    const password = (Math.random() + 1).toString(36).substring(7);
    req.body.password = password;
    // get the last entry in the student table
    const lastStudent = await Student.findOne().sort({ field: "asc", _id: -1 });
    // console.log(lastStudent);
    // get the last student's roll number
    const lastRollNumber = lastStudent.rollNumber;
    req.body.rollNumber = lastRollNumber + 1;
    const student = await Student.create(req.body);
    student.password = password;
    await sendStudentMail(student);
    res.status(200).json({ data: student, success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete A STUDENT
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({ data: student, success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
