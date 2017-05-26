export default function lobApi (d) {

  return function (dispatch) {

    dispatch( { type: "STARTING_LOB_CALL" });
    console.log("post this data ",d)

    return  $.ajax({
      url: '/lob-api',
      contentType: 'application/json',
      method: 'POST',
      data: JSON.stringify(d)
    }).then(function (response) {
      dispatch( { type: "ENDING_LOB_CALL" });
    })
  }
}
