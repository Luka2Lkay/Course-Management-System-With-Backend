const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("././src/routes/courseRoutes");
const app = express();
const {connectionStr} = require("./src/config/db_config")

const port = 3300;
app.use(express.json());
app.use(cors());

mongoose
  .connect(connectionStr.db)
  .then(() => {
    console.log("You are connected");
  })
  .catch((error) => {
    console.log("Oops! You are not connected!", error);
  });

app.use("/course", courseRoutes);
app.use("/images", express.static("images"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
