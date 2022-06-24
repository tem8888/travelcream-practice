export default function(state = {initial: [], filtered: []}, action){
  switch(action.type) {

    case 'FILTER':
      const filters = action.payload

      return {...state, filtered: state.initial.filter((flight) => {
        for (let key in filters) {
          if (!flight[key]) {
            return false
          } 
          else if (key === 'date' && filters[key] !== '') {
            const yymmdd = filters[key].split('-')
            const formatDate = `${yymmdd[1]}/${yymmdd[2]}/${yymmdd[0]}`
            if (!flight[key].includes(formatDate)) {
              return false
            }
          } 
          else if (filters[key] !== '' && !flight[key].toLowerCase().includes(filters[key]?.toLowerCase())) {
            return false
          } 
        }
        return true
      })}

    case 'SORT':
      return {...state, filtered: state.filtered.sort((a,b) => a[action.payload] - b[action.payload])}
    default:
      return state
	}
}
