const mongoose = require('./bdd');

var articlesSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    stock: Number,
    weight: Number,
    img: String,
});

const articlesModel = mongoose.model('articles', articlesSchema);

module.exports = articlesModel;