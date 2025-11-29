<<<<<<<<< Temporary merge branch 1
import React, { useState } from 'react';
import Navbar from './components/navbar';
import Body from './components/body';
=========
import React, { useEffect, useState } from 'react';
>>>>>>>>> Temporary merge branch 2
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

<<<<<<<<< Temporary merge branch 1
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
    .slice(0, 5); // Only show max 5
=========
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from Django API
    axios.get('http://127.0.0.1:8000/api/tasks/')
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
  }, []);
>>>>>>>>> Temporary merge branch 2

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

      <Routes>
<<<<<<<<< Temporary merge branch 1
=========
        {/* Home page */}
>>>>>>>>> Temporary merge branch 2
        <Route 
          path="/" 
          element={
            <>
<<<<<<<<< Temporary merge branch 1
              <Popnav />
              <Body 
                search={search} 
                setSearch={setSearch}
                suggestions={filteredLocations}
              />
=========
              <Popnav /> 
              <Body tasks={tasks} /> {/* pass tasks to Body component if needed */}
>>>>>>>>> Temporary merge branch 2
            </>
          } 
        />

<<<<<<<<< Temporary merge branch 1
        <Route path="/location/:place" element={<LocationPage />} />
        
=========
        {/* Location page */}
        <Route path="/location/:place" element={<LocationPage />} />

        {/* Other pages */}
>>>>>>>>> Temporary merge branch 2
        <Route path="/about" element={<AboutUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/query" element={<Query />} />
        <Route path="/guest-policy" element={<GuestPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/trust-safety" element={<TrustSafety />} />
        <Route path="/list-property" element={<ListProperty />} />
        <Route path="/booking" element={<BookingPage />} />
<<<<<<<<< Temporary merge branch 1
=========
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
>>>>>>>>> Temporary merge branch 2
      </Routes>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
<<<<<<<<< Temporary merge branch 1
=========



      

      



>>>>>>>>> Temporary merge branch 2
