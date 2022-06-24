export default function(state = {initial: [], filtered: []}, action){
    switch(action.type) {
  
      case 'FILTER':
        return {...state, filtered: state.initial.filter((attraction) => attraction.type === action.payload)}
      case 'DEFAULT':
        return {...state, filtered: state.initial}
      default:
        return state
      }
  }
  