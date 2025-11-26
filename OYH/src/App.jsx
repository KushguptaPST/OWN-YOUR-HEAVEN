import React, { useState } from 'react';
import Navbar from './components/navbar';
import Body from './components/body';
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

  const [search, setSearch] = useState("");

  const locations = [
    "Koramangla",
    "WhiteField",
    "BrookField",
    "GandhiNagar",
    "Electronic City",
    "Ub City",
    "IndiraNagar",
    "MarathaHalli",
    "More Places"
  ];

  const filteredLocations = locations
    .filter(loc => loc.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 5); // Only show max 5

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Popnav />
              <Body 
                search={search} 
                setSearch={setSearch}
                suggestions={filteredLocations}
              />
            </>
          } 
        />

        <Route path="/location/:place" element={<LocationPage />} />
        
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
  );
}

export default App;
