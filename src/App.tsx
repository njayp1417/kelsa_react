import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import MobileFooterNav from './components/MobileFooterNav';
import Home from './pages/Home';
import Rentals from './pages/Rentals';
import Events from './pages/Events';
import Contact from './pages/Contact';
import './styles/global.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <FloatingActions />
        <MobileFooterNav />
      </div>
    </Router>
  );
}

export default App;