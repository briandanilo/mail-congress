var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

//const APIKEY='6e4b602f0f7406192282ef8523883b24'
//var mongodb = require("mongodb")
//const DB_URI = 'mongodb://open:open@ds019856.mlab.com:19856/bdtest';
//var collection;

// var propertiesObject = {
//   key: APIKEY,
//   zip5: 20024,
//   o:'JSON'
// }

//let url = 'http://api.votesmart.org/Candidates.getByZip'

//scrape gov site
let url='http://ziplook.house.gov/htbin/findrep?ZIP=06897&Submit=FIND+YOUR+REP+BY+ZIP'

const cb = function(e,r,b){
  //console.log("error ",e)
  console.log("response ",r.body)
}

//request({url:url, qs:propertiesObject}, cb);
request({url:url}, cb);
