const Article = require('../models/Article');
module.exports.upload = (req, res, next) => {
    var articleObject = JSON.parse(req.body.articleData);
    var imageArray = req.files;
    articleObject.image = imageArray[0].path;
    for (let i = 0; i < articleObject.data.length; i++) {
        articleObject.data[i].image = imageArray[i + 1].path;
    }
    //console.log(articleObject);
    const article = new Article(articleObject);
    article.save((err) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send({ message: "Article Uploaded successfully" });
        }
    })

}
module.exports.retrieve = async (req, res) => {
    try {
        let articles = await Article.find({});
        //console.log(articles);
        res.send({ articles: articles });
    } catch {
        console.log(err.message);
        res.status(500).send("Interal Server Error");
    }
}