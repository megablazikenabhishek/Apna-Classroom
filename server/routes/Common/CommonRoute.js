const Teacher = require("../../models/TeacherSchema");
const Student = require("../../models/StudentSchema");
const Subject = require("../../models/SubjectSchema");
const router = require("express").Router();
const multer = require("multer");

// Define storage settings for multer
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log("file", file);
    // Specify where to store uploaded files
    callback(null, "./public/uploads/");
  },
  filename: (req, file, callback) => {
    // Define how to name the uploaded files
    callback(null, Date.now() + "-" + file.originalname);
  },
});

// Initialize multer with storage settings
const upload = multer({ storage: storage });

router.get("/Subject/getAll", async (req, res) => {
  try {
    const Subjects = await Subject.find({});
    res.status(200).json({ Subjects, success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get all messages of a subject
router.get("/Subject/getAllMessages/:subjectId", async (req, res) => {
  try {
    const { subjectId } = req.params;
    const subj = await Subject.findById(subjectId);
    // console.log("subj", subj);
    if (!subj) {
      res.status(404).json({ message: "Subject not found", success: false });
    }
    const messages = subj.messages;
    res.status(200).json({ messages, success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// push a message to a subject
router.post("/Subject/pushMessage/:subjectId", async (req, res) => {
  try {
    const { subjectId } = req.params;
    const { message } = req.body;

    // console.log("message", message);

    const update = await Subject.findByIdAndUpdate(
      subjectId,
      {
        $push: {
          messages: message,
        },
      },
      { new: true }
    );
    res.status(200).json({ update, success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// upload file to a subject
router.post(
  "/Subject/uploadFile/:subjectId",
  upload.single("file"),
  async (req, res) => {
    try {
      const { subjectId } = req.params;
      const { file } = req;
      console.log("file", file);
      const update = await Subject.findByIdAndUpdate(
        subjectId,
        {
          $push: {
            files: {
              name: file.originalname,
              path: `/public/uploads/${file.filename}`,
            },
          },
        },
        { new: true }
      );
      res.status(200).json({ update, success: true });
      // res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

// get all files of a subject
router.get("/Subject/getAllFiles/:subjectId", async (req, res) => {
  try {
    const { subjectId } = req.params;
    const subj = await Subject.findById(subjectId);
    // console.log("subj", subj);
    if (!subj) {
      res.status(404).json({ message: "Subject not found", success: false });
    }
    const files = subj.files;
    res.status(200).json({ files, success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// download a file of a subject
router.get("/Subject/downloadFile/", async (req, res) => {
  try {
    const { path } = req.query;
    console.log("path", path);
    res.download(`.${path}`);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
