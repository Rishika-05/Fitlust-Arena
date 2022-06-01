const express = require('express');
const router = express.Router();
const multer  = require('multer');
const uuidv4 = require('uuid');  
const DIR = './public/';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, DIR);
  },
  filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, uuidv4() + '-' + fileName)
  }
});
const articleController = require('../controllers/articleController');
var upload = multer({ storage: storage });
router.post('/upload',upload.single('image'),articleController.upload)
module.exports = router; 