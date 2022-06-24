import React from 'react'

const SearchForm = ({handleFormSubmit, search, handleInputChange}) => {

  const handleBlur = (e) => {
    e.currentTarget.type = "text" 
    e.currentTarget.placeholder = "Date"
  }
  const handleFocus = (e) => {
    e.currentTarget.type = "date"
  }

	return (
    <form className="search" onSubmit={handleFormSubmit}>
      <input 
        type="text" 
        name="departure"
        className="search__input" 
        placeholder="Where are you leaving from?"
        value={search.departure} 
        onChange={handleInputChange}
      />
      <input 
        type="text" 
        name="arrival"
        className="search__input" 
        placeholder="Where do you want to go?"
        value={search.arrival} 
        onChange={handleInputChange} 
      />
      <input 
        placeholder="Date" 
        type="text" 
        name="date"
        className="search__input search__input--date"
        value={search.date}
        onChange={handleInputChange} 
        onFocus={handleFocus}  
        onBlur={handleBlur} 
       />
      <button type="submit" className="search__btn" >Search</button>
    </form>

	)
}


export default SearchForm