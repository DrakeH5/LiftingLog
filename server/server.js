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
      var newUser = {"userName": req.body.userName, "password": req.body.password, "workoutHistory": [], "dietHistory": []};
      database.insert(newUser);
      console.log("Account created!")
      res.json("Account created!")
      return;
    }
    console.log("Sorry, account name taken")
    res.json("Sorry, account name taken")
  });
})

app.post("/loginToAccount", bodyParser.json(), (req, res) => {
  console.log("got request")
  database.find({"userName": req.body.userName},(err, data) => {
    if(data.length>0){
        if(data[0]["password"]==req.body.password){
        console.log("Logged in!")
        res.json("success")
        return;
      } else {
        console.log("Sorry, password did not match")
        res.json("Sorry, password did not match")
      }
    } else {
      console.log("Sorry, could not find your account")
      res.json("Sorry, could not find your account")
    }
  });
})


app.post("/getDietHistory", bodyParser.json(), (req, res) => {
  database.find({"userName": req.body.userName},(err, data) => {
    if(data.length>0){
        res.send(data[0]["dietHistory"])
    } else {
      res.json("Error")
    }
  });
})

app.post("/addToDietHistory", bodyParser.json(), (req, res) => {
        database.update({ userName: req.body.userName }, { $push: { dietHistory: req.body.foodData } }, {}, function () {

        });       
})


app.post("/getWorkoutHistory", bodyParser.json(), (req, res) => {
  database.find({"userName": req.body.userName},(err, data) => {
    if(data.length>0){
        res.send(data[0]["workoutHistory"])
    } else {
      res.json("Error")
    }
  });
})


app.listen(5000, () => { console.log("Server started on port 5000") })