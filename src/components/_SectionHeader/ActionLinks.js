import React from 'react'

const ActionLinks = ({links, activeLink, handleSort}) => {
	return links.map((element) => {
		return (
			<span 
				key={element.id}
				className={`section-header__item ${activeLink === element.id && 'section-header__item--active'}`}
				onClick={() => handleSort(element.id)}>
				{element.name}
			</span>
		)
	})
}

export default ActionLinks