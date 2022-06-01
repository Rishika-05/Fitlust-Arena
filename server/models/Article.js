const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type:String,
        require:true,
        unique:true
    },
    image:{
        type:String,
        require:true,
    },
    author:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    brief:{
        type:String,
        required:true,
    },
    data:[
        {
            subtitle:String,
            image:String,
            content:String,
        }
    ],

},{
    timestamps:true,
});
const Article =  mongoose.model('Article',articleSchema);

module.exports = Article;