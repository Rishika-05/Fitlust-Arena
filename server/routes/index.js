const express = require('express');
const router = express.Router();
const multer = require('multer');
const uuidv4 = require('uuid');
const DIR = './public';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;
    cb(null, Date.now() + '-' + fileName)
  }
});
const articleController = require('../controllers/articleController');
var uploads = multer({ storage: storage });
router.post('/upload', uploads.single('image'), articleController.upload)
module.exports = router;
//.toLowerCase().split(' ').join('-')