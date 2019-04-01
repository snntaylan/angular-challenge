var express = require('express');
var router = express.Router();
var request = require('request');
var Storage = require('../storage');
var _ = require('underscore');
var MongoClient = require('mongodb').MongoClient;

require('dotenv').config();

var url = 'mongodb://localhost:27017';
 
// Database Name
var dbName = 'sms-data';

router.get('/', function(req, res, next) {
    
    res.render('index', {
        page: 'main'
    });
});

router.get('/api/sms', function(req, res, next) {
    var startDate = Date.parse(req.query.s);
    var endDate = Date.parse(req.query.e);
    
    var search = {start_date:{}, end_date:{}};
    search['start_date'].$gt =new Date(startDate);
    search['end_date'].$lt =new Date(endDate);

        // Use connect method to connect to the server
        MongoClient.connect(url, function(err, client) {
            console.log("Connected successfully to server");
        
            var db = client.db(dbName);

            var collection = db.collection('sms-data');
            collection.find(search).toArray(function (err, docs) {    
                    console.log("Search result", docs.length)
                    res.json(docs)
            })
        });
});

module.exports = router;
