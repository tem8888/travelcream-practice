import React,{useState} from 'react'
import './Header.sass'
import NavMenu from './NavMenu'

const Header = () => {

const [openMobileMenu, setOpenMobileMenu] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__brand">
            <a href="#/" className="header__brand-link">TravelCream</a>
          </div>
          <div className="menu-icon menu-open" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <nav className={`header__nav ${openMobileMenu ? 'header__nav--open' : ''}`}>
            <div className="menu-icon menu-close" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
              <ion-icon name="close-circle-outline"></ion-icon>
            </div>
            <NavMenu />
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