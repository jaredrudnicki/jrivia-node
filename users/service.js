const dao = require('./users-dao')

module.exports = (app) => {

  const findAllUsers = (req, res) =>
    dao.findAllUsers()
    .then(users => res.json(users));

  app.get("/rest/users", findAllUsers);

  const deleteUser = (req, res) =>
    dao.deleteUser(req.params.id)
    .then((status) => res.send(status));

  app.delete("/rest/users/:id", deleteUser);

  const createUser = (req, res) =>
  dao.createUser(req.body)
    .then((insertedUser) => res.json(insertedUser));

  app.post("/rest/users", createUser);

  const findUsersById = (req, res) =>
  dao.findUsersById(req.params.id)
    .then(tweet => res.json(users));
  
  app.get("/rest/tweets/:id", findUsersById);

  const updateUsers = (req, res) =>
  dao.updateUsers(req.params.id, req.body)
    .then(status => res.send(status));

  app.put("/rest/users/:id", updateUsers);

}
