const express = require("express");

const {
  createCourse,
  updateCourse,
  deleteAllCourses,
  getAllCourses,
  deleteCourse,
} = require("../controllers/course_controller.js");
const { upload } = require("../helper_functions/multer.js");

const courseRoutes = (app) => {
  const router = express.Router();
  router.post("/", upload.single("file"), createCourse);

  router.get("/", getAllCourses);

  router.patch("/:id", upload.single("file"), updateCourse);

  router.delete("/:id", deleteCourse);

  router.delete("/", deleteAllCourses);

  app.use("/api/courses", router);
};

module.exports = {courseRoutes}
