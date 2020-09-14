import React, {useState} from 'react'
import tripsJSON from '../data/trips'

const trips = Object.values(tripsJSON)

const Trips = () => {

	const [moreTrips, showMoreTrips] = useState(false)

	return (
<section className="trips">
    <div className="container">
      <div className="section-top">
        <h3 className="section-top__title">Trips</h3>
      </div>
      <div className="trips__list">

      	{trips.map((trip, i) => (
        	<div className={moreTrips ? "trips__item" : i > 2 ? "trips__item--hidden" : "trips__item"} key={i}>
          	<img className="trips__item-img" src={trip.image} alt="trip-img"/>
         		<div className="trips__item-info">
            	<h3 className="trips__item-title">{trip.title}</h3>
         			<p className="trips__item-text">{trip.text}</p>
          	</div>
        	</div>
        ))}

      </div>
      <div className="view-more" onClick={() => showMoreTrips(!moreTrips)}>{moreTrips ? "Minimize" : "See all Trips"}</div>
    </div>
  </section>
	)
}

export default Trips