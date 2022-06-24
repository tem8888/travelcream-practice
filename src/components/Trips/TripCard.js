import React from 'react'

const TripCard = React.forwardRef(({trip}, ref) => {
  return (
    <div className="trips__item" ref={ref}>
      <img src={trip.image} alt="trip-img" className="trips__item-img" />
      <div className="trips__item-info">
        <h3 className="trips__item-title">{trip.title}</h3>
        {trip.text}
      </div>
    </div>
  )
})

export default TripCard