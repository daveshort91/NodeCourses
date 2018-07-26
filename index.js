var express = require("express");
var app = express();

const path = require('path');


const pg = require('pg');
const pool = new pg.Pool({
  user: 'nodecourseuser',
  host: 'localhost',
  database: 'nodecourses',
  password: 'passpass',
  port: '5432'});

pool.query("SELECT NOW()", (err, res) => {
    console.log(err, res);
    pool.end();
});



//you can supply a custom client constructor
//if you want to use the native postgres client
// var NativeClient = require('pg').native.Client;
// var nativePool = new Pool({ Client: NativeClient })

//you can even pool pg-native clients directly
// var PgNativeClient = require('pg-native');
// var pgNativePool = new Pool({ Client: PgNativeClient })




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
app.get("/addUser", addUser);

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

function addUser(req, res) {

}

function registerCourse(req, res) {
  console.log("Register a course");
}

function course(req, res) {
  console.log("this is a course");
}

function myCourses(req, res) {

}
