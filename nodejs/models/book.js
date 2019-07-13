const mongoose = require('mongoose');

var Book = mongoose.model('Book',{
    name: {type: String},
    year: {type: Number},
    author: {type: String},
    price: {type: Number},
    ISBN: {type: String}
});

module.exports = { Book };