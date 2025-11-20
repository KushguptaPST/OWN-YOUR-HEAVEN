import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Body from "./components/body";
import Footer from "./components/footer";

import AboutUs from "./pages/AboutUs";


import Terms from "./pages/Terms";
import Careers from "./pages/Careers";
import Query from "./pages/Query";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/query" element={<Query />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
