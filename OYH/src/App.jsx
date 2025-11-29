import { useEffect, useState } from 'react';
import Body from './components/body';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';
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
import Login from './auth/Login';
import Signup from './auth/Signup';

import axios from 'axios';
import AuthProvider from './AuthProvider';

const App = () => {
  const [tasks, setTasks] = useState([]);
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
    .slice(0, 5);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* Home */}
          <Route 
            path="/" 
            element={
              <>
                <Popnav /> 
                <Body 
                  tasks={tasks}
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
          
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          
         
        </Routes>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;


