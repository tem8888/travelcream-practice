import React, {useState} from 'react'
import img1 from '../images/eifel.png'
import img2 from '../images/louvres.png'
import img3 from '../images/notredam.png'
import img4 from '../images/arc.png'
import img5 from '../images/deshalles.png'
import img6 from '../images/sacre.png'
// import attractionsJSON from '../data/attractions.json'
// const attractions = Object.values(attractionsJSON)

const Attractions = () => {

 // const attractionsToShow = 4
  const [moreAttractions, showMoreAttractions] = useState(false)

	return (
	 <section className="attractions">
    <div className="container">
      <div className="section-top">
        <h3 className="section-top__title">Attractions</h3>
      </div>
      <div className="attractions__list">

        {/* {attractions.slice(0,attractionsToShow).map((attraction, i) => ( */}
        {/*    <div className={moreAttractions ? `attractions__item-${i} item` ? i > attractionsToShow : `item-hidden` : `attractions__item-${i} item`}> */}
        {/*     <img src={attraction.image} alt="" /> */}
        {/*    <p className="item__name">{attraction.title}</p> */}
        {/* </div> */}
        {/* ))} */}

        <div className="attractions__item-1 item">
          <img src={img1} alt="" />
          <p className="item__name">Eifel Tower</p>
        </div>
        <div className="attractions__item-2 item">
          <img src={img2} alt="" />
          <p className="item__name">Louvres</p>
        </div>
        <div className="attractions__item-3 item">
          <img src={img3} alt="" />
          <p className="item__name">Notre Dame de Paris</p>
        </div>
        <div className="attractions__item-4 item">
          <img src={img4} alt="" />
          <p className="item__name">Forum des Halles</p>
        </div>
        <div className="attractions__item-5 item">
          <img src={img5} alt="" />
          <p className="item__name">Arc de Triomph</p>
        </div>
        <div className="attractions__item-6 item">
          <img src={img6} alt="" />
          <p className="item__name">Sacre Coeur</p>
        </div>
      </div>
      {/* {attractions.length > attractionsToShow ?  */}
      {/*   <div className="view-more" onClick={() => showMoreAttractions(!moreAttractions)}>{moreAttractions ? "Minimize" : "See all Trips"}</div> : "" */}
      {/* } */}
    </div>
  </section>      
	)
}


export default Attractions