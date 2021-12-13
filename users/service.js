const dao = require('./users-dao')
const bcrypt = require('bcrypt-nodejs')

module.exports = (app) => {

  const findAllUsers = (req, res) =>
    dao.findAllUsers()
    .then(users => res.json(users));

  app.get("/rest/users", findAllUsers);

  const deleteUser = (req, res) =>
    dao.deleteUser(req.params.id)
    .then((status) => res.send(status));

  app.delete("/rest/users/:id", deleteUser);

  const createUser = async (req, res) => {
    dao.findUserByName(req.body.username).then(existingUser => {
      if(existingUser.length > 0) {
        res.json({msg: `user already exists`});
      }
    })
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
    dao.createUser(req.body)
      .then((insertedUser) => {
        res.json(insertedUser)
        req.session['currentUser'] = insertedUser;
      });
  }

  app.post("/rest/users", createUser);

  const findUsersById = (req, res) =>
  dao.findUserById(req.params.id)
    .then(users => res.json(users));
  
  app.get("/rest/users/id/:id", findUsersById);

  const findUsersByName = (req, res) =>
  dao.findUserByName(req.params.username)
    .then(users => res.json(users));
  
  app.get("/rest/users/username/:username", findUsersByName);

  const updateUser = (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
  dao.updateUser(req.params.id, req.body)
    .then(status => res.send(status));
  }

  app.put("/rest/users/:user", updateUser);


  const login = (req, res) => {
    dao.findUserByName(req.body.username).then(
      existingUser => {
        if(existingUser.length === 0) return res.json({ msg: `No account with this username found` })
        const validPassword = bcrypt.compareSync(req.body.password, existingUser[0].password);
        if(!validPassword) return res.json({ msg: `Passwords did not match` });

        existingUser[0].password = req.body.password
        res.json({ msg: `logging in`, existingUser })
      }
    )
  }
  app.post('/rest/users/login', login);

}
