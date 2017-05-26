var request = require('request');
var mongodb = require("mongodb")
const APIKEY='6e4b602f0f7406192282ef8523883b24'
const DB_URI = 'mongodb://open:open@ds019856.mlab.com:19856/bdtest';
var collection;

mongodb.MongoClient.connect(DB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  } else { console.log("successfully conencted to mongo")}

  collection = database.collection("congress_ids");
  collection.find({}).toArray(function(err, items) {
    collection = database.collection("congress_addy")
    items.forEach((i)=>{
      propertiesObject.candidateId = i.candidateId;
      request({url:url, qs:propertiesObject}, cb);
    })
  })
});

var propertiesObject = {
  key: APIKEY,
  candidateId: 21689,
  o:'JSON'
}
let url = 'http://api.votesmart.org/Address.getOffice'

const cb = function(e,r,b){
  if (r.body){
    let data = JSON.parse(r.body)
    collection.insertOne(data, function(err, doc) {
      if (err) {
        console.log(err.message, "Failed to insert data");
      } else {
        console.log(doc.ops[0]);
      }
    });
  }
}
