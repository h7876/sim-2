const initialState = {
    houses: []
  }
  
  export function addHouse(house){
    return {
      type: ADD_HOUSE,
      payload:house
    }
  }
  
  export function removeHouse(i){
    return {
      type:REMOVE_HOUSE,
      payload:i
    }
  }
  
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_HOUSE:
      return Object.assign({}, state, {houses: [...state.houses, action.payload]});
      case REMOVE_HOUSE:
      return Object.assign({}, state, {houses: state.houses.filter((house, i)=> i !== action.payload)})
    }
    return state;
  }