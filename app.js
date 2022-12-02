var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mangoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var cons = require('consolidate')

mangoose.connect('mongodb://jacobi-test-server:4SWaWGVEAP8lIl1j707x8cv1kIaN6StERsBHBeEYasnfW20lnQgBYKGAH96ooau7u0KLp1S73oVhACDb4mMFRw==@jacobi-test-server.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@jacobi-test-server', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
()=>console.log('connected to db')); 

app. engine('html', cons.swig)
// view engine setup
 app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html'); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler


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
