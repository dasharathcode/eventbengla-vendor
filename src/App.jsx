import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Layout from './pages/hotelOwner/Layout'
import Dashboard from './pages/hotelOwner/Dashboard'
import AddRoom from './pages/hotelOwner/AddRoom'
import ListRoom from './pages/hotelOwner/ListRoom'
import HotelReg from './components/HotelReg'

// Importing AddVendor component

import AdminBookingManager from './pages/hotelOwner/AdminBookingManager'
import AddVendor from './pages/hotelOwner/AddVendor'
import ListVendor from './pages/hotelOwner/ListVendor'
import { useAppContext } from './context/AppContext'
import { Toaster } from 'react-hot-toast'

import Footer from './components/Footer'
import Terms from './pages/Terms';
import Loader from './components/Loader'

import BanquetHalls from './pages/hotelOwner/add-venue/BanquetHalls'
import MarriageGardens from './pages/hotelOwner/add-venue/MarriageGardens'
import WeddingResorts from './pages/hotelOwner/add-venue/WeddingResorts'

const App = () => {

  // Check Is Route Starts With Owner
  const isOwnerPath = useLocation().pathname.includes("owner");

  const { showHotelReg } = useAppContext();

  return (
    <div className='font-inter'>
      <Toaster />
      {!isOwnerPath && <Navbar />}
      {showHotelReg && <HotelReg />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/terms" element={<Terms />} />

        
          < Route path="/loader/:nextUrl" element={<Loader />} />
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
            <Route path="add-vendor" element={<AddVendor />} />
            <Route path="booking-manager" element={<AdminBookingManager />} />
            <Route path="list-vendor" element={<ListVendor />} />
            <Route path="list-banquet-hall" element={<BanquetHalls />} />
            <Route path="marriage-garden" element={<MarriageGardens />} />
            <Route path="wedding-resort" element={<WeddingResorts />} />

          </Route>
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App







