const model = require('./trivia-model');

const findAllTrivia = () => model.find().sort({"created_at": -1});

const createTrivia = (tweet) =>
    model.create(tweet);

const deleteTrivia = (id) =>
    model.deleteOne({_id:id});

const updateTrivia = (id, tweet) =>
    model.updateOne({_id: id},
    {$set: tweet});

module.exports = {
  findAllTrivia, createTrivia,
  deleteTrivia, updateTrivia
};
