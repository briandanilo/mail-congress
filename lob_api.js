var Lob = require('lob')('test_6f19cc578aab5f426a6755afb4cd23bcb7f');
var request = require('request');
var mongodb = require("mongodb")

const DB_URI = 'mongodb://open:open@ds019856.mlab.com:19856/bdtest';
var mongoAddressDB;



exports.retrieveAllAddresses = function() {
  var collection = mongoAddressDB.collection("addresses")
  return collection.find({}).toArray(function(err, items) {
    if (err) console.log("query error ",err)
    console.log("items ",items)
    return items
  })
}

exports.retrieveAddress = function(b) {
  Lob.addresses.retrieve(b.addressId, function (err, res) {
    console.log(err, res);
  });
}

exports.createAddress = function(b) {
  console.log("make address!")
  Lob.addresses.create({
    description: 'Test Address',
    name: b.name,
    company: 'Test Company',
    email: 'Test@Testemail.com',
    phone: '5555555555',
    address_line1: b.addressLine1,
    address_line2: b.addressLine2,
    address_city: b.city,
    address_state: b.state,
    address_zip: b.zip,
    address_country: 'US',
  }, function (err, res) {
    console.log("error: ",err);
    console.log("response: ",res)
  });
}


// Connect to the database before starting the application server.


function queryMongo(db){

  console.log("querying mongo db ",db)
  var collection = mongoAddressDB.collection(db)

  collection.find({ }).toArray(function(err, items) {
    if (err) console.log("query error ",err)
    console.log("items ",items)
    return items
  })
};





// const TEST_KEY = 'test_6f19cc578aab5f426a6755afb4cd23bcb7f'
// const URL = 'https://api.lob.com/'









// let url = URL+'v1/addresses'
// let data = {
//   headers: {
//   },
// }
// let cb = function(e,r,b){
//   console.log("e,r,b",e,r,b)
// }
//
// request(url,data,cb)
