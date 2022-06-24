import React, {useState, useReducer, createRef} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './Flights.sass'
import SearchForm from './SearchForm.js'
import SectionHeader from '../_SectionHeader/SectionHeader'
import ViewMoreButton from '../_ViewMoreButton/ViewMoreButton'
import FlightCard from './FlightCard.js'
import reducer from '../../reducers/flightsReducer.js'

import flightsJSON from '../../data/flights.json'
const FLIGHTS_TO_SHOW = 5
const flightsSortData = [
  {
    id: 'daysleft',
    name: 'Non Stop'
  },
  {
    id: 'price',
    name: 'Price'
  },
]

const Flights = () => {

  const [activeLink, setActiveLink] = useState('daysleft') // Поле сортировки полетов (по умолчанию - дней до отправления)
  const [showAllFlights, setShowAllFlights] = useState(false) // Состояние показа всего списка полетов
  const [search, setSearch] = useState({departure: '', arrival: '', date: ''})

  const initialFlights = Object.values(flightsJSON).sort((a,b) => a[activeLink] - b[activeLink]) //сортированный список по дефолтному полю
  const [flightsList, dispatch] = useReducer(reducer, {initial: initialFlights, filtered: initialFlights}) // РЕДУСЕР

  const handleSortFlights = (key) => {
    dispatch({type: 'SORT', payload:  key}) 
    setActiveLink(key)
  }

  const handleInputChange = (e) => {
    setSearch({...search, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
      dispatch({
        type: 'FILTER',
        payload: {
          departure: search.departure, 
          arrival: search.arrival,
          date: search.date
        }
      })
  }
  
  const renderFlights = () => {
    if (flightsList.filtered.length > 0) {
      return flightsList.filtered.slice(0, showAllFlights ? flightsList.filtered.length : FLIGHTS_TO_SHOW).map((flight, index) => {
          const nodeRef = createRef(null)
          return (
            <CSSTransition
              key={flight.id}
              exit={false}
              timeout={400}
              classNames="flights" 
              nodeRef={nodeRef}
            >
              <FlightCard ref={nodeRef} flight={flight} />
            </CSSTransition>
          ) 
      })
    }
    return <div className="not-found-msg">Flights not found.</div>
  }

	return (
		<section id="flights" className="flights">
      <div className="container">
        <SearchForm 
          handleFormSubmit={handleFormSubmit} 
          activeLink={activeLink} 
          handleSortFlights={handleSortFlights}
          search={search} 
          handleInputChange={handleInputChange}
        />
        <SectionHeader 
          title="Flights" 
          activeLink={activeLink} 
          links={flightsSortData} 
          handleSort={handleSortFlights}
        />
        <div className="flights__table">
          <div className="flights__header">
            <div className="flights__header-item">Airline</div>
            <div className="flights__header-item">Date</div>
            <div className="flights__header-item">Departure</div>
            <div className="flights__header-item">Arrival</div>
            <div className="flights__header-item">Flight Time</div>
            <div className="flights__header-item">Price</div>
          </div>
          <TransitionGroup>
            {renderFlights()}
          </TransitionGroup>
        </div>
        {/* Рендерим кнопку только в случае, если есть что показать */}
        {flightsList.filtered.length > FLIGHTS_TO_SHOW && 
          <ViewMoreButton
            label='Flights'
            showAll={showAllFlights}
            handleShowAll={() => setShowAllFlights(showAllFlights => !showAllFlights)}
          />
        }
      </div>
    </section> 
	)
}

export default Flights