import React from 'react';
import './App.scss';

import { Routes, Route } from "react-router-dom";

// Components
import NavBar from './components/NavBar';
import Reservations from './pages/Reservations';
import Calendar from './pages/Calendar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Reservations />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
