import React from 'react'

const Footer = () => {
	return (
		<footer className="footer">
    <div className="container">
      <div className="footer__columns">
      <div className="footer__links">
        <h2 className="footer__links-title">Cities</h2>
        <a href="#/" className="footer__link">Paris</a>
        <a href="#/" className="footer__link">Miami</a>
        <a href="#/" className="footer__link">London</a>
        <a href="#/" className="footer__link">Tokyo</a>
        <a href="#/" className="footer__link">Madrid</a>
        <a href="#/" className="footer__link">Pekin</a>
      </div>
      <div className="footer__links">
        <h2 className="footer__links-title">Explore</h2>
        <a href="#/" className="footer__link">Register</a>
        <a href="#/" className="footer__link">Login</a>
        <a href="#/" className="footer__link">Assistance</a>
        <a href="#/" className="footer__link">Eco</a>
      </div>
      <div className="footer__links">
        <h2 className="footer__links-title">About us</h2>
        <a href="#/" className="footer__link">About TravelCream</a>
        <a href="#/" className="footer__link">Blog</a>
        <a href="#/" className="footer__link">Pricavy Policy</a>
        <a href="#/" className="footer__link">Careers</a>
      </div>
      <div className="footer__links">
        <h2 className="footer__links-title">Contact</h2>
        <span className="footer__text">Feel free to get in touch via email:</span>
        <span className="footer__text--red">support@travelcream.com</span>
      </div>
      </div>
    </div>
  </footer>
	)
}

export default Footer