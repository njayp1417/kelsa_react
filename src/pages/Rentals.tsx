import React from 'react';
import { Link } from 'react-router-dom';

const Rentals: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="/assets/images/rentals.webp" 
            alt="Premium Event Rentals"
            loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://source.unsplash.com/random/1600x900/?event,rental';
            }}
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Premium Event Rentals</h1>
          <p>Elevate your event with our high-quality rental equipment and decor</p>
          <div className="hero-buttons">
            <a href="#rental-categories" className="btn">Explore Rentals</a>
            <a href="#logistics-services" className="btn btn-outline">Logistics Services</a>
          </div>
        </div>
      </section>

      <main id="main-content">
        <div className="container">
          {/* Rental Categories */}
          <section className="section" style={{ marginTop: 'var(--spacing-xxl)' }}>
            <div className="section-title">
              <h2>Our Rental Categories</h2>
              <p>Everything you need to create the perfect event atmosphere</p>
            </div>
          </section>

          <div id="rental-categories" className="cards-container">
            <div className="card animate">
              <div className="card-img">
                <img 
                  src="/assets/images/moon_chiavaari_chair.webp" 
                  alt="Furniture Rentals" 
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3>Furniture Rentals</h3>
                <p>Luxury Chiavari chairs, VIP seating, banquet tables, and elegant furniture for your event.</p>
                <a href="#furniture-rentals" className="btn">View Details</a>
              </div>
            </div>

            <div className="card animate">
              <div className="card-img">
                <img 
                  src="/assets/images/venue_decoration.webp" 
                  alt="Venue & Decor" 
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3>Venue & Decor</h3>
                <p>Arabian canopies, linens, centerpieces, and decorative elements to transform your space.</p>
                <a href="#decor-rentals" className="btn">View Details</a>
              </div>
            </div>

            <div className="card animate">
              <div className="card-img">
                <img 
                  src="/assets/images/wine_glass.webp" 
                  alt="Tableware & Catering" 
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3>Tableware & Catering Equipment</h3>
                <p>Fine china, glassware, cutlery, and traditional serving pieces for elegant dining.</p>
                <a href="#tableware-rentals" className="btn">View Details</a>
              </div>
            </div>

            <div className="card animate">
              <div className="card-img">
                <img 
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop" 
                  alt="AV Equipment" 
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3>Audio Visual & Equipment</h3>
                <p>Professional sound systems, lighting, projectors, and technical equipment for events.</p>
                <a href="#equipment-rentals" className="btn">View Details</a>
              </div>
            </div>
          </div>

          {/* Furniture Rentals */}
          <section id="furniture-rentals" className="section">
            <div className="section-title">
              <h2>Furniture Rentals</h2>
            </div>
            <p style={{ paddingBottom: '2rem', textAlign: 'center' }}>
              Elegant and comfortable seating and table options to create the perfect atmosphere for your event.
            </p>
            
            <div className="cards-container">
              <div className="card">
                <div className="card-img">
                  <img 
                    src="/assets/images/moon_chiavaari_chair.webp" 
                    alt="Luxury Chairs" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Luxury Chiavari & VIP Chairs</h3>
                  <p>Premium seating options for elegant events and special occasions.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-img">
                  <img 
                    src="/assets/images/circle_banquet_table.webp" 
                    alt="Banquet Tables" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Round & Rectangular Banquet Tables</h3>
                  <p>Various table sizes and shapes to accommodate your guest count.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-img">
                  <img 
                    src="/assets/images/plastic_chairs.webp" 
                    alt="Outdoor Furniture" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Lush Carpet Grass & Plastic Chairs and Tables</h3>
                  <p>Complete outdoor setup with carpet grass and plastic furniture.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-img">
                  <img 
                    src="/assets/images/serpentine_table.webp" 
                    alt="Serpentine Tables" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Serpentine Tables</h3>
                  <p>Curved S-shaped tables perfect for buffet setups and creative event layouts.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Decor Rentals */}
          <section id="decor-rentals" className="section">
            <div className="section-title">
              <h2>Venue & Decor Rentals</h2>
            </div>
            <p style={{ paddingBottom: '2rem', textAlign: 'center' }}>
              Transform your event space with our elegant decorative elements and venue enhancements.
            </p>
            
            <div className="cards-container">
              <div className="card">
                <div className="card-img">
                  <img 
                    src="https://i.pinimg.com/736x/f4/4e/44/f44e44427989f162b235c22c1dc441ea.jpg" 
                    alt="Arabian Canopies" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Elegant Arabian Canopies</h3>
                  <p>Stunning overhead coverage for outdoor and indoor events.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-img">
                  <img 
                    src="https://i.pinimg.com/736x/a7/50/0c/a7500c1ca8f2348a55bb6f60894c8868.jpg" 
                    alt="Linens & Covers" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Chair Covers, Fine Linens & Napkins</h3>
                  <p>Complete table dressing with chair covers, linens, and napkins.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-img">
                  <img 
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop" 
                    alt="Centerpieces" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Centerpieces & Fresh Floral Arrangements</h3>
                  <p>Beautiful centerpieces and fresh floral arrangements for your tables.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Tableware Rentals */}
          <section id="tableware-rentals" className="section">
            <div className="section-title">
              <h2>Tableware & Catering Equipment</h2>
            </div>
            <p style={{ paddingBottom: '2rem', textAlign: 'center' }}>
              Complete your dining experience with our premium tableware and serving equipment.
            </p>
            
            <div className="cards-container">
              <div className="card">
                <div className="card-img">
                  <img 
                    src="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhdGVzJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" 
                    alt="Breakable Plates" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Breakable Plates</h3>
                  <p>Quality breakable plates for elegant dining service.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-img">
                  <img 
                    src="/assets/images/wine_glass.webp" 
                    alt="Wine Glasses" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Wine Glasses</h3>
                  <p>Premium wine glasses for elegant beverage service.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-img">
                  <img 
                    src="/assets/images/champagne_glass.webp" 
                    alt="Champagne Glasses" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Champagne Glasses</h3>
                  <p>Elegant champagne flutes for toasts and celebrations.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-img">
                  <img 
                    src="/assets/images/Pink_table_cloth.webp" 
                    alt="Table Covers & Linens" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Table Covers & Linens</h3>
                  <p>Premium table covers, runners, and linens in various colors to match your event theme.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-img">
                  <img 
                    src="/assets/images/water_glass.webp" 
                    alt="Water Glasses" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Water Glasses</h3>
                  <p>Quality water glasses for beverage service at your event.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Equipment Rentals */}
          <section id="equipment-rentals" className="section">
            <div className="section-title">
              <h2>Audio Visual & Equipment Rentals</h2>
            </div>
            <p style={{ paddingBottom: '2rem', textAlign: 'center' }}>
              Professional AV equipment and technical solutions to enhance your event experience.
            </p>
            
            <div className="cards-container">
              <div className="card">
                <div className="card-img">
                  <img 
                    src="https://media.istockphoto.com/id/487205823/photo/audio-speakers-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=r5x4DxxJwHp1Y5lcP2FPm6E_YaXKGQa_GFRZBPwhA_Y=" 
                    alt="Sound Systems" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Sound Systems</h3>
                  <p>Professional audio equipment including speakers, microphones, and mixing consoles for crystal clear sound.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-img">
                  <img 
                    src="https://images.unsplash.com/photo-1597333936102-0d9f997042ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmclMjBwcm9qZWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" 
                    alt="Projection Equipment" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Projection & Screens</h3>
                  <p>High-definition projectors and screens for presentations, movies, and visual displays.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-badge">Popular</div>
                <div className="card-img">
                  <img 
                    src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop" 
                    alt="LED Lighting" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>LED Lighting & Effects</h3>
                  <p>Dynamic LED lighting, stage lights, and special effects to create the perfect ambiance.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Logistics Services */}
          <section id="logistics-services" className="section">
            <div className="section-title">
              <h2>Kelsa Logistics Services</h2>
              <p>Making movement easy with reliable, affordable delivery solutions</p>
            </div>
            
            <div 
              className="card" 
              style={{ 
                background: 'linear-gradient(135deg, var(--primary) 0%, #2a3990 100%)', 
                color: 'white', 
                marginBottom: '2rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', opacity: 0.2 }}>
                <img src="/assets/images/kelsa_van.webp" alt="Kelsa Van" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Kelsa T and T Enterprise</h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                  Your trusted partner for reliable, affordable, and customer-focused logistics solutions. 
                  We make movement easy for rental items, personal goods, and business deliveries.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fas fa-truck" style={{ fontSize: '2rem', color: 'var(--accent)', marginBottom: '0.5rem' }}></i>
                    <p><strong>Well-Maintained Vans</strong></p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fas fa-users" style={{ fontSize: '2rem', color: 'var(--accent)', marginBottom: '0.5rem' }}></i>
                    <p><strong>Trained Team</strong></p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fas fa-clock" style={{ fontSize: '2rem', color: 'var(--accent)', marginBottom: '0.5rem' }}></i>
                    <p><strong>Punctual Delivery</strong></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cards-container">
              <div className="card">
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <i className="fas fa-calendar-alt" style={{ fontSize: '2.5rem', color: 'var(--accent)' }}></i>
                </div>
                <h3>Event Logistics</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li><i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Delivery & pickup of chairs, tables, canopy</li>
                  <li><i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Setup and breakdown services</li>
                  <li><i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Same-day and scheduled deliveries</li>
                </ul>
              </div>
              
              <div className="card">
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <i className="fas fa-home" style={{ fontSize: '2.5rem', color: 'var(--accent)' }}></i>
                </div>
                <h3>Personal Item Movement</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li><i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Relocations and small moves</li>
                  <li><i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Furniture and appliance transport</li>
                  <li><i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Safe handling of fragile items</li>
                </ul>
              </div>
              
              <div className="card">
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <i className="fas fa-briefcase" style={{ fontSize: '2.5rem', color: 'var(--accent)' }}></i>
                </div>
                <h3>Business Delivery</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li><i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Product & package transport for SMEs</li>
                  <li><i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Regular delivery routes</li>
                  <li><i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Inventory and stock transfers</li>
                </ul>
              </div>
              
              <div className="card">
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <i className="fas fa-plane" style={{ fontSize: '2.5rem', color: 'var(--accent)' }}></i>
                </div>
                <h3>Airport Services</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li><i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Airport pickup and drop-off</li>
                  <li><i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Luggage transfer services</li>
                  <li><i className="fas fa-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> 24/7 availability for flights</li>
                </ul>
              </div>
            </div>
            
            <div className="card" style={{ background: 'var(--accent)', color: 'var(--primary-dark)', textAlign: 'center', marginTop: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Our Professional Values</h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <div><i className="fas fa-heart" style={{ marginRight: '8px' }}></i><strong>Care</strong></div>
                <div><i className="fas fa-clock" style={{ marginRight: '8px' }}></i><strong>Punctuality</strong></div>
                <div><i className="fas fa-star" style={{ marginRight: '8px' }}></i><strong>Professionalism</strong></div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1.5rem', borderRadius: '10px', marginTop: '1rem' }}>
                <h4 style={{ marginBottom: '1rem' }}>Need a van for your next delivery?</h4>
                <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}><strong>Contact us today — we move it fast, safe, and right on time.</strong></p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="tel:+2349134636775" className="btn" style={{ background: 'var(--primary)', color: 'white' }}>
                    <i className="fas fa-phone"></i> Call Now
                  </a>
                  <a href="https://wa.me/2349134636775" className="btn" style={{ background: '#25D366', color: 'white' }} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i> WhatsApp
                  </a>
                </div>
                <p style={{ marginTop: '1rem', fontWeight: 600 }}><i className="fas fa-calendar-check" style={{ marginRight: '8px' }}></i>Available 7 days a week</p>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
          </div>
          <div className="testimonial">
            <p>"Kelsa Events provided exceptional rental equipment for our wedding. Everything was delivered on time and in perfect condition. Their team was professional and helpful throughout the entire process."</p>
            <div className="testimonial-author">- Chioma & Wilson, Wedding Clients</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
          </div>
          <div className="features-container">
            <div className="feature">
              <i className="fas fa-check-circle"></i>
              <h3>Quality Guaranteed</h3>
              <p>All our rental items are regularly maintained and inspected for quality.</p>
            </div>
            
            <div className="feature">
              <i className="fas fa-truck"></i>
              <h3>Delivery & Setup</h3>
              <p>We offer delivery, setup, and pickup services for your convenience.</p>
            </div>
            
            <div className="feature">
              <i className="fas fa-star"></i>
              <h3>Premium Selection</h3>
              <p>Choose from our wide range of high-quality rental items.</p>
            </div>
            
            <div className="feature">
              <i className="fas fa-headset"></i>
              <h3>24/7 Support</h3>
              <p>Our team is always available to assist with any questions or concerns.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rentals;