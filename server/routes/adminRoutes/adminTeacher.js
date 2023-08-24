const router = require("express").Router();
const Teacher = require("../../models/TeacherSchema");
const { sendTeacherMail } = require("../../utils/EmailHandler");

// GET ALL TEACHERS
router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find({});
    res.status(200).json({ data: teachers, success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET A TEACHER
router.get("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    res.status(200).json({ data: teacher, success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE A TEACHER
router.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    const teacher = await Teacher.create(req.body);
    await sendTeacherMail(teacher);
    res.status(200).json({ data: teacher, success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete A TEACHER
router.delete("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    res.status(200).json({ data: teacher, success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
