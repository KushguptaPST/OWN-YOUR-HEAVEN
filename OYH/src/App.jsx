import React from 'react'
import Navbar from './components/navbar'
import Body from './components/body'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popnav from "./components/popnav";
import LocationPage from "./components/LocationPage";

import Footer from "./components/footer";

import AboutUs from "./pages/AboutUs";
import Terms from "./pages/Terms";
import Careers from "./pages/Careers";
import Query from "./pages/Query";
import GuestPolicy from "./pages/GuestPolicy"; 
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TrustSafety from "./pages/TrustSafety";
import ListProperty from "./pages/ListProperty";
import BookingPage from './pages/BookingPage';





const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home page → Show both Popnav + Body */}
        <Route 
          path="/" 
          element={
            <>
              <Popnav />
              <Body />
            </>
          } 
        />

        {/* Location page → ONLY NAVBAR appears, not Body */}
        <Route path="/location/:place" element={<LocationPage />} />

        <Route path="/" element={<Body />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/query" element={<Query />} />
        <Route path="/guest-policy" element={<GuestPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/trust-safety" element={<TrustSafety />} />
        <Route path="/list-property" element={<ListProperty />} />
        <Route path="/booking" element={<BookingPage />} />


      





      </Routes>

      <Footer />
    </BrowserRouter>


          

  )
}

export default App