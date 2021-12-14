const model = require('./users-model');

const findAllUsers = () => model.find().sort({"created_at": -1});

const findUserById = (id) =>
    model.find({_id:id});

const findUserByName = (username) =>
    model.find({username: username});

const createUser = (user) =>
    model.create(user);

const deleteUser = (id) =>
    model.deleteOne({_id:id});

const updateUser = (id, password) =>
    model.updateOne({_id: id},
    {$set: {password: password}});

const bookmarkTrivia = (id, favoriteTrivias) =>
    model.updateOne({_id: id},
        {$set: {favorite_trivia_ids: favoriteTrivias}});

const updateUserTally = (id, correctCnt, incorrectCnt) =>
    model.updateOne({_id: id}, 
        {$set: {
            correct_tally: correctCnt,
            incorrect_tally: incorrectCnt
        }});

module.exports = {
  findAllUsers, findUserById,
  findUserByName, createUser,
  deleteUser, updateUser,
  bookmarkTrivia, updateUserTally
};

    