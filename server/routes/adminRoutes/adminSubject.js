const router = require("express").Router();
const Subject = require("../../models/SubjectSchema");

// Create a subject
router.post("/create", async (req, res) => {
  try {
    const { name, description } = req.body;
    const newSubject = new Subject({
      name,
      description,
    });
    await newSubject.save();
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
    res.status(200).json(subject);
  } catch (err) {
    res.status(500).json(err);
  }
});

// add teacher to subject
router.put("/:id/addTeacher", async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject.incharge.includes(req.body.teacherId)) {
      await subject.updateOne({ $push: { incharge: req.body.teacherId } });
      res
        .status(200)
        .json({
          msg: "The teacher has been added to the subject",
          success: true,
        });
    } else {
      res
        .status(403)
        .json({ msg: "You have already added the teacher", success: false });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
