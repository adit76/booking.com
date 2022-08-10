import React from 'react';
import './App.scss';

import { Routes, Route } from "react-router-dom";

// Components
import NavBar from './components/NavBar';
import Reservations from './pages/Reservations';
import Rates from './pages/Rates';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Reservations />} />
        <Route path="rates" element={<Rates />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
