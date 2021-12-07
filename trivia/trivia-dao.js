const model = require('./trivia-model');

const findAllTrivia = () => model.find().sort({"created_at": -1});

const findTriviaById = (id) =>
    model.find({_id:id});

const createTrivia = (trivia) =>
    model.create(trivia);

const deleteTrivia = (id) =>
    model.deleteOne({_id:id});

const updateTrivia = (id, trivia) =>
    model.updateOne({_id: id},
    {$set: trivia});

module.exports = {
  findAllTrivia, findTriviaById, 
  createTrivia,
  deleteTrivia, updateTrivia
};
