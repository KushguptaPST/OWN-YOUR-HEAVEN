import React from 'react'
import Navbar from './components/navbar'
import Body from './components/body'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popnav from "./components/popnav";
import LocationPage from "./components/LocationPage";

const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Popnav />} />
        <Route path="/location/:place" element={<LocationPage />} />
      </Routes>
    </BrowserRouter>
      <Body/>
    </div>
  )
}

export default App