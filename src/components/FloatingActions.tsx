import React from 'react';

const FloatingActions: React.FC = () => {
  return (
    <div className="floating-actions">
      <a 
        href="https://wa.me/2349134636775" 
        className="floating-btn whatsapp-btn" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a 
        href="tel:+2349134636775" 
        className="floating-btn phone-btn"
        aria-label="Call us"
      >
        <i className="fas fa-phone"></i>
      </a>
    </div>
  );
};

export default FloatingActions;