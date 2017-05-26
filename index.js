var express = require('express');
var app = express();
var lobapi = require('./lob_api.js');
var bodyParser = require('body-parser')
var path = require('path')
var mongodb = require("mongodb")
var cheerio = require('cheerio');
var request = require('request');

const DB_URI = 'mongodb://open:open@ds019856.mlab.com:19856/bdtest';
var mongoAddressDB;

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'/public')));

//all requests to app will serve react's index.html
app.get('/', function(req, res){
  const index = path.join(__dirname, '/public', 'index.html');
  res.sendFile(index);
});

//NEED TO FIX:
//ONLY RETURNS ONE CLOWN
//EVEN IF ZIP HAS TWO GERRYMANDERED CLOWNS
app.post('/get-address/', function(req, res){

  //we use house.gov's zip lookup feature and scrape the results
  //this gives us that zip's clown
  let url=`http://ziplook.house.gov/htbin/findrep?ZIP=${req.body.zip}&Submit=FIND+YOUR+REP+BY+ZIP`
  const cb = function(e,r,html){
    console.log("hit cb with erhtml ",e,r,html)
    var arr = []
    var $ = cheerio.load(html);
    var t = $('#PossibleReps a').each((i,l)=>{
      if($(l).text()){
        var c = $(l).text()
        c = c.substring(0,c.length-1)
        arr.push(c)
      }
    })
    // search for a match of the above clown in our clown db
    if (arr[0]){
      var x = arr[0].split(" ")
      var fn = x[0]
      var ln = x[x.length-1]
      mongoAddressDB.collection("congress_addy").find({'address.candidate.lastName':ln})
      .toArray(function(e, i){
        i.forEach((j)=>{
          console.log(" j ",j.address.candidate)
          if (fn == j.address.candidate.firstName || fn == j.address.candidate.nickName)
            res.send(j.address)
        })
      })
    } else {
      res.send("this is not a valid zip code")
    }
  }
  request({url:url}, cb);
});

//SCAFFOLDING FOR LOB API
app.post('/lob-api', function(req, res){
  let b = req.body
  let addresses = [];
  if (b.type == "create_address")
    lobapi.createAddress(b)
  else if (b.type == "retrieve_address")
    lobapi.retrieveAddress(b)
  else if (b.type == "retrieve_all_addresses")
    addresses = lobapi.retrieveAllAddresses()
  res.send("you want to do something with lob api")
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//connect to our clown db which has the address of all clowns
mongodb.MongoClient.connect(DB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  mongoAddressDB = database;
  console.log("Database connection ready.");
});
