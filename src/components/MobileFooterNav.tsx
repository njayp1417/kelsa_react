import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileFooterNav: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="mobile-footer-nav">
      <Link to="/" className={isActive('/') ? 'active' : ''}>
        <i className="fas fa-home"></i>
        <span>Home</span>
      </Link>
      <Link to="/rentals" className={isActive('/rentals') ? 'active' : ''}>
        <i className="fas fa-chair"></i>
        <span>Rentals</span>
      </Link>
      <Link to="/events" className={isActive('/events') ? 'active' : ''}>
        <i className="fas fa-calendar-alt"></i>
        <span>Events</span>
      </Link>
      <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
        <i className="fas fa-envelope"></i>
        <span>Contact</span>
      </Link>
    </nav>
  );
};

export default MobileFooterNav;