const mongoose = require('mongoose');
const schema = require('./trivia-schema');
const model = mongoose.model('TriviaModel', schema);
module.exports = model;
