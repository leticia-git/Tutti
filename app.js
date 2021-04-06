var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var loginRouter = require('./routes/login');
var recipesRouter = require('./routes/recipes');
var usRouter = require('./routes/us');
var contactRouter = require('./routes/contact');
var registerRouter = require('./routes/user');
var frutaRouter = require('./routes/fruta');
var legumesRouter = require('./routes/legumes');
var verdurasRouter = require('./routes/verduras');
var mercadoARouter = require ('./routes/mercadoA');
var mercadoBRouter = require ('./routes/mercadoB');
var mercadoCRouter = require ('./routes/mercadoC');
var cartRouter = require ('./routes/cart');
var checkoutRouter = require ('./routes/checkout');
var confirmationRouter = require ('./routes/confirmation');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'projeto-node-fs12',
  resave: true,
  saveUninitialized: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/recipes', recipesRouter);
app.use('/us', usRouter);
app.use('/users', userRouter);
app.use('/contact', contactRouter);
app.use('/fruta', frutaRouter);
app.use('/legumes', legumesRouter);
app.use('/verduras', verdurasRouter);
app.use('/mercadoA', mercadoARouter);
app.use('/mercadoB', mercadoBRouter);
app.use('/mercadoC', mercadoCRouter);
app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);
app.use('/confirmation', confirmationRouter);
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
