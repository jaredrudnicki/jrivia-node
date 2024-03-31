const dao = require('./trivia-dao')

module.exports = (app) => {

  const findAllTrivia = (req, res) => {
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip) || 0;
    if (limit) {
      dao.findXTrivia(limit, skip)
      .then(trivia => res.send(trivia));
    } else {
      dao.findAllTrivia()
      .then(trivia => res.json(trivia));
    }
  }

  app.get("/rest/trivia", findAllTrivia);


  const deleteTrivia = (req, res) =>
    dao.deleteTrivia(req.params.id)
    .then((status) => res.send(status));

  app.delete("/rest/trivia/:id", deleteTrivia);

  const createTrivia = (req, res) =>
  dao.createTrivia(req.body)
    .then((insertedTrivia) => res.json(insertedTrivia));

  app.post("/rest/trivia", createTrivia);

  const findTriviaById = (req, res) =>
  dao.findTriviaById(req.params.id)
    .then(trivia => res.json(trivia));
  
  app.get("/rest/trivia/id/:id", findTriviaById);


  const findTriviaByQuestion = (req, res) =>
  dao.findTriviaByQuestion(req.params.question)
    .then(trivia => res.json(trivia));
  
  app.get("/rest/trivia/question/:question", findTriviaByQuestion);

  const findTriviaByCategory = (req, res) =>
  dao.findTriviaByCategory(req.params.category)
    .then(trivia => res.json(trivia));
  
  app.get("/rest/trivia/category/:category", findTriviaByCategory);

  const findTriviaByOwner = (req, res) =>
  dao.findTriviaByOwner(req.params.owner)
    .then(trivia => res.json(trivia));
  
  app.get("/rest/trivia/owner/:owner", findTriviaByOwner);

  const updateTrivia = (req, res) =>
  dao.updateTrivia(req.params.id, req.body)
    .then(status => res.send(status));

  app.put("/rest/trivia/:id", updateTrivia);

  const updateTriviaTally = (req,res) =>
  dao.updateTriviaTally(req.params.id, req.body.correct_count, req.body.incorrect_count)
    .then(status => res.send(status));

  app.put("/rest/trivia/tally/:id", updateTriviaTally);

}
