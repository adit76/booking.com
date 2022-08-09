import React from 'react';
import './App.scss';

// Components
import NavBar from './components/NavBar';
import Reservations from './pages/Reservations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Reservations />

      <Footer />
    </div>
  );
}

export default App;
