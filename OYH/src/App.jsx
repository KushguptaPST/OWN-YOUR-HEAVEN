import React from 'react'
import Navbar from './components/navbar'
import Body from './components/body'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popnav from "./components/popnav";
import LocationPage from "./components/LocationPage";

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
