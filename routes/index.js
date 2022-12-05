var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/accueil.html', function(req, res, next) {
  res.render('accueil.html');
});
router.get('/campaign.html', function(req, res, next) {
  res.render('campaign.html');
});
router.get('/addScreen.html', function(req, res, next) {
  res.render('addScreen.html');
});
router.get('/addVideo.html', function(req, res, next) {
  res.render('addVideo.html');
});
router.get('/newAccount.html', function(req, res, next) {
  res.render('newAccount.html');
});
router.get('/newCampaign.html', function(req, res, next) {
  res.render('newCampaign.html');
});
router.get('/screenInfo.html', function(req, res, next) {
  res.render('screenInfo.html');
});

module.exports = router;
