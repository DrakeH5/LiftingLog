const express = require("express");
const app = express();
const Datastore = require("nedb");
var bodyParser = require('body-parser')

const database = new Datastore("users.db");
database.loadDatabase();

app.get("/", (req, res) => {
  res.json("Hello world");
});

app.get("/getUsers", (req, res) => {
  database.find({},(err, data) => {
    if(err){
      res.end(); 
      return;
    }
    res.json(data);
  });
});

app.get("/test", (req, res) => {
  console.log("Hello world");
  res.send("hello world")
});

app.post("/createAccount", bodyParser.json(), (req, res) => {
  console.log("got request")
  database.find({"userName": req.body.userName},(err, data) => {
    if(data.length==0){
      var newUser = {"userName": req.body.userName, "password": req.body.password, "workoutHistory": {}, "dietHistory": {}};
      database.insert(newUser);
      console.log("Account created!")
      res.json("Account created!")
      return;
    }
    console.log("Sorry, account name taken")
    res.json("Sorry, account name taken")
  });
})

app.listen(5000, () => { console.log("Server started on port 5000") })