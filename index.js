var express = require("express");
var app = express();

const {Pool} = require("pg");

app.set("port", (process.env.PORT || 3000));

app.get("/home", home);
app.get("/addCourse", addCourse);
app.get("/registerUser", registerUser);
app.get("/registerCourse", registerCourse);
app.get("/course", course);

app.listen(app.get("port"), function(){
  console.log("Listening on port:", app.get("port"));
});

function home(req, res){
  console.log("homepage");
}

function addCourse(req, res) {
  console.log("add a course");
}

function registerUser(req, res) {
  console.log("register a user");
}

function registerCourse(req, res) {
  console.log("Register a course");
}

function course(req, res) {
  console.log("this is a course");
}
