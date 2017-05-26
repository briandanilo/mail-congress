export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      addressCart: [],
      letterBody: "",
      readyToCheckout: false
    };
  }

  switch (action.type) {
    case "GOT_CLOWN_ADDRESS":
      var activeClown = parseClownBio(action.data)
      var activeAddress = parseClownAddresses(action.data)
      var newState = Object.assign({}, state, {activeClown: activeClown}, {activeAddress: activeAddress});
      newState.addressCart = []
      newState.letterBody = ""
      return newState
    case "ADD_TO_CART":
      var newState = Object.assign({},state)
      newState.addressCart.push(action.data)
      return newState
    case "SUBMIT_CART":
      return Object.assign({},state,{letterBody:"Dear Clown"})
    case "SUBMIT_LETTER_BODY":
      var newState = Object.assign({},state)
      newState.letterBody = action.data.letterBody
      newState.readyToCheckout = true
      return newState;
  }

  console.log("Unhandled State!");
  return state;
}


function parseClownBio(data){
  return {
    firstName: data.candidate.firstName,
    lastName: data.candidate.lastName,
    party: data.candidate.party,
    state: data.candidate.state
  }
}

function parseClownAddresses(data){
  return data.office.map((i)=>{
      return {
        type: i.address.type,
        street: i.address.street,
        city: i.address.city,
        state: i.address.state,
        zip: i.address.zip,
      }
  })
}
