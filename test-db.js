var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';
 
// Database Name
var dbName = 'sms-data';
var collectionName = 'sms-data';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
 
  var db = client.db(dbName);
  var collection = db.collection(collectionName);

  var search = {start_date:{}, end_date:{}};
  search['start_date'].$gt =new Date("12/13/2014");
  search['end_date'].$lt =new Date("12/13/2014");


  collection.find().forEach(function(el){
      el.start_date = new Date(el.start_date);
      el.end_date = new Date(el.end_date);
      collection.save(el)
  });
  console.log("String date convert to mongodb DateTime Object");

  // Sample Search
  collection.find(search).toArray(function (err, docs) {    
          console.log(docs.length)
    })

});