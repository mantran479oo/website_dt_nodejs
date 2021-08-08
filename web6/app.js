var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var flush = require('connect-flash');
const newRouter = require('./router/page/index');
const newCatalog= require('./router/page/catalog');
const newProduct = require('./router/page/product');
const newUser = require('./router/page/user');
var modelindex = require('./router/admin/indexs');
var modeluser = require('./router/admin/users');
var modelregister = require('./router/admin/registers');
var modelproducts = require('./router/admin/products');



var app = express();
// view engine setup
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flush());
app.use(session({
  secret: 'abcdefg',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 1200000 }
}));
app.use('/',newRouter);
app.use('/user',newUser);
app.use('/shop',newProduct);
app.use('/cart',newCatalog);
app.use('/',modelindex);
app.use('/users',modeluser);
app.use('/register',modelregister);
app.use('/products',modelproducts);
module.exports = app;


