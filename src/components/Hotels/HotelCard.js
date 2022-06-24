import React from 'react'

const HotelCard = React.forwardRef(({ hotel }, ref) => {
  return (
    <div className="hotels__room" ref={ref}>
        <div className="hotels__room-image">
        <img src={hotel.image} alt=""/>
        </div>
        <div className="hotels__room-info">
        <h3 className="hotels__room-title">{hotel.title}</h3>
        <div className="hotels__room-features">
            <span className="hotels__room-size">{hotel.distance} km</span>
            <span className="hotels__room-wifi">{hotel.wifi}</span>
        </div>
        <div className="price">{hotel.price} $</div>
        </div>
    </div>
  )
})

export default HotelCard