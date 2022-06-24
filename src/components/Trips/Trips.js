import React, {useState, createRef} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import ViewMoreButton from '../_ViewMoreButton/ViewMoreButton'
import './Trips.sass'
import TripCard from './TripCard'
import tripsJSON from '../../data/trips'

const trips = Object.values(tripsJSON)
const TRIPS_TO_SHOW = 4

const Trips = () => {

	const [showAllTrips, setShowAllTrips] = useState(false)

	const renderTrips = () => {
		if (trips.length > 0) {
			return trips.slice(0, showAllTrips ? trips.length : TRIPS_TO_SHOW).map((trip, index) => {
				const nodeRef=createRef(null)
				return (
					<CSSTransition
						key={index}
						exit={false}
						timeout={400}
						classNames="item"
						nodeRef={nodeRef}
					>
						<TripCard trip={trip} ref={nodeRef} />
					</CSSTransition>
				) 
			})
		} else return <div className="not-found-msg">Not found.</div>
	} 

	return (
		<section className="trips">
			<div className="container">
				<div className="section-header">
					<h3 className="section-header__title">Trips</h3>
				</div>
				<TransitionGroup className="trips__list">
					{renderTrips()}
				</TransitionGroup>
				{/* Рендерим кнопку только в случае, если есть что показать */}
				{trips.length > TRIPS_TO_SHOW && 
					<ViewMoreButton
						label='Trips'
						showAll={showAllTrips}
						handleShowAll={() => setShowAllTrips(showAllTrips => !showAllTrips)}
					/>
				}
			</div>
		</section>
	)
}

export default Trips