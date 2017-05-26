/*

This is backup code:

- for handling cases where your zip could have two clowns
- for using votesmart API if we aren't worried about their API rate limit

*/





// THIS RETURNS BOTH CLOWNS
// app.post('/get-address/', function(req, res){
//   console.log("lets get this zip: ",req.body.zip)
//   let url=`http://ziplook.house.gov/htbin/findrep?ZIP=${req.body.zip}&Submit=FIND+YOUR+REP+BY+ZIP`
//   const cb = function(e,r,html){
//     var arr = []
//     var $ = cheerio.load(html);
//     var t = $('#PossibleReps a').each((i,l)=>{
//       if($(l).text()){
//         var c = $(l).text()
//         c = c.substring(0,c.length-1)
//         arr.push(c)
//       }
//     })
//     arr.forEach((i)=>{
//       var x = i.split(" ")
//       var fn = x[0]
//       var ln = x[x.length-1]
//       mongoAddressDB.collection("congress_addy").find({'address.candidate.lastName':ln,'address.candidate.firstName':fn})
//       .toArray(function(e, i){
//         console.log(" ** ",i[0].address," ** ")
//         res.send(i[0].address)
//       })
//     })
//   }
//   request({url:url}, cb);
// });

// GET YOUR REPS WITH VOTESMART
// FOR NOW KEEP AS BACKUP DUE TO VOTESMART API LIMIT
// app.post('/get-address/', function(req, res){
//   const APIKEY='6e4b602f0f7406192282ef8523883b24'
//   let url = 'http://api.votesmart.org/Officials.getByZip'
//   let propertiesObject = {
//     key: APIKEY,
//     zip5:req.body.zip,
//     o:'JSON'
//   }
//   const cb = function(e,r,b){
//     let data = JSON.parse(r.body)
//     res.send(data)
//   }
//   request({url:url, qs:propertiesObject}, cb);
// });
