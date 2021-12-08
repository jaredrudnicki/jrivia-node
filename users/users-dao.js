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

const updateUser = (id, user) =>
    model.updateOne({_id: id},
    {$set: user});

module.exports = {
  findAllUsers, findUserById,
  findUserByName, createUser,
  deleteUser, updateUser
};

    