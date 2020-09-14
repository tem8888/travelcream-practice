import React,{useState} from 'react'
import {Link} from 'react-scroll'

const Header = () => {

const [menuStatus, setMenuStatus] = useState(false)

  return (
<header className="header">
    <div className="container">
      <div className="header__top">
        <div className="header__brand">
          <a href="#/" className="header__brand-link">TravelCream</a>
        </div>
        <div className="menu-icon menu-open" onClick={() => setMenuStatus(!menuStatus)}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <nav className={menuStatus ? "header__nav header__nav--open" : "header__nav"} onClick={() => setMenuStatus(!menuStatus)}>
          <div className="menu-icon menu-close">
            <ion-icon name="close-circle-outline"></ion-icon>
          </div>
          <ul className="header__nav-list">
            <li className="header__nav-item"><Link to="flights" className="header__nav-link" offset={-40} smooth={true}>Flights</Link></li>
            <li className="header__nav-item"><Link to="hotels" className="header__nav-link" offset={-40} smooth={true}>Hotels</Link></li>
            <li className="header__nav-item"><Link to="trips" className="header__nav-link" offset={-40} smooth={true}>Trips</Link></li>
            <li className="header__nav-item"><Link to="attractions" className="header__nav-link" offset={-40} smooth={true}>Activity</Link></li>
            <li className="header__nav-item"><Link to="trips" className="header__nav-link" offset={-40} smooth={true}>Deals</Link></li>
          </ul>
        </nav>
        <a href="#/" className="header__login-btn">Login</a>
      </div>
      <div className="header__title-container">
        <h1 className="header__title">Do you want to visit Paris?</h1>
        <h3 className="header__text">Why not</h3>
      </div>
    </div>
  </header>
  )
}

export default Header