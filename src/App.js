import React from 'react';
import './styles/styles.sass';
import Hotel from './components/Hotels/Hotels.js'
import Attractions from './components/Attractions/Attractions.js'
import Flights from './components/Flights/Flights.js'
import Trips from './components/Trips/Trips.js'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'

function App() {

  return (
    <>
      <Header />
      <Flights />
      <Hotel />
      <Attractions />
      <Trips />
      <Footer />
    </>
  );
}

export default App;
