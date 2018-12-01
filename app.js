var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const fs = require('fs')

var indexRouter = require("./routes/index");
//var dataRouter = require('./routes/data');
var dataRouter = require("./routes/maria");
var formRouter = require("./routes/form");
var app = express();

// authentication read token from file
let apptoken;
fs.readFile('./token.txt', (err, data) => {
  if (err) throw err;
  apptoken= data.toString();
});



// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// authentication
app.post('*',function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    if(token !== apptoken){
        return res.json({ success: false, message: 'Failed to authenticate token.' });       
      } else {
        // if everything is good, save to request for use in other routes
       next();
      }
    }
   else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
  }
});

app.use("/data/", dataRouter);
app.use("/form/", formRouter);
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;



