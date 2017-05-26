//i just use this for dev when i don't have interent

import fakeC from '../models/fake_congressman.js'
import fakeA from '../models/fake_address.js'

export default function getClown (d) {

  return function (dispatch) {

    console.log("address ",fakeA)
    dispatch({ type: "SET_ACTIVE_CLOWN", a:fakeA.address, c: fakeC.congressman });

    // return  $.ajax({
    //   url: '/get-address',
    //   contentType: 'application/json',
    //   method: 'GET',
    //   data: JSON.stringify(d)
    // }).then(function (res) {
    //   console.log("response ",res)
    //   dispatch( { type: "GOT_ADDRESSES" });
    // })
  }
}
