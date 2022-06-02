const Article = require('../models/Article');
const multer = require('multer')
var upload = multer({ dest: 'uploads/' });
module.exports.upload = (req, res, next) => {
    console.log(req.body);
    console.log(req.file);
    console.log(req.files);
    res.status(200).send({ message: "recived" });
}