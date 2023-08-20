const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});