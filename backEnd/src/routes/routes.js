const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course_controller.js");
const { upload } = require("../helper_functions/multer.js");

router.post("/create", upload.single("file"), courseController.createCourse);

router.get("/", courseController.getAllCourses);

router.patch("/:id", upload.single("file"), courseController.updateCourseBytId);

router.delete("/:id", courseController.deleteCourseById);

router.delete("/remove", courseController.deleteAllCourses);

module.exports = router;
