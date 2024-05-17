const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("././src/routes/courseRoutes");
const app = express();
const {connectionStr} = require("./src/config/db_config")

const port = 3300;
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})


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

app.get("/" ,(req ,res) =>{
  res.json({message:"Course Management System"})
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
