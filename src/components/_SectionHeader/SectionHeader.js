import React from 'react'
import './SectionHeader.sass'
import ActionLinks from './ActionLinks'

const SectionHeader = ({title, activeLink, links, handleSort}) => {
  return (
    <div className="section-header">
        <h3 className="section-header__title">{title}</h3>
        <div className="section-header__links">
          <ActionLinks 
            links={links} 
            activeLink={activeLink} 
            handleSort={handleSort}
          />
        </div>
    </div>
  )
}

export default SectionHeader