import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Kelsa Events</h3>
            <p>Your premier partner for event planning and rental services since 2020.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/share/176hR3xknU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com/kelsarentals" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/kelsaevents" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/rentals">Rentals</Link></li>
              <li><Link to="/events">Event Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> 
                Shop 2B, BEAUFORT COURT ESTATE, LUGBE, ABUJA
              </li>
              <li>
                <i className="fas fa-phone"></i> 
                +234 913 463 6775
              </li>
              <li>
                <i className="fas fa-phone"></i> 
                +234 802 507 1778
              </li>
              <li>
                <i className="fas fa-envelope"></i> 
                kelsarentalsevent@gmail.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {currentYear} Kelsa Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;