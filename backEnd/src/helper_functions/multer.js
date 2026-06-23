const multer = require("multer");
const cloudinary = require("../config/cloudinary_config");
const { CloudinaryStorage } = require("multer-storage-cloudinary");


console.log("I am in multer")

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "course-management",
    format: async (req, file) => {
      const mimeType = file.mimetype.split("/")[1];
      return ["jpeg", "png", "gif", "webp"].includes(mimeType)
        ? mimeType
        : "png";
    },
    public_id: (req, file) => {
      const timestamp = Date.now();
      const name = file.originalname.split(".")[0]
      const cleanName = name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g,"")
      return `${name}-${timestamp}`;
    },
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

module.exports = { upload };
