import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Component/Homepage';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'swiper/css';
import Updates from './Component/updates';
import MenuPage from './Component/Menupage';
import Footer from './Component/footer';
import About from './Component/about';
import Location from './Component/Location';
import Contact from './Component/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Updates />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;