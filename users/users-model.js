const mongoose = require('mongoose');
const schema = require('./users-schema');
const model = mongoose.model('UserModel', schema);
module.exports = model;
