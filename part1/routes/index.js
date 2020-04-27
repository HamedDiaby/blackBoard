var express = require('express');
var router = express.Router();
var articlesModel = require('../models/articles');
var ordersModel = require('../models/orders');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET tasks page. */
router.get('/tasks-page', function(req, res, next) {
  res.render('tasks');
});

/* GET Messages page. */
router.get('/messages-page', function(req, res, next) {
  res.render('messages');
});

/* GET Users page. */
router.get('/users-page', function(req, res, next) {
  res.render('users');
});

/* GET Catalog page. */
router.get('/catalog-page', async function(req, res, next) {
  var articles = await articlesModel.find();
  //console.log(articles);

  res.render('catalog', {articles});
});

/* GET Orders-list page. */
router.get('/orders-list-page', async function(req, res, next) {
  var ordersList = await ordersModel.find();
  //console.log(ordersList);

  res.render('orders-list', {ordersList});
});

/* GET Order detail page. */
router.get('/order-page', async function(req, res, next) {
  var id = req.query.id;
  var order = await ordersModel.findById(id).populate('articles');

  res.render('order', { order });
});

/* GET chart page. */
router.get('/charts', function(req, res, next) {
  res.render('charts');
});



module.exports = router;
