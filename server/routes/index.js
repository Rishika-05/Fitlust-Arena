const express = require('express');
const router = express.Router();
const multer = require('multer');
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
const planController = require('../controllers/planController');
var uploads = multer({ storage: storage });
router.post('/upload', uploads.array('imageData',12), articleController.upload);
router.get('/retrieve',articleController.retrieve);
router.get('/getarticles/:type',articleController.getArticles);
router.get('/articles/:id',articleController.getArticle);
router.post('/custom-plan',planController.createPlan);
module.exports = router;