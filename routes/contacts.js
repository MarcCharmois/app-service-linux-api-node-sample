var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next) {
  res.sendFile("/data/contacts.json",{ root: "./" });
}) 

module.exports = router;
