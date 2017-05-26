export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      addressCart: [],
      letterBody: ""
    };
  }

  switch (action.type) {
    case "GOT_CLOWN_ADDRESS":
      var activeClown = parseClownBio(action.data)
      var activeAddress = parseClownAddresses(action.data)
      return Object.assign({}, state, {activeClown: activeClown}, {activeAddress: activeAddress});
    case "SET_ACTIVE_CLOWN":
      return Object.assign({}, state, {activeAddress: action.a}, {activeClown: action.c});
    case "ADD_TO_CART":
      var newState = Object.assign({},state)
      newState.addressCart.push(action.data)
      return newState;
    case "SUBMIT_CART":
      return Object.assign({},state,{letterBody:"Dear Clown"})
  }

  console.log("Unhandled State!");
  return state;
}


function parseClownBio(data){
  return {
    firstName: data.candidate.firstName,
    lastName: data.candidate.lastName,
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
