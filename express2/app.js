var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//agregando directorio views de views
app.set('view engine', 'hbs');//agregando directorio view engine de

//Middleware
app.use(logger('dev'));//utiliza una biblioteca para agregar plugins
app.use(express.json());//utilizar un formato json
app.use(express.urlencoded({ extended: false }));//para codificacion de url
app.use(cookieParser());//automatizacion de cookies
//es un middelware para recursos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//middelwares para rutas
app.use('/', indexRouter);
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
