import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-container">
            <Link to="/" className="logo">
              <div className="logo-icon">K</div>
              Kelsa Events
            </Link>
          </div>
          
          <nav className="main-nav">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/rentals" 
              className={`nav-link ${isActive('/rentals') ? 'active' : ''}`}
            >
              Rentals
            </Link>
            <Link 
              to="/events" 
              className={`nav-link ${isActive('/events') ? 'active' : ''}`}
            >
              Event Services
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </nav>
          

        </div>
      </div>
    </header>
  );
};

export default Header;