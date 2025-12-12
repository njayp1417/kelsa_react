import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Add body class for index page styling
  React.useEffect(() => {
    document.body.classList.add('index-page');
    return () => document.body.classList.remove('index-page');
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { error } = await supabase
        .from('newsletter_emails')
        .insert([{ 
          email: email.trim(),
          source: 'newsletter',
          page_url: window.location.href
        }]);

      if (error && error.code !== '23505') throw error;

      setIsSubscribed(true);
      setEmail('');
    } catch (err: any) {
      setError(err.message || 'Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-background">
          <img 
            src="/assets/images/kelsaevent1.webp" 
            alt="Kelsa Events professional event planning and equipment rental services in Abuja - elegant wedding setup with premium chairs and decorations" 
            loading="eager" 
            fetchPriority="high"
            srcSet="/assets/images/kelsaevent1.webp 1200w, /assets/images/kelsaevent1.webp 800w"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Creating Unforgettable Events</h1>
          <p>Your premier partner for professional event planning and equipment rental services in Nigeria</p>
          <div className="hero-buttons">
            <Link to="/events" className="btn" aria-label="Learn about our event services" style={{ background: '#ffb300', color: '#1a237e', padding: '0.8rem 1.5rem', borderRadius: '30px', fontWeight: '600', transition: 'all 0.3s ease', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(255,179,0,0.3)', textAlign: 'center', minHeight: '44px', position: 'relative', overflow: 'hidden', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Event Services</Link>
            <Link to="/contact" className="btn btn-secondary" aria-label="Get a quote for your event" style={{ background: '#ffb300', color: '#1a237e', padding: '0.8rem 1.5rem', borderRadius: '30px', fontWeight: '600', transition: 'all 0.3s ease', border: '2px solid #ffb300', cursor: 'pointer', boxShadow: '0 4px 12px rgba(255,179,0,0.3)', textAlign: 'center', minHeight: '44px', position: 'relative', overflow: 'hidden', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Get a Quote</Link>
            <Link to="/rentals" className="btn btn-outline" aria-label="Explore our rental options" style={{ background: 'transparent', border: '2px solid #ffb300', color: '#fff', padding: '0.8rem 1.5rem', borderRadius: '30px', fontWeight: '600', transition: 'all 0.3s ease', cursor: 'pointer', boxShadow: 'none', textAlign: 'center', minHeight: '44px', position: 'relative', overflow: 'hidden', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Rental Options</Link>
          </div>
        </div>
      </section>
    
      <main id="main-content">
        <div className="container">
          <section className="intro animate">
            <div className="section-title">
              <h2>Welcome to Kelsa Events</h2>
              <p>Making your special occasions truly memorable</p>
            </div>
            <div className="intro-content">
              <p>At Kelsa Events, we specialize in comprehensive event planning and premium equipment rentals in Abuja, Nigeria. From elegant weddings to corporate events, we provide professional services including chiavari chairs, banquet tables, venue decoration, and complete event management to make your special occasions truly memorable.</p>
            </div>
          </section>

          <section className="services animate">
            <div className="section-title">
              <h2>Our Services</h2>
            </div>
            <div className="cards-container">
              <div className="card">
                <img src="/assets/images/even-card.webp" alt="Event Planning Services" loading="lazy" />
                <div className="card-content">
                  <h3>Event Planning</h3>
                  <p>From weddings to corporate events, we handle all the details so you can enjoy your special day.</p>
                  <Link to="/events" className="btn" aria-label="Learn more about event planning">Learn More</Link>
                </div>
              </div>
              <div className="card">
                <img src="/assets/images/moon_chiavaari_chair.webp" alt="Equipment Rentals - Chiavari Chairs" loading="lazy" />
                <div className="card-content">
                  <h3>Equipment Rentals</h3>
                  <p>Quality chairs, tables, tents, and more available for your events.</p>
                  <Link to="/rentals" className="btn" aria-label="Explore rental options">Explore Options</Link>
                </div>
              </div>
              <div className="card">
                <img src="/assets/images/venue_decoration.webp" alt="Venue Decoration Services" loading="lazy" />
                <div className="card-content">
                  <h3>Venue Decoration</h3>
                  <p>Transform any space into a stunning venue with our decoration services.</p>
                  <Link to="/rentals" className="btn" aria-label="View decoration services">View Decorations</Link>
                </div>
              </div>
              <div className="card">
                <img src="/assets/images/kelsa_van.webp" alt="Logistics and Delivery Services" loading="lazy" />
                <div className="card-content">
                  <h3>Logistics Services</h3>
                  <p>Professional logistics and delivery services to ensure your event runs smoothly.</p>
                  <Link to="/rentals" className="btn" aria-label="Explore logistics services">Explore Logistics</Link>
                </div>
              </div>
            </div>
          </section>

          <section className="features">
            <div className="section-title">
              <h2>Why Choose Us</h2>
            </div>
            <div className="features-container">
              <div className="feature">
                <i className="fas fa-star"></i>
                <h3>Premium Quality</h3>
                <p>We provide only the highest quality equipment and services.</p>
              </div>
              <div className="feature">
                <i className="fas fa-heart"></i>
                <h3>Personalized Service</h3>
                <p>Every event is unique, and we tailor our services to your specific needs.</p>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <h3>Experienced Team</h3>
                <p>Our team has years of experience in event planning and management.</p>
              </div>
              <div className="feature">
                <i className="fas fa-images"></i>
                <h3>Event Gallery</h3>
                <p>Browse our stunning portfolio of successful events and celebrations.</p>
                <a href="/events#gallery" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '600' }}>View Gallery →</a>
              </div>
            </div>
          </section>

          <section className="cta animate" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))', padding: '6rem 0', margin: '3rem 0', textAlign: 'center', color: 'white', borderRadius: '10px' }}>
            <h2>Ready to Plan Your Next Event?</h2>
            <p>Contact us today to discuss how we can make your vision a reality.</p>
            <Link to="/contact" className="btn">Get in Touch</Link>
          </section>

          <section className="testimonials-preview animate">
            <div className="section-title">
              <h2>What Our Clients Say</h2>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Kelsa Events transformed our wedding into a magical experience. Their attention to detail and professionalism exceeded our expectations."</p>
                <div className="testimonial-author">- Chioma & Wilson, Wedding Clients</div>
              </div>
            </div>
          </section>

          <section className="newsletter-signup animate" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #2a3990 100%)', padding: '4rem 2rem', borderRadius: '15px', textAlign: 'center', color: 'white', margin: '3rem 0' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              {!isSubscribed ? (
                <>
                  <i className="fas fa-envelope" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem' }}></i>
                  <h2 style={{ marginBottom: '1rem' }}>Stay Updated!</h2>
                  <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Subscribe to our newsletter for exclusive deals, event tips, and special offers.</p>
                  
                  <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address" 
                      required 
                      disabled={isLoading}
                      style={{ 
                        flex: '1', 
                        minWidth: '250px', 
                        padding: '15px 20px', 
                        border: 'none', 
                        borderRadius: '50px', 
                        fontSize: '1rem', 
                        outline: 'none',
                        opacity: isLoading ? 0.7 : 1
                      }} 
                    />
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="btn" 
                      style={{ 
                        background: 'var(--accent)', 
                        color: 'var(--primary-dark)', 
                        padding: '15px 40px', 
                        border: 'none', 
                        borderRadius: '50px', 
                        fontWeight: '600', 
                        cursor: isLoading ? 'not-allowed' : 'pointer', 
                        transition: 'transform 0.3s ease',
                        opacity: isLoading ? 0.7 : 1
                      }}
                    >
                      {isLoading ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </form>
                  {error && (
                    <p style={{ marginTop: '1rem', color: '#ff6b6b', fontSize: '0.9rem' }}>{error}</p>
                  )}
                  <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: '0.9' }}>We respect your privacy. Unsubscribe anytime.</p>
                </>
              ) : (
                <>
                  <i className="fas fa-check-circle" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem' }}></i>
                  <h2 style={{ marginBottom: '1rem' }}>Subscription Successful!</h2>
                  <p style={{ fontSize: '1.1rem' }}>Thank you for subscribing to our newsletter. You'll receive exclusive deals, event tips, and special offers.</p>
                </>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;