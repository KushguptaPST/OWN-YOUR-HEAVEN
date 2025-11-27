import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';
import Body from './components/body';
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

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from Django API
    axios.get('http://127.0.0.1:8000/api/tasks/')
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route 
          path="/" 
          element={
            <>
              <Popnav /> 
              <Body tasks={tasks} /> {/* pass tasks to Body component if needed */}
            </>
          } 
        />

        {/* Location page */}
        <Route path="/location/:place" element={<LocationPage />} />

        {/* Other pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/query" element={<Query />} />
        <Route path="/guest-policy" element={<GuestPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/trust-safety" element={<TrustSafety />} />
        <Route path="/list-property" element={<ListProperty />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;



      

      



