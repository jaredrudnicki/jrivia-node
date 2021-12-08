const express = require('express');
const app = express();

//connect to remote database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://db:e$_8au8fY-iV!Gm@cluster0.gcs56.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });

  require('./trivia/service')(app);
  require('./users/service')(app);

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(4000);
//const port = process.env.PORT || 3000
//app.listen(port, "0.0.0.0", function () {
//  console.log("Listening on Port 4000");
//});