import fakeC from '../fake_congressman.js'
import fakeA from '../fake_address.js'

export default function getClownAddress (zip) {

  return function (dispatch) {

    dispatch( { type: "STARTING_LOAD_ADDRESS_CALL" });
    console.log("getting this zip code: ",zip)
    return  $.ajax({
      url: '/get-address',
      contentType: 'application/json',
      method: 'POST',
      data: JSON.stringify({
        zip: zip
      })
    }).then(function (res) {
      console.log("response ",res)
      dispatch( { type: "GOT_CLOWN_ADDRESS", data:res });
    })
   }
}
