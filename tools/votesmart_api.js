var request = require('request');
const APIKEY='6e4b602f0f7406192282ef8523883b24'

let cb = function(e,r,b){
  console.log("response ",JSON.parse(r.body)["candidateList"])

}


//let url = 'http://api.votesmart.org/Officials.getByLastname'
//officeid:5 == congress
//daggett cadidate id == 21689
let url = 'http://api.votesmart.org/Officials.getByOfficeTypeState'
//let url =
//let url = 'http://api.votesmart.org/Candidates.getByLastname'
//let url = 'http://api.votesmart.org/Address.getOffice'
let propertiesObject = {
  key: APIKEY,
  candidateId: 21689,
  //lastName: "Doggett",
  officeTypeId: "C",
  stateId:"AK",
  o:'JSON'
}

request({url:url, qs:propertiesObject}, cb);

//request(url,data,cb)
