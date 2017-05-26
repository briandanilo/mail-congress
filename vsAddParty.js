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
  collection.find({}).toArray((err, items)=>{
    items.forEach((i)=>{
      //console.log("i ",i.firstName)
      database.collection("congress_addy").update(
        { "address.candidate.lastName":i.lastName,"address.candidate.firstName":i.firstName },
        { $set : { "address.candidate.party":i.officeParties,"address.candidate.state":i.officeStateId } },
        { new: true }
      )
      // .toArray((err,it)=>{
      //   console.log("err,it ",err,it)
      // })
      // database.collection("congress_addy").findAndModify({
      //   query: { 'firstName': i.firstName, 'lastName':i.lastName },
      //   update: { 'party': i.officeParties },
      //   upsert: true
      // })
    })
  })
});
