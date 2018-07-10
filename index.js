var express = require("express");
const path = require('path')
var app = express();

// const {Pool} = require("pg");
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set("port", (process.env.PORT || 3000));

app.get('/', (req, res) => res.render('pages/index'));
app.get("/home", (req, res) => res.render('pages/index'));
app.get("/addCourse", addCourse);
app.get("/registerUser", (req, res) => res.render('pages/register'));
app.get("/registerCourse", registerCourse);
app.get("/course", course);
app.get("/myCourses", myCourses);

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

function myCourses(req, res) {

}
