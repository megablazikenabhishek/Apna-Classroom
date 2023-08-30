const router = require("express").Router();
const Subject = require("../../models/SubjectSchema");
const Teacher = require("../../models/TeacherSchema");

// Create a subject
router.post("/create", async (req, res) => {
  try {
    const newSubject = await Subject.create(req.body);
    res.status(200).json(newSubject);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all subjects
router.get("/", async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one subject
router.get("/:id", async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    let incharge = [];
    for (let i = 0; i < subject.incharge.length; i++) {
      const teacher = await Teacher.findById(subject.incharge[i]);
      incharge.push({
        id: teacher._id,
        name: teacher.name,
        email: teacher.email,
      });
    }
    subject.incharge = incharge;
    // console.log(subject.incharge);
    res.status(200).json(subject);
  } catch (err) {
    res.status(500).json(err);
  }
});

// add teacher to subject
router.put("/:id/addTeacher", async (req, res) => {
  try {
    const subject = await Subject.findByIdAndUpdate(req.params.id, {
      incharge: req.body.incharge,
    });
    res
      .status(200)
      .json({
        data: subject,
        message: "Teacher added successfully",
        success: true,
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
