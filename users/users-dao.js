const model = require('./users-model');

const findAllUsers = () => model.find().sort({"created_at": -1});

const createUser = (user) =>
    model.create(user);

const deleteUser = (id) =>
    model.deleteOne({_id:id});

const updateUser = (id, user) =>
    model.updateOne({_id: id},
    {$set: user});

module.exports = {
  findAllUsers, createUser,
  deleteUser, updateUser
};
