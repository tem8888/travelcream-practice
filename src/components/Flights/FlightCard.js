import React from 'react'

const FlightCard = React.forwardRef(({flight}, ref) => {

	return (
		<div className="flights__row" ref={ref}>
			<div className="flights__col-item">
				<img src={flight.logo} alt="" className="flights__airline-img"/>
				<div className="flights__info">
					<div className="flights__item-top-info">{flight.airline}</div>
					<div className="flights__item-bottom-info">{flight.code}</div>
				</div>
			</div>
			<div className="flights__col-item">
				<div className="flights__item-top-info">{flight.date}</div>
				<div className="flights__item-bottom-info">In {flight.daysleft} days</div>
			</div>
			<div className="flights__col-item">
				<div className="flights__item-top-info">{flight.departure}</div>
				<div className="flights__item-bottom-info">{flight.departuretime}</div>
			</div>
			<div className="flights__col-item">
				<div className="flights__item-top-info">{flight.arrival}</div>
				<div className="flights__item-bottom-info">{flight.arrivaltime}</div>
			</div>
			<div className="flights__col-item">
				<div className="flights__item-top-info">{flight.time}</div>
				</div>
			<div className="flights__col-item">
				<div className="flights__item-top-info price">{flight.price} $</div>
			</div>
		</div>
	)
})

export default FlightCard