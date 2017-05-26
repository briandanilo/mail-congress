var express = require('express');
//var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

let url='http://ziplook.house.gov/htbin/findrep?ZIP=78704&Submit=FIND+YOUR+REP+BY+ZIP'

const cb = function(e,r,html){
  var arr = []
  var $ = cheerio.load(html);
  var t = $('#PossibleReps a').each((i,l)=>{
    if($(l).text()) arr.push($(l).text())
  })

  console.log("clowns ",arr)
}

request({url:url}, cb);
