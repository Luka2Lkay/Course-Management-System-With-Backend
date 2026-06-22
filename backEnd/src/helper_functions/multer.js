const multer = require("multer");
const cloudinary = require("../config/cloudinary_config");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Verify Cloudinary is properly configured
if (!cloudinary.config().cloud_name) {
  throw new Error("Cloudinary is not properly configured. Check your .env file for CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET");
}

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "course-management",
    format: async (req, file) => {
      const mimeType = file.mimetype.split('/')[1];
      return ['jpeg', 'png', 'gif', 'webp'].includes(mimeType) ? mimeType : 'png';
    },
    public_id: (req, file) => {
      const timestamp = Date.now();
      const name = file.originalname.replace(/\.[^/.]+$/, "");
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
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

console.log('✓ Multer configured with Cloudinary storage');

module.exports = { upload };
