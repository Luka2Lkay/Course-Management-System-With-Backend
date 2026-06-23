require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("././src/routes/courseRoutes");
const app = express();
const { connectionStr } = require("./src/config/db_config");

const port = 3300;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "PUT", "DELETE", "POST"],
  }),
);

mongoose
  .connect(connectionStr.db)
  .then(() => {
    console.log("You are connected");
  })
  .catch((error) => {
    console.log("Oops! You are not connected!", error);
  });

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  console.log("MongoDB connection closed due to app termination");
  process.exit(0);
});

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "The Course Management System server is running..." });
});

app.use("/course", courseRoutes);
app.use("/images", express.static("images"));

app.use((err, req, res, next) => {
  console.error("UPLOAD ERROR:", err.message);
  res.status(400).json({ error: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
