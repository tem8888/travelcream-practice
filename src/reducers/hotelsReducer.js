export default function(state = {initial: [], filtered: []}, action){
    switch(action.type) {
  
      case 'SORT':
        return {...state, filtered: state.filtered.sort((a,b) => a[action.payload] - b[action.payload])}
      default:
        return state
      }
  }
  