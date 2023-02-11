const express = require("express");
const app = express();
const Datastore = require("nedb");

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

/*app.get("/createAccount", (req, res) => {
  const data = {"userName": req, "password": req., "workoutHistory": {}, "dietHistory": {}};
  database.insert(data);
})*/

app.listen(5000, () => { console.log("Server started on port 5000") })