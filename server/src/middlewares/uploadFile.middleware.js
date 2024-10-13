import multer from "multer";
import path from "path";

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append the file extension
  },
});

// Initialize Multer with storage configuration
const upload = multer({ storage: storage });

// Middleware function to handle both single and multiple uploads
const fileUploadMiddleware = (type, maxCount = 10) => {
  return (req, res, next) => {
    if (type === "single") {
      // Handle single file upload
      upload.single("file")(req, res, (err) => {
        if (err) {
          return res.status(400).send({ message: err.message });
        }
        next();
      });
    } else if (type === "multiple") {
      // Handle multiple file upload
      upload.array("files", maxCount)(req, res, (err) => {
        if (err) {
          return res.status(400).send({ message: err.message });
        }
        next();
      });
    } else {
      res.status(400).send({ message: "Invalid upload type" });
    }
  };
};

export { fileUploadMiddleware };
