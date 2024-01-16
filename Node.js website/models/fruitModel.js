const mongoose = require('mongoose');

const fruitSchema = mongoose.Schema({
    fruitname: {
        type: String,
    },
    name: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('Hero', fruitSchema);