const express = require("express");
const app = express();
const { checkForAdmin } = require("./middlewares/authMiddleware");
require("dotenv").config();

app.use(require("cors")());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/admin", require("./routes/adminRoutes/adminAuth.js"));
app.use(
  "/api/v1/admin/teacher",
  // checkForAdmin,
  require("./routes/adminRoutes/adminTeacher.js")
);
app.use(
  "/api/v1/admin/student",
  // checkForAdmin,
  require("./routes/adminRoutes/adminStudent.js")
);
app.use(
  "/api/v1/admin/subject",
  // checkForAdmin,
  require("./routes/adminRoutes/adminSubject.js")
);
app.use("/api/v1/teacher", require("./routes/teacherRoutes/TeacherRouter"));
app.use("/api/v1/student", require("./routes/studentRoutes/StudentRouter.js"));
app.use("/api/v1/common", require("./routes/Common/CommonRoute.js"));

const port = process.env.PORT || 8000;

(async () => {
  try {
    await require("./config/connection")(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}..................`);
    });
  } catch (err) {
    console.log(err);
  }
})();
