const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const {upload} = require("../helper_functions/helper_functions")

router.post("/create", courseController.createCourse);

router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);

router.put("/:id", courseController.updateCourseBytId);

router.delete("/:id", courseController.deleteCourseById);

router.delete("/remove", courseController.deleteAllCourses);

module.exports = router;
