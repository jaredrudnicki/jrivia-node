const model = require('./trivia-model');

const findAllTrivia = () => model.find().sort({"created_at": -1});

const findTriviaById = (id) =>
    model.find({_id:id}).sort({"created_at": -1});

const findTriviaByQuestion = (question) =>
    model.find({question : {$regex : question}}).sort({"created_at": -1});
    

const findTriviaByCategory = (category) =>
    model.find({category:category}).sort({"created_at": -1});

const findTriviaByOwner = (owner) => 
    model.find({question_owner:owner}).sort({"created_at": -1});

const createTrivia = (trivia) =>
    model.create(trivia);

const deleteTrivia = (id) =>
    model.deleteOne({_id:id});

const updateTrivia = (id, trivia) =>
    model.updateOne({_id: id},
    {$set: trivia});

const updateTriviaTally = (id, correctCnt, incorrectCnt) =>
    model.updateOne({_id: id}, 
        {$set: {
            correct_count: correctCnt,
            incorrect_count: incorrectCnt
        }});

module.exports = {
  findAllTrivia, findTriviaById, 
  findTriviaByQuestion, findTriviaByCategory, findTriviaByOwner,
  createTrivia, deleteTrivia, updateTrivia, updateTriviaTally
};
