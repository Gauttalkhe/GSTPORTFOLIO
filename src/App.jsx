import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import ContactUs from './component/ContactUs'
import Destination from './component/Destination'
import TourTypes from './component/TourTypes'
import DestinationDetails from './component/DestinationDetails'
import Portfolio from './component/Portfolio'

function App() {
  return (
    <div>

      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tourtypes' element={<TourTypes />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/destination' element={<Destination />} />
        <Route path="/destination/:tripId" element={<DestinationDetails />} />
      </Routes> */}
      <Portfolio/>
    </div>
  )
}

export default App
