const Course = require("../models/course");

exports.createCourse = async (req, res) => {
  try {
    const { course, description, modules, duration, availability } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image file is required" });
    }

    const imageUrl = "https://course-management-system-with-backe.vercel.app/" + req.file.filename;

    const courseInfo = new Course({
      course,
      description,
      modules,
      duration,
      availability,
      imageUrl,
    });

    const savedCourse = await courseInfo.save();
    return res.status(201).json(savedCourse);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getAllCourses = async (_req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCourseById = async (req, res) => {
  const id = req.params.id;

  try {
    const courses = await Course.findById(id);
    if (!courses) {
      return res.status(404).json({ error: "the course does not exist" });
    }

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCourseBytId = async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: "Changes made successfully", data: updatedCourse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCourseById = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAllCourses = async (req, res) => {
  try {
    await Course.deleteMany({}, req.body);
    res.status(200).json({ message: "Removed all courses!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};