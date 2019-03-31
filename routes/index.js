var express = require('express');
var router = express.Router();
var request = require('request');
var Storage = require('../storage');
var _ = require('underscore');
require('dotenv').config();

router.get('/', function(req, res, next) {
    
    res.render('index', {
        page: 'main'
    });
});

router.get('/api/sms', function(req, res, next) {
    var startDate = Date.parse(req.query.s);
    var endDate = Date.parse(req.query.e);
    
    var filterData = _.filter(Storage.JSON(), function (data) { return (Date.parse(data.start_date) >= startDate && Date.parse(data.end_date) <= endDate); });
    res.json(filterData)
});

module.exports = router;
