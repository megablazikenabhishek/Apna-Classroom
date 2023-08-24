const nodemailer = require("nodemailer");

exports.sendTeacherMail = async (teacher) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: teacher.email,
      subject: "Welcome to the College",
      html: `
        <h1>Welcome ${teacher.name}</h1>
        <p>You have been registered as a teacher in our college.</p>
        <p>Here are your details:</p>
        <ul>
            <li>Name: ${teacher.name}</li>
            <li>Age: ${teacher.age}</li>
            <li>Email: ${teacher.email}</li>
            <li>Birthday: ${teacher.birthday}</li>
            <li>Address: ${teacher.address}</li>
            <li>Contact Number: ${teacher.contactNumber}</li>
            <li>Salary: ${teacher.salary}</li>
            <li>Years of Experience: ${teacher.yearsOfExperience}</li>
        </ul>
        <p> Please follow this link to complete your registration: <a href="${process.env.FRONTEND_URL}/teacher/registration/${teacher._id}">link</a></p>
        <p>Thank you for joining us.</p>

        <p>Regards,</p>
        <p>College</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (err) {
    console.log(err);
  }
};

exports.sendStudentMail = async (student) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: student.email,
      subject: "Welcome to the College",
      html: `
            <h1>Welcome ${student.name}</h1>
            <p>You have been registered as a student in our college.</p>
            <p>Here are your details:</p>
            <ul>
                <li>Name: ${student.name}</li>
                <li>Age: ${student.age}</li>
                <li>Email: ${student.email}</li>
                <li>Birthday: ${student.birthday}</li>
                <li>Address: ${student.address}</li>
                <li>Contact Number: ${student.contactNumber}</li>
                <li>Roll Number: ${student.rollNumber}</li>
            </ul>
            <p> Please follow this link to complete your registration: <a href="${process.env.FRONTEND_URL}/student/registration/${student._id}">link</a></p>
            <p>Thank you for joining us.</p>
    
            <p>Regards,</p>
            <p>College</p>
        `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (err) {
    console.log(err);
  }
};
