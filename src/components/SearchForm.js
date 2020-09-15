import React from 'react'

const SearchForm = (props) => {

	return (
    
  <form className="search" onSubmit={(e) => { 
    e.preventDefault();   
    if (props.inputDeparture) 
      props.dispatch({type: 'departure',  
      payload: {inputDeparture: props.inputDeparture, filtered: props.stateFlights.initial}});
       // props.setSortType('departure')}
      else if (props.inputArrival) 
        props.dispatch({type: 'arrival',
        payload: {inputArrival: props.inputArrival, filtered: props.stateFlights.initial}});
      //  props.setSortType('arrival')}
      else props.dispatch({type: props.sortType,
      payload: {filtered: props.stateFlights.initial}}) // При нажати на Поиск при пустых полях возвращаем данные c учетом сортировки
    }}>
    <input type="text" className="search__input" placeholder="Where are you leaving from ?"
        value={props.inputDeparture} onChange={(e) => props.setInputDeparture(e.target.value)}/>
    <input type="text" className="search__input" placeholder="Where do you want to go ?"
        value={props.inputArrival} onChange={(e) => props.setInputArrival(e.target.value)} />
  {/* <input placeholder="Date" type="text" className="search__input search__input-loc--date" */}
  {/*   onFocus={(e) => e.currentTarget.type = "date"}  */}
  {/*   onBlur={(e) => {e.currentTarget.type = "text"; e.currentTarget.placeholder = "Date"}} /> */}
    <button type="submit" className="search___btn" >Search</button>
  </form>

	)
}


export default SearchForm