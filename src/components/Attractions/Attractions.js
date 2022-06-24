import React, {useState, useReducer, createRef} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import reducer from '../../reducers/attractionsReducer.js'
import './Attractions.sass'
import SectionHeader from '../_SectionHeader/SectionHeader'
import ViewMoreButton from '../_ViewMoreButton/ViewMoreButton'
import AttractionCard from './AttractionCard.js'
import attractionsJSON from '../../data/attractions.json'

const attractionsTypes = [
  {
    id: 'all',
    name: 'All'
  },
  {
    id: 'shoppings',
    name: 'Shoppings'
  },
  {
    id: 'museum',
    name: 'Museum'
  },
  {
    id: 'monuments',
    name: 'Monuments'
  },
]

const Attractions = () => {

  const ATTRACTIONS_TO_SHOW = 6
  const [showAllAttractions, setShowAllAttractions] = useState(false) // Состояние показа всего списка полетов
  const [filterType, setFilterType] = useState('all')

  const initialAttractions = Object.values(attractionsJSON) //сортированный список по дефолтному полю
  const [attractionsList, dispatch] = useReducer(reducer, {initial: initialAttractions, filtered: initialAttractions}) // РЕДУСЕР

  const handleFilterAttractions = (attraction) => {
    if (attraction === 'all') {
      dispatch({type: 'DEFAULT'})
    } else {
      dispatch({type: 'FILTER', payload: attraction}) 
    }
    setFilterType(attraction)
  }
  
  const listAttractions = attractionsList.filtered.slice(0, showAllAttractions ? attractionsList.filtered.length : ATTRACTIONS_TO_SHOW).map((attraction) => {
    const nodeRef = createRef(null)
    return (
      <CSSTransition
        key={attraction.id}
        exit={false}
        timeout={400}
        classNames="item"
        nodeRef={nodeRef}
      >
          <AttractionCard ref={nodeRef} attraction={attraction}/>
      </CSSTransition>
    ) 
  })

  const renderAttractions = () => {
    if (listAttractions.length > 0) {
      return (
        <TransitionGroup className="attractions__list"> 
          {listAttractions}
        </TransitionGroup> 
      )
    } else {
      return <div className="not-found-msg">Not found.</div>
    }
  }

	return (
	 <section className="attractions">
    <div className="container">
      <SectionHeader 
        title="Attractions" 
        activeLink={filterType} 
        links={attractionsTypes} 
        handleSort={handleFilterAttractions}
      />
      {renderAttractions()}
       {/* Рендерим кнопку только в случае, если есть что показать */}
       {attractionsList.filtered.length > ATTRACTIONS_TO_SHOW && 
        <ViewMoreButton
          label='Attractions'
          showAll={showAllAttractions}
          handleShowAll={() => setShowAllAttractions(showAllAttractions => !showAllAttractions)}
        />
        }
    </div>
  </section>      
	)
}


export default Attractions