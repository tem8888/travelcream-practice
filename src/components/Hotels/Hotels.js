import React, {useState, useReducer, createRef} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import reducer from '../../reducers/hotelsReducer.js'
import './Hotels.sass'
import SectionHeader from '../SectionHeader/SectionHeader'
import ViewMoreButton from '../ViewMoreButton/ViewMoreButton'
import HotelCard from './HotelCard'
import hotelsJSON from '../../data/hotels'

const hotelsSortData = [
  {
    id: 'price',
    name: 'Best Price'
  },
  {
    id: 'distance',
    name: 'Distance'
  },
]

const Hotels = () => {

  const HOTELS_TO_SHOW = 6
  const [activeLink, setActiveLink] = useState('price') // Поле сортировки полетов (по умолчанию - дней до отправления)
  const [showAllHotels, setShowAllHotels] = useState(false) // Состояние показа всего списка полетов

  const initialHotels = Object.values(hotelsJSON).sort((a,b) => a[activeLink] - b[activeLink]) //сортированный список по дефолтному полю
  const [hotelsList, dispatch] = useReducer(reducer, {initial: initialHotels, filtered: initialHotels}) // РЕДУСЕР

  const handleSortHotels = (key) => {
    dispatch({type: 'SORT', payload: key}) 
    setActiveLink(key)
  }

  const renderHotels = () => {
    if (hotelsList.filtered.length > 0) {
      return hotelsList.filtered.slice(0, showAllHotels ? hotelsList.filtered.length : HOTELS_TO_SHOW).map((hotel) => {
        const nodeRef = createRef(null)
        return (
          <CSSTransition
            key={hotel.id}
            exit={false}
            timeout={400}
            classNames="item"
            nodeRef={nodeRef}
          >
              <HotelCard hotel={hotel} ref={nodeRef}/>
          </CSSTransition>
        )
      })
    } else return <div className="not-found-msg">Hotels not found.</div>
  } 

	return (
    <section className="hotels">
      <div className="container">
        <SectionHeader 
          title="Hotels" 
          activeLink={activeLink} 
          links={hotelsSortData}
          handleSort={handleSortHotels} // ?handleSortFlights
        />
        <TransitionGroup className="hotels__rooms-list">
          {renderHotels()}
        </TransitionGroup>
        {/* Рендерим кнопку только в случае, если есть что показать */}
        {hotelsList.filtered.length > HOTELS_TO_SHOW && 
          <ViewMoreButton
            label='Hotels'
            showAll={showAllHotels}
            handleShowAll={() => setShowAllHotels(showAllHotels => !showAllHotels)}
          />
          }
      </div>
    </section>      
	)
}

export default Hotels