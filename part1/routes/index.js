var express = require('express');
var router = express.Router();
var articlesModel = require('../models/articles');
var ordersModel = require('../models/orders');
var usersModel = require('../models/users');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var indisponibleArticles = await articlesModel.find({stock: 0});

  var unread_messages = await usersModel.findById('5c52e4efaa4beef85aad5e52');
  unread_messages = unread_messages.messages;
  var cmp = 0;
  for(var i = 0; i < unread_messages.length; i++){
    if(unread_messages[i].read == false)
      cmp += 1;
  }
  unread_messages = cmp;

  var uncloture_tasks = await usersModel.findById('5c52e4efaa4beef85aad5e52');
  uncloture_tasks = uncloture_tasks.tasks;
  var cmpTask = 0;
  for(var i = 0; i < uncloture_tasks.length; i++){
    if(uncloture_tasks[i].dateCloture == null)
      cmpTask += 1;
  }
  uncloture_tasks = cmpTask;  

  res.render('index', { indisponibleArticles, unread_messages, uncloture_tasks });
});

/* GET tasks page. */
router.get('/tasks-page', async function(req, res, next) {
  var tasksdata = await usersModel.findById('5c52e4efaa4beef85aad5e52');
  var tasksList = tasksdata.tasks;
  //console.log(tasksList);

  res.render('tasks', { tasksList });
});

/* GET Messages page. */
router.get('/messages-page', async function(req, res, next) {
  var all_messages = await usersModel.findById('5c52e4efaa4beef85aad5e52');
  var messagesTab = all_messages.messages;
  //console.log(all_messages.messages);

  res.render('messages', { messagesTab });
});

/* GET Users page. */
router.get('/users-page', async function(req, res, next) {
  var users = await usersModel.find({status: 'customer'});
  //console.log(users);

  res.render('users', { users });
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
