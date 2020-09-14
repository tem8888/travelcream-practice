import React, {useState, useEffect} from 'react'
import hotelsJSON from '../data/hotels'

const Hotels = () => {

  const [isHiddenHotel, setHiddenHotel] = useState(false)
	const [hotelsSort, setHotelsSort] = useState([])
	const [sortType, setSortType] = useState('price')

	useEffect(() => {

		const hotels = Object.values(hotelsJSON)
		const sortHotels = field => {
			const fields = {price: "price",	distance: "distance"}
			const sortProperty = fields[field]
			const sorted = [...hotels].sort((a,b) => a[sortProperty] - b[sortProperty])
			setHotelsSort(sorted)
		}

		sortHotels(sortType)
	}, [sortType])

	return (
	<section className="hotels">
    <div className="container">
      <div className="section-top">
        <h3 className="section-top__title">Hotels</h3>
        <div className="section-top__filter">
          <span 
          		className={sortType === 'price' ? "section-top__item section-top__item--active" : "section-top__item"} 
          		onClick={() => setSortType('price')}>Best Price
          </span>
          <span 
          		className={sortType === 'distance' ? "section-top__item section-top__item--active" : "section-top__item"} 
          		onClick={() => setSortType('distance')}>Distance</span>
        </div>
      </div>
      <div className="hotels__rooms-list">

      {hotelsSort.map((hotel, i) => (
      	 <div className={isHiddenHotel ? "hotels__room" : i > 5 ? "hotels__room--hidden" : "hotels__room"} key={i}>
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
      	))}

            </div>
      <div className="view-more" onClick={() => setHiddenHotel(!isHiddenHotel)}>{isHiddenHotel ? "Minimize" : "See all hotels"}</div>
    </div>
  </section>      
	)
}


export default Hotels