import React, {useEffect} from 'react';
import './styles/styles.sass';
import './styles/media.sass';
import Hotel from './components/Hotels.js'
import Attractions from './components/Attractions.js'
import Flights from './components/Flights.js'
import Trips from './components/Trips.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

function App() {

  useEffect(() => {
  const script = document.createElement("script");
  script.type="module"
  script.src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.esm.js"

  document.body.appendChild(script);
}, [])

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
