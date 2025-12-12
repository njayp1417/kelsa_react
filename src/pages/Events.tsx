import React from 'react';
import { Link } from 'react-router-dom';

const Events: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="/assets/images/even-card.webp" 
            alt="Event Planning"
            loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://source.unsplash.com/random/1600x900/?event,wedding';
            }}
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Event Planning Services</h1>
          <p>Creating unforgettable experiences for every occasion</p>
          <div className="hero-buttons">
            <a href="#services" className="btn">Explore Services</a>
            <a href="#gallery" className="btn btn-outline">View Gallery</a>
            <Link to="/contact" className="btn">Get a Quote</Link>
          </div>
        </div>
      </section>

      <main id="main-content">
        <div className="container">
          {/* Services Section */}
          <section id="services" className="section">
            <div className="section-title">Our Event Services</div>
            <div className="section-subtitle">Comprehensive planning and execution for all types of events</div>
            
            <div className="cards-container">
            <div className="card animate">
              <div className="card-badge">Popular</div>
              <div className="card-img">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1726797756042-cd73088a0ae9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZyUyMGNlbGVicmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" 
                  alt="Wedding Planning" 
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3>Wedding Planning</h3>
                <p>We offer comprehensive wedding planning services, from venue selection to decoration and catering. Let us make your special day truly memorable.</p>
                <a href="#wedding-details" className="btn">Learn More</a>
              </div>
            </div>
            
            <div className="card animate">
              <div className="card-img">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop" 
                  alt="Corporate Events" 
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3>Corporate Events</h3>
                <p>Our team specializes in organizing corporate events, including conferences, seminars, and team-building activities tailored to your company's needs.</p>
                <a href="#corporate-details" className="btn">Learn More</a>
              </div>
            </div>
            
            <div className="card animate">
              <div className="card-img">
                <img 
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop" 
                  alt="Private Parties" 
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3>Private Parties</h3>
                <p>Celebrate your special occasions with our tailored private party services, including birthdays, anniversaries, and more.</p>
                <a href="#private-details" className="btn">Learn More</a>
              </div>
            </div>
            
            <div className="card animate">
              <div className="card-img">
                <img 
                  src="https://images.unsplash.com/photo-1556125574-d7f27ec36a06?w=600&h=400&fit=crop" 
                  alt="Fundraisers" 
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3>Fundraisers</h3>
                <p>We assist in planning and executing successful fundraising events to help you achieve your goals and maximize donations.</p>
                <a href="#fundraiser-details" className="btn">Learn More</a>
              </div>
            </div>
            </div>
          </section>

          {/* Wedding Details */}
          <section id="wedding-details" className="mt-3 mb-3">
            <div className="section-title">
              <h2>Wedding Planning</h2>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop" 
                  alt="Wedding Ceremony" 
                  style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}
                />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h3>Your Dream Wedding</h3>
                <p>At Kelsa Events, we understand that your wedding day is one of the most important days of your life. Our dedicated wedding planning team works closely with you to bring your vision to life, handling every detail so you can focus on enjoying your special day.</p>
                
                <h4 className="mt-3">Our Wedding Services Include:</h4>
                <ul style={{ paddingLeft: '1rem' }}>
                  <li>• Venue selection and coordination</li>
                  <li>• Theme development and design</li>
                  <li>• Vendor management (catering, photography, entertainment)</li>
                  <li>• Custom decoration and floral arrangements</li>
                  <li>• Timeline creation and management</li>
                  <li>• Day-of coordination and support</li>
                  <li>• Budget planning and management</li>
                </ul>
                
                <Link to="/contact" className="btn mt-3">Request Wedding Consultation</Link>
              </div>
            </div>
          </section>

          {/* Corporate Details */}
          <section id="corporate-details" className="section">
            <div className="section-title">
              <h2>Corporate Events</h2>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px', order: 2 }}>
                <img 
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop" 
                  alt="Corporate Conference" 
                  style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}
                />
              </div>
              <div style={{ flex: '1 1 400px', order: 1 }}>
                <h3>Professional Corporate Events</h3>
                <p>From small team meetings to large conferences, our corporate event planning services are designed to create professional, engaging, and productive business events that reflect your company's values and objectives.</p>
                
                <h4 className="mt-3">Our Corporate Event Services Include:</h4>
                <ul style={{ paddingLeft: '1rem' }}>
                  <li>• Conference and seminar planning</li>
                  <li>• Product launches and promotional events</li>
                  <li>• Team building activities and retreats</li>
                  <li>• Award ceremonies and galas</li>
                  <li>• Trade shows and exhibitions</li>
                  <li>• Technical setup and AV management</li>
                  <li>• Catering and refreshment coordination</li>
                </ul>
                
                <Link to="/contact" className="btn mt-3">Request Corporate Consultation</Link>
              </div>
            </div>
          </section>

          {/* Private Details */}
          <section id="private-details" className="section">
            <div className="section-title">
              <h2>Private Parties</h2>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop" 
                  alt="Birthday Celebration" 
                  style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}
                />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h3>Memorable Celebrations</h3>
                <p>Life is full of moments worth celebrating. Our private party planning services help you create unforgettable experiences for birthdays, anniversaries, graduations, and other special occasions.</p>
                
                <h4 className="mt-3">Our Private Party Services Include:</h4>
                <ul style={{ paddingLeft: '1rem' }}>
                  <li>• Birthday parties and milestone celebrations</li>
                  <li>• Anniversary parties</li>
                  <li>• Graduation celebrations</li>
                  <li>• Holiday parties</li>
                  <li>• Theme development and execution</li>
                  <li>• Entertainment booking and coordination</li>
                  <li>• Custom decorations and setup</li>
                </ul>
                
                <Link to="/contact" className="btn mt-3">Plan Your Celebration</Link>
              </div>
            </div>
          </section>

          {/* Fundraiser Details */}
          <section id="fundraiser-details" className="section">
            <div className="section-title">
              <h2>Fundraisers</h2>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px', order: 2 }}>
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop" 
                  alt="Charity Gala" 
                  style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}
                />
              </div>
              <div style={{ flex: '1 1 400px', order: 1 }}>
                <h3>Impactful Fundraising Events</h3>
                <p>We help organizations plan and execute successful fundraising events that maximize donations while creating meaningful experiences for attendees. Our team understands the unique requirements of fundraisers and works to ensure your cause gets the attention it deserves.</p>
                
                <h4 className="mt-3">Our Fundraising Event Services Include:</h4>
                <ul style={{ paddingLeft: '1rem' }}>
                  <li>• Charity galas and dinners</li>
                  <li>• Auctions and raffles</li>
                  <li>• Benefit concerts and performances</li>
                  <li>• Donor recognition events</li>
                  <li>• Sponsorship acquisition support</li>
                  <li>• Donation collection systems</li>
                  <li>• Impact presentation and storytelling</li>
                </ul>
                
                <Link to="/contact" className="btn mt-3">Plan Your Fundraiser</Link>
              </div>
            </div>
          </section>

          {/* Event Planning Process */}
          <section className="section-title">
            <h2>Our Event Planning Process</h2>
          </section>
          
          <div className="features-container">
            <div className="feature">
              <i className="fas fa-comments"></i>
              <h3>1. Consultation</h3>
              <p>We begin with a detailed consultation to understand your vision, requirements, and budget.</p>
            </div>
            
            <div className="feature">
              <i className="fas fa-clipboard-list"></i>
              <h3>2. Planning</h3>
              <p>Our team develops a comprehensive plan including timeline, vendors, and logistics.</p>
            </div>
            
            <div className="feature">
              <i className="fas fa-paint-brush"></i>
              <h3>3. Design</h3>
              <p>We create a custom design concept that brings your vision to life.</p>
            </div>
            
            <div className="feature">
              <i className="fas fa-tasks"></i>
              <h3>4. Coordination</h3>
              <p>We handle all vendor coordination, logistics, and timeline management.</p>
            </div>
            
            <div className="feature">
              <i className="fas fa-calendar-check"></i>
              <h3>5. Execution</h3>
              <p>On the day of your event, our team ensures everything runs smoothly.</p>
            </div>
          </div>

          {/* Gallery Section */}
          <section id="gallery" className="section">
            <div className="section-title">Event Gallery</div>
            <div className="section-subtitle">Showcasing our successful events and transformations</div>
            
            <div className="cards-container">
              <div className="card">
                <div className="card-img">
                  <img 
                    src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop" 
                    alt="Elegant Wedding Setup" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Elegant Wedding Ceremonies</h3>
                  <p>Beautiful wedding setups with premium decorations and floral arrangements.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-img">
                  <img 
                    src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop" 
                    alt="Corporate Event" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Corporate Conferences</h3>
                  <p>Professional corporate events with modern AV setup and elegant staging.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-img">
                  <img 
                    src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop" 
                    alt="Birthday Celebration" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Birthday Celebrations</h3>
                  <p>Colorful and fun birthday party setups with themed decorations.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-img">
                  <img 
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop" 
                    alt="Gala Dinner" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Gala Dinners</h3>
                  <p>Sophisticated gala dinner arrangements with premium table settings.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-img">
                  <img 
                    src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop" 
                    alt="Outdoor Wedding" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Outdoor Weddings</h3>
                  <p>Beautiful outdoor wedding ceremonies with canopy and garden decorations.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-img">
                  <img 
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop" 
                    alt="Anniversary Party" 
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3>Anniversary Celebrations</h3>
                  <p>Romantic anniversary party setups with elegant lighting and decor.</p>
                </div>
              </div>
            </div>
            
            <div className="card" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #2a3990 100%)', color: 'white', textAlign: 'center', marginTop: '2rem' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>See Your Event Come to Life</h3>
              <p style={{ marginBottom: '1.5rem' }}>Every event tells a unique story. Our gallery showcases the transformation from vision to reality, demonstrating our commitment to creating unforgettable experiences.</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>Dreams</div>
                  <p>Realized</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>100%</div>
                  <p>Client Satisfaction</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>5+</div>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="section">
            <div className="section-title">Client Testimonials</div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Kelsa Events transformed our wedding into a magical experience. Their attention to detail and professionalism exceeded our expectations. Every aspect was perfectly executed, and our guests are still talking about it months later!"</p>
                <div className="testimonial-author">
                  <img src="https://source.unsplash.com/random/100x100/?woman" alt="Chioma" />
                  <div>
                    <strong>Chioma & Wilson</strong><br />
                    <span>Wedding Clients</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Our annual corporate conference was flawlessly organized by Kelsa Events. From the venue selection to the catering and technical setup, everything was handled professionally. They understood our company culture and created an event that perfectly aligned with our brand."</p>
                <div className="testimonial-author">
                  <img src="https://source.unsplash.com/random/100x100/?man" alt="Nelson" />
                  <div>
                    <strong>Nelson Jackson</strong><br />
                    <span>Director of Operations, Bruno Ventures</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section 
            className="section text-center" 
            style={{ 
              background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://source.unsplash.com/random/1600x900/?celebration") no-repeat center center/cover', 
              padding: '4rem 2rem', 
              margin: '3rem 0', 
              borderRadius: 'var(--radius)', 
              color: 'white'
            }}
          >
            <h2>Ready to Plan Your Perfect Event?</h2>
            <p className="mb-3">Contact us today to discuss how we can make your vision a reality.</p>
            <Link to="/contact" className="btn">Get Started</Link>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Events;