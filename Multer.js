const multer = require('multer');

// Create a storage engine for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name as the stored file name
  }
});

// Create an instance of Multer with the storage engine configuration
const upload = multer({ storage: storage });

module.exports = {
  upload: upload
};
