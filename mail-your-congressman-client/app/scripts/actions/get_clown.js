import fakeC from '../fake_congressman.js'
import getClownAddress from './get_clown_address.js'
import fakeA from '../fake_address.js'

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
