import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { sendContactEmail } from '../lib/emailjs';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.eventType || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      // --- SAVE TO SUPABASE ---
      const { error } = await supabase
        .from('email_list')
        .insert([
          {
            email: formData.email,
            name: formData.name,
            source: 'contact_form',
            event_type: formData.eventType,
            phone: formData.phone,
            message: formData.message
          }
        ]);

      // Ignore duplicate email errors
      if (error && error.code !== '23505') {
        throw error;
      }

      // --- SEND EMAIL VIA EMAILJS ---
      const emailResult = await sendContactEmail(formData);
      
      if (!emailResult.success) {
        // Create formatted subject & body
        const subject = encodeURIComponent(`New Contact - ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone}\n` +
          `Event Type: ${formData.eventType}\n\n` +
          `Message:\n${formData.message}`
        );

        // Fallback
        const mailtoLink = `mailto:kelsarentalsevent@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
      }

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);

      // --- RESET FORM ---
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: ''
      });

    } catch (error) {
      console.error(error);
      alert('There was an error. Please try again.');
    }
  };

  useEffect(() => {
    // Add animation to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      const cardElement = card as HTMLElement;
      cardElement.style.opacity = '0';
      cardElement.style.transform = 'translateY(20px)';
      cardElement.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      cardElement.style.transitionDelay = (index * 0.1) + 's';
      
      setTimeout(() => {
        cardElement.style.opacity = '1';
        cardElement.style.transform = 'translateY(0)';
      }, 300);
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Contact Us - Get in touch with our team"
            loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80';
            }}
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team to plan your perfect event</p>
          <div className="hero-buttons">
            <a 
              href="#contactForm" 
              className="btn" 
              style={{
                background: '#ffb300',
                color: '#1a237e',
                padding: '0.8rem 1.5rem',
                borderRadius: '30px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(255,179,0,0.3)',
                textAlign: 'center' as const,
                minHeight: '44px',
                position: 'relative' as const,
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = '#c68400';
                target.style.color = '#fff';
                target.style.transform = 'translateY(-3px)';
                target.style.boxShadow = '0 6px 16px rgba(255,179,0,0.4)';
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = '#ffb300';
                target.style.color = '#1a237e';
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = '0 4px 12px rgba(255,179,0,0.3)';
              }}
            >
              Send Message
            </a>
            <a 
              href="#about-us" 
              className="btn btn-outline" 
              style={{
                background: 'transparent',
                border: '2px solid #ffb300',
                color: '#fff',
                padding: '0.8rem 1.5rem',
                borderRadius: '30px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: 'none',
                textAlign: 'center' as const,
                minHeight: '44px',
                position: 'relative' as const,
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = '#ffb300';
                target.style.color = '#1a237e';
                target.style.transform = 'translateY(-3px)';
                target.style.boxShadow = '0 6px 16px rgba(255,179,0,0.4)';
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = 'transparent';
                target.style.color = '#fff';
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = 'none';
              }}
            >
              About Us
            </a>
            <a 
              href="tel:+2348025071778" 
              className="btn btn-secondary" 
              style={{
                background: '#ffb300',
                color: '#1a237e',
                padding: '0.8rem 1.5rem',
                borderRadius: '30px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: '2px solid #ffb300',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(255,179,0,0.3)',
                textAlign: 'center' as const,
                minHeight: '44px',
                position: 'relative' as const,
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = '#c68400';
                target.style.color = '#fff';
                target.style.transform = 'translateY(-3px)';
                target.style.boxShadow = '0 6px 16px rgba(255,179,0,0.4)';
                target.style.borderColor = '#c68400';
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = '#ffb300';
                target.style.color = '#1a237e';
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = '0 4px 12px rgba(255,179,0,0.3)';
                target.style.borderColor = '#ffb300';
              }}
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <main id="main-content">
        <div className="container">
          {/* Contact Section */}
          <section className="section">
            <div className="section-title" style={{ padding: '0 1rem' }}>Get In Touch</div>
            <div className="section-subtitle" style={{ padding: '0 1rem 2rem' }}>We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</div>
            
            <div className="card-grid">
            {/* Contact Information */}
            <div className="card">
              <h3>Contact Information</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-map-marker-alt" style={{ color: 'var(--accent)', marginRight: '10px', width: '20px' }}></i> 
                  Shop 2B, BEAUFORT COURT ESTATE, LUGBE, ABUJA
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-phone" style={{ color: 'var(--accent)', marginRight: '10px', width: '20px' }}></i> 
                  +234 913 463 6775
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-phone" style={{ color: 'var(--accent)', marginRight: '10px', width: '20px' }}></i> 
                  +234 802 507 1778
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-envelope" style={{ color: 'var(--accent)', marginRight: '10px', width: '20px' }}></i> 
                  kelsarentalsevent@gmail.com
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-clock" style={{ color: 'var(--accent)', marginRight: '10px', width: '20px' }}></i> 
                  Monday-Sunday: 9am-5pm
                </li>
              </ul>
              
              <h3 className="mt-3">Follow Us</h3>
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
            
            {/* Contact Form */}
            <div className="card">
              <h3>Send Us a Message</h3>
              <form id="contactForm" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--primary)' }}>
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '1rem',
                      transition: 'border-color var(--transition)'
                    }}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--primary)' }}>
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '1rem',
                      transition: 'border-color var(--transition)'
                    }}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--primary)' }}>
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+234 123 456 7890"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '1rem',
                      transition: 'border-color var(--transition)'
                    }}
                  />
                </div>
                
                <div>
                  <label htmlFor="eventType" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--primary)' }}>
                    Event Type *
                  </label>
                  <select 
                    id="eventType" 
                    name="eventType" 
                    value={formData.eventType}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '1rem',
                      transition: 'border-color var(--transition)'
                    }}
                  >
                    <option value="">Select an event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--primary)' }}>
                    Your Message *
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '1rem',
                      transition: 'border-color var(--transition)',
                      resize: 'vertical'
                    }}
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn" 
                  id="submitBtn"
                  style={{
                    width: '100%',
                    background: 'var(--accent)',
                    color: 'var(--primary-dark)',
                    padding: '1rem 2rem',
                    borderRadius: '30px',
                    fontWeight: '600',
                    fontSize: '1rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(255,179,0,0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'var(--accent-dark)';
                    target.style.color = '#fff';
                    target.style.transform = 'translateY(-3px)';
                    target.style.boxShadow = '0 6px 16px rgba(255,179,0,0.4)';
                  }}
                  onMouseOut={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'var(--accent)';
                    target.style.color = 'var(--primary-dark)';
                    target.style.transform = 'translateY(0)';
                    target.style.boxShadow = '0 4px 12px rgba(255,179,0,0.3)';
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
            </div>
          </section>
          
          {/* Location Section */}
          <section className="section">
            <div className="section-title">Our Location</div>
            <div className="map-container" style={{ height: '400px', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
              <div className="map-placeholder" style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--primary) 0%, #2a3990 100%)', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
                <i className="fas fa-map-marker-alt" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem' }}></i>
                <h3>Shop 2B, BEAUFORT COURT ESTATE</h3>
                <p>LUGBE, ABUJA</p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Shop+2B+BEAUFORT+COURT+ESTATE+LUGBE+ABUJA" className="btn" style={{ marginTop: '1rem' }} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-directions"></i> Get Directions
                </a>
              </div>
            </div>
            <div className="address-details" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <p>We're located in the heart of LUGBE, ABUJA. Visit us today to discuss your event needs in person!</p>
              <p>
                <a href="tel:+2349134636775" className="btn" style={{ marginRight: '1rem' }}>
                  <i className="fas fa-phone"></i> Call Us
                </a>
                <a href="tel:+2348025071778" className="btn" style={{ marginRight: '1rem' }}>
                  <i className="fas fa-phone"></i> Call Us (Alt)
                </a>
                <a href="mailto:kelsarentalsevent@gmail.com" className="btn">
                  <i className="fas fa-envelope"></i> Email Us
                </a>
              </p>
            </div>
          </section>

          {/* About Us Section */}
          <section id="about-us" className="section">
            <div className="section-title">About Kelsa Events</div>
            <div className="section-subtitle">Your trusted partner in creating memorable experiences</div>
          
          <div 
            className="card" 
            style={{ 
              background: 'linear-gradient(135deg, var(--primary) 0%, #2a3990 100%)', 
              color: 'white', 
              marginBottom: '2rem',
              textAlign: 'center'
            }}
          >
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Our Story</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', padding: '0 2rem 2rem', textAlign: 'justify' }}>
              Founded in 2020, Kelsa Events has grown from a small rental business to Abuja's premier event planning 
              and equipment rental company. We believe every celebration deserves to be extraordinary, and we're 
              passionate about turning your vision into reality.
            </p>
          </div>
          
          <div className="card" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              <div style={{ flex: '0 0 auto', textAlign: 'center' }}>
                <img 
                  src="/assets/images/kelsa_manager.webp" 
                  alt="Kelsa Events Manager" 
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    border: '4px solid var(--accent)'
                  }}
                />
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Meet Our Team Leader</h3>
                <h4 style={{ color: 'var(--accent)', marginBottom: '1rem', fontWeight: '600' }}>
                  Mrs Kelechi Esther Akinwande
                </h4>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                  With over 5 years of experience in event management and a passion for creating memorable experiences, 
                  Mrs Akinwande ensures every event receives personalized attention and professional execution.
                </p>
                <p style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: '500' }}>
                  "We don't just plan events, we create lasting memories that bring joy to families and communities across the country."
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="cards-container">
            <div className="card">
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <i className="fas fa-eye" style={{ fontSize: '2.5rem', color: 'var(--accent)' }}></i>
              </div>
              <h3>Our Vision</h3>
              <p>To be Nigeria's leading event planning company, known for creativity, reliability, and exceptional service that exceeds client expectations.</p>
            </div>
            
            <div className="card">
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <i className="fas fa-bullseye" style={{ fontSize: '2.5rem', color: 'var(--accent)' }}></i>
              </div>
              <h3>Our Mission</h3>
              <p>To create unforgettable events through innovative planning, premium equipment, and personalized service that brings joy to every celebration.</p>
            </div>
            
            <div className="card">
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <i className="fas fa-heart" style={{ fontSize: '2.5rem', color: 'var(--accent)' }}></i>
              </div>
              <h3>Our Values</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Excellence in service delivery</li>
                <li><i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Integrity and transparency</li>
                <li><i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Customer satisfaction first</li>
                <li><i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Innovation and creativity</li>
              </ul>
            </div>
          </div>
          
          <div className="card">
            <h3>Why Choose Kelsa Events?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
              <div>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  <i className="fas fa-award" style={{ marginRight: '8px', color: 'var(--accent)' }}></i>
                  Proven Track Record
                </h4>
                <p>Over 500 successful events and countless satisfied clients across Abuja and beyond.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  <i className="fas fa-users" style={{ marginRight: '8px', color: 'var(--accent)' }}></i>
                  Expert Team
                </h4>
                <p>Professional event planners and coordinators with years of industry experience.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  <i className="fas fa-tools" style={{ marginRight: '8px', color: 'var(--accent)' }}></i>
                  Premium Equipment
                </h4>
                <p>High-quality, well-maintained rental equipment for all types of events.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  <i className="fas fa-handshake" style={{ marginRight: '8px', color: 'var(--accent)' }}></i>
                  Personal Touch
                </h4>
                <p>Every event is unique, and we provide personalized service tailored to your needs.</p>
              </div>
            </div>
          </div>
          
          <div className="card" style={{ background: 'var(--accent)', color: 'var(--primary-dark)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>Our Commitment to You</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', padding: '0 2rem', textAlign: 'justify' }}>
              At Kelsa Events, we don't just plan events — we create experiences. From the initial consultation to the final cleanup, 
              we're with you every step of the way, ensuring your special day is everything you dreamed it would be.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
              <div><i className="fas fa-clock" style={{ marginRight: '8px' }}></i><strong>On-Time Delivery</strong></div>
              <div><i className="fas fa-shield-alt" style={{ marginRight: '8px' }}></i><strong>Quality Guarantee</strong></div>
              <div><i className="fas fa-phone" style={{ marginRight: '8px' }}></i><strong>24/7 Support</strong></div>
            </div>
          </div>
          </section>
          
          {/* FAQ Section */}
          <section className="section">
            <div className="section-title">Frequently Asked Questions</div>
            
            <div className="cards-container">
              <div className="card">
                <h3>How far in advance should I book your services?</h3>
                <p>We recommend booking our services at least 3-6 months in advance for large events like weddings, and 1-2 months for smaller events. However, we do accommodate last-minute bookings when possible.</p>
              </div>
              
              <div className="card">
                <h3>Do you provide delivery and setup services?</h3>
                <p>Yes, we offer delivery, setup, and pickup services for all our rental items. Additional fees may apply based on location and complexity.</p>
              </div>
              
              <div className="card">
                <h3>What is your cancellation policy?</h3>
                <p>Cancellations made 30+ days before the event receive a full refund minus a 10% administrative fee. Cancellations within 30 days are subject to our detailed policy, which will be provided in your contract.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Success Modal */}
      {showSuccess && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center',
            maxWidth: '400px',
            margin: '1rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#4CAF50',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem'
            }}>
              <i className="fas fa-check" style={{ color: 'white', fontSize: '2rem' }}></i>
            </div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Message Sent Successfully!</h3>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>Thank you for contacting us. We'll get back to you soon.</p>
            <button 
              onClick={() => setShowSuccess(false)}
              style={{
                background: 'var(--accent)',
                color: 'var(--primary)',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '30px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;