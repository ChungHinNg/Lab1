// <!--  File name: assignment1
// Student ID: 301236167
// Name: Chung Hin Ng
// Data: Oct 07, 2022 -->
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let bodyParser = require('body-parser');
let session = require('express-session');
let flash = require('connect-flash');
let passport = require('passport');

//router set
var indexRouter = require('../routes/index');
var usersRouter2 = require('../routes/contact');
var businessContacts = require('../routes/businessContacts.router');
let usersRouter = require('../routes/users');


var app = express();
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: "sessionSecret"
}));

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));
app.use('/public/', express.static('./public'));

// Sets up passport
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//router use
app.use('/', indexRouter);
app.use('/contact', usersRouter2);
app.use('/businessContacts', businessContacts);
app.use('/users', usersRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
