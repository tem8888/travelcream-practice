export default function(flights, action){
  switch(action.type) {

    case 'all':
      return {initial: [...flights.initial], filtered: action.payload.filtered.filter((flight) => 
        flight.departure.toLowerCase().includes(action.payload.inputDeparture.toLowerCase()) && 
        flight.arrival.toLowerCase().includes(action.payload.inputArrival.toLowerCase()))}

    case 'departure': 
      return {initial: [...flights.initial], filtered: action.payload.filtered.filter((flight) => 
      	flight.departure.toLowerCase().includes(action.payload.inputDeparture.toLowerCase()))}

    case 'arrival':
      return {initial: [...flights.initial], filtered: action.payload.filtered.filter((flight) => 
      	flight.arrival.toLowerCase().includes(action.payload.inputArrival.toLowerCase()))}

    case 'daysleft':
      return {initial: [...flights.initial], filtered: action.payload.filtered.sort((a,b) => a['daysleft'] - b['daysleft'])}
    case 'price':
      return {initial: [...flights.initial], filtered: action.payload.filtered.sort((a,b) => a['price'] - b['price'])}
    default:
      return flights.initial
	}
}
