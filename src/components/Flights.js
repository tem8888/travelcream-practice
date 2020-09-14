import React, {useState, useReducer} from 'react'
import SearchForm from './SearchForm.js'
import FlightList from './FlightsList.js'
import reducer from '../reducer.js'

import flightsJSON from '../data/flights.json'
const flights = Object.values(flightsJSON)

// const imgPath = require.context('../images/hotels',true, /\.(png|jpe?g)$/)
// const hotelsImg = imgPath.keys();

const Flights = () => {

  const [sortType, setSortType] = useState('daysleft') // Поле сортировки полетов (по умолчанию - дней до отправления)
  const [moreFlights, showMoreFlights] = useState(false) // Состояние показа всего списка полетов
  const [inputDeparture, setInputDeparture] = useState('') // значение поля ввода города отправки
  const [inputArrival, setInputArrival] = useState('') // значение поля ввода города прибытия

  const initialFlights = [...flights].sort((a,b) => a[sortType] - b[sortType]) //сортированный список по дефолтному полю

  //function init(initialFlights) { return {initial: initialFlights, filtered: initialFlights} }

  const [stateFlights, dispatch] = useReducer(reducer, {initial: initialFlights, filtered: initialFlights}) // РЕДУСЕР

//{ff: initialFlights, filtered: []}
//const [filterType, setFilterType] = useState('') 
 // useEffect(()=> {
 //  		const sorted = [...flights].sort((a,b) => a[sortType] - b[sortType])
 //  	//	setSortedFlights(sorted)
 //  },[])

//   useEffect(()=> {
//    switch (filterType) {
//       case 'departure': setSortedFlights(flights.filter((flight) => flight.departure.toLowerCase() === inputDeparture.toLowerCase()))
//       break
//       case 'arrival': setSortedFlights(flights.filter((flight) => flight.arrival.toLowerCase() === inputArrival.toLowerCase()))
//       break
//       default: setSortedFlights(flights)
//       break }
//   },[filterType])

	return (
		<section id="flights" className="flights">
    <div className="container">

    	<SearchForm dispatch={dispatch} 
          sortType={sortType} stateFlights={stateFlights}
          inputDeparture={inputDeparture} setInputDeparture={setInputDeparture}
          inputArrival={inputArrival} setInputArrival={setInputArrival}/>

      <div className="section-top">
        <h3 className="section-top__title">Flights</h3>
        <div className="section-top__filter">
          <span 
          		className={sortType === 'daysleft' ? "section-top__item section-top__item--active" : "section-top__item"} 
          		onClick={() => { dispatch({type: 'daysleft', payload: {filtered: stateFlights.filtered}}); setSortType('daysleft')}}>
            Non Stop
          </span>
          <span 
          		className={sortType === 'price' ? "section-top__item section-top__item--active" : "section-top__item"} 
          		onClick={() => {dispatch({type: 'price', payload: {filtered: stateFlights.filtered}}); setSortType('price')}}>
            Best Price
          </span>
        </div>
      </div>
      <div className="flights__table">
      	<div className="flights__header">
      		<div className="flights__header-item">Airline</div>
      		<div className="flights__header-item">Date</div>
      		<div className="flights__header-item">Departure</div>
      		<div className="flights__header-item">Arrival</div>
      		<div className="flights__header-item">Flight Time</div>
      		<div className="flights__header-item">Price</div>
      	</div>
      		{stateFlights.filtered.map((flightInfo,i) => (

      			<FlightList key={i} flight={flightInfo} moreFlights={moreFlights} i={i} />

      		))}
      </div>
      <div className="view-more" onClick={() => showMoreFlights(!moreFlights)}>{moreFlights ? "Minimize" : "See all Flights"}</div>
    </div>
  </section>
     
	)
}

export default Flights