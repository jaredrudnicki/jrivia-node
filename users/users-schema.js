const mongoose = require('mongoose');
const schema = mongoose.Schema({
  created_at : { type: Date, required: true, default: Date.now },
  user_type: String,
  username: String,
  password: String,
  favorite_trivia_ids: {type: [String], required: true, default: []},
  correct_tally: {type: Number, required: true, default: 0},
  incorrect_tally: {type: Number, required: true, default: 0},
}, {collection: "users"});
module.exports = schema;
