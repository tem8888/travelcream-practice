import React from 'react'
import {Link} from 'react-scroll'

const hashLinks = [
	{
		to: 'flights',
		text: 'Flights'
	},
	{
		to: 'hotels',
		text: 'Hotels'
	},
	{
		to: 'attractions',
		text: 'Activity'
	},
	{
		to: 'trips',
		text: 'Trips'
	}
]

const NavMenu = () => {

	return (
		<ul className="header__nav-list">
			{hashLinks.map((link) => {
				return (
					<li key={link.to} className="header__nav-item">
							<Link to={link.to} className="header__nav-link" offset={-40} smooth={true}>{link.text}</Link>
					</li>
				) 
			})}
		</ul>
	)
}

export default NavMenu