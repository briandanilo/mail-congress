var request = require('request');
var mongodb = require("mongodb")
const APIKEY='6e4b602f0f7406192282ef8523883b24'
const DB_URI = 'mongodb://open:open@ds019856.mlab.com:19856/bdtest';
var db;

mongodb.MongoClient.connect(DB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  } else { console.log("successfully conencted to mongo")}
  db = database

  states.forEach((i)=>{
    propertiesObject.stateId = i
    request({url:url, qs:propertiesObject}, cb);
  })
});

const cb = function(e,r,b){
  let data = JSON.parse(r.body)["candidateList"]["candidate"]
  data.forEach((i)=>{
    console.log("this is a congressman: ",i)
    db.collection("congress_ids").insertOne(i, function(err, doc) {
      if (err) {
        console.log(err.message, "Failed to insert data");
      } else {
        console.log(doc.ops[0]);
      }
    });
  })
}

// function writeToDB(collection, data) {
//   var col = db.collection(collection)
//   col.insertOne(data, function(err, doc) {
//     if (err) {
//       console.log(err.message, "Failed to insert data");
//     } else {
//       console.log(doc.ops[0]);
//     }
//   });
// };

let url = 'http://api.votesmart.org/Officials.getByOfficeTypeState'
let propertiesObject = {
  key: APIKEY,
  //candidateId: 21689,
  //lastName: "Doggett",
  officeTypeId: "C",
  stateId:"NH",
  o:'JSON'
}

const states = [
"AL",
"AK",
"AZ",
"AR",
"CA",
"CO",
"CT",
"DE",
"FL",
"GA",
"HI",
"ID",
"IL",
"IN",
"IA",
"KS",
"KY",
"LA",
"ME",
"MD",
"MA",
"MI",
"MN",
"MS",
"MO",
"MT",
"NE",
"NV",
"NJ",
"NM",
"NY",
"NC",
"ND",
"NH",
"OH",
"OK",
"OR",
"PA",
"RI",
"SC",
"SD",
"TN",
"TX",
"UT",
"VT",
"VA",
"WA",
"WV",
"WI",
"WY"]

//data = JSON.parse(r.body)["candidateList"]["candidate"]
//  console.log("response ",JSON.parse(r.body)["candidateList"]["candidate"])
