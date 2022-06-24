import React from 'react'
import './ViewMoreButton.sass'

const ViewMoreButton = ({label, showAll, handleShowAll}) => {

  return (
    <div className="view-more">
        <span className="view-more__button" onClick={handleShowAll}>
        {showAll ? 'Minimize' : `See all ${label}`}
        </span>
    </div>
  )
}

export default ViewMoreButton