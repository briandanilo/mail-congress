var request = require('request');
const APIKEY='6e4b602f0f7406192282ef8523883b24'

let url = 'http://api.votesmart.org/Officials.getByZip'
let propertiesObject = {
  key: APIKEY,
  zip5:06897,
  o:'JSON'
}

const cb = function(e,r,b){
  let data = JSON.parse(r.body)
  console.log("data ",data)
}

request({url:url, qs:propertiesObject}, cb);

