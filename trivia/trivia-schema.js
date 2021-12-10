const mongoose = require('mongoose');
const schema = mongoose.Schema({
  created_at : { type: Date, required: true, default: Date.now },
  category: String,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: {type: String, requiured:true},
  incorrect_answers: {type:[String], required:true},
  correct_count: {type: Number, required: true, default: 0},
  incorrect_count: {type: Number, required: true, default: 0},
  question_owner: {type: String, required: true, default: "external"}
}, {collection: "trivia"});
module.exports = schema;
