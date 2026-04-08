import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import './OutdoorsDetail.css'
import PageNav from './PageNav.jsx'
import Testimonials from './Testimonials.jsx'
import PageFooter from './PageFooter.jsx'

const menuItems = [
  { num: 1, label: 'Event Spaces',     path: '/event-spaces',    image: '/assets/menu-illo-event-spaces.png',    bgColor: '#faebdc' },
  { num: 2, label: 'Accommodations',   path: '/accommodations',  image: '/assets/menu-illo-accommodations.png',  bgColor: '#faebdc' },
  { num: 3, label: 'The Property',     path: '/the-property',                image: '/assets/menu-illo-the-property.png',    bgColor: '#faebdc' },
  { num: 4, label: 'About',            path: '/about',           image: '/assets/menu-illo-about.png',           bgColor: '#faebdc' },
  { num: 5, label: 'Our Team',         path: '/team',            image: '/assets/menu-illo-our-team.png',        bgColor: '#faebdc' },
  { num: 6, label: 'Future Projects',  path: '/future-projects', image: '/assets/menu-illo-future-projects.png', bgColor: '#faebdc' },
  { num: 7, label: 'Contact',          path: '/contact',         image: '/assets/menu-illo-contact.png',         bgColor: '#faebdc' },
]

// First 5 shown in the grid; all 6 available in the lightbox
const gridPhotos = [
  '/assets/es-outdoors-1.jpg',
  '/assets/es-outdoors-2.jpg',
  '/assets/es-outdoors-3.jpg',
  '/assets/es-outdoors-4.jpg',
  '/assets/es-outdoors-5.jpg',
]

const photos = [
  ...gridPhotos,
  '/assets/es-outdoors-6.jpg',
]

const features = [
  ['Kitchen', 'Restrooms'],
  ['Covered Outdoor Patio Area', 'Wheelchair Accessible'],
  ['Speakers', 'WiFi'],
]

export default function OutdoorsDetail() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [rulesOpen, setRulesOpen] = useState(false)
  const [cancelOpen, setCancelOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const openLightbox = (i) => { setLightboxIndex(i); setLightboxOpen(true) }
  const closeLightbox = () => setLightboxOpen(false)
  const prevPhoto = () => setLightboxIndex(i => (i - 1 + photos.length) % photos.length)
  const nextPhoto = () => setLightboxIndex(i => (i + 1) % photos.length)

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prevPhoto()
      else if (e.key === 'ArrowRight') nextPhoto()
      else if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen])

  return (
    <div className="od-page">

      {/* Hero */}
      <section className="od-hero">
        <PageNav onMenuOpen={() => setMenuOpen(true)} />
        <div className="od-hero-body">
          <div className="od-eyebrow-pill">EVENT SPACES</div>
          <h1 className="od-hero-headline">The Outdoors</h1>
        </div>
      </section>

      <div className="od-content">

      {/* Photo grid */}
      <div className="od-photo-grid">
        <div className="od-photo-main" onClick={() => openLightbox(0)}>
          <img src={gridPhotos[0]} alt="The Outdoors" />
          <button className="od-view-all-btn" onClick={e => { e.stopPropagation(); openLightbox(0) }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="6" height="6" stroke="#272727" strokeWidth="3"/>
              <rect x="9" y="1" width="6" height="6" stroke="#272727" strokeWidth="3"/>
              <rect x="1" y="9" width="6" height="6" stroke="#272727" strokeWidth="3"/>
              <rect x="9" y="9" width="6" height="6" stroke="#272727" strokeWidth="3"/>
            </svg>
            VIEW ALL IMAGES
          </button>
        </div>
        <div className="od-photo-sub-grid">
          <div className="od-photo-sub-item" onClick={() => openLightbox(1)}><img src={gridPhotos[1]} alt="" /></div>
          <div className="od-photo-sub-item" onClick={() => openLightbox(2)}><img src={gridPhotos[2]} alt="" /></div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="od-stats-bar">
        <div className="od-stats-pills">
          {['The Courtyard', 'Garden', 'Stunning Views'].map(p => (
            <div key={p} className="od-stats-pill">{p}</div>
          ))}
        </div>
        <div className="od-stats-right">
          <div className="od-stat">
            <img src="/assets/icon-person.svg" alt="" className="od-stat-icon" />
            <span>150 Guest Capacity</span>
          </div>
          <div className="od-stat">
            <img src="/assets/icon-clock.svg" alt="" className="od-stat-icon" />
            <span>3 Hrs. Minimum</span>
          </div>
          <div className="od-stat">
            <img src="/assets/icon-measure.svg" alt="" className="od-stat-icon" />
            <span>5 Acres</span>
          </div>
        </div>
      </div>

      {/* Description + Features */}
      <div className="od-desc-box">
        <div className="od-desc-left">
          <h2 className="od-desc-headline">Nestled in the foothills of Helena, our outdoor grounds are designed for connection.</h2>
          <p className="od-desc-body">From seasonal celebrations to meaningful milestones, the outdoor spaces at Nava Gardens offer a flexible setting shaped around your vision. Surrounded by open skies and mountain views, the grounds provide room to gather, celebrate, and connect with the landscape. Reserve your date and begin shaping an experience grounded in care and intention.</p>
        </div>
        <div className="od-desc-right">
          <p className="od-features-label">FEATURES</p>
          <div className="od-features-grid">
            {features.map(([left, right], i) => (
              <React.Fragment key={i}>
                <div className="od-feature-item">
                  <div className="od-feature-bullet" />
                  <span>{left}</span>
                </div>
                {right && (
                  <div className="od-feature-item">
                    <div className="od-feature-bullet" />
                    <span>{right}</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="od-features-note">Don't see an amenity you're looking for? Include details in your inquiry form.</p>
        </div>
      </div>

      {/* Policy row */}
      <div className="od-policy-row">
        <div className="od-policy-box">
          <h3 className="od-policy-title">Property Rules</h3>
          <div className="od-policy-body">
            <p>• No smoking</p>
            <p>• No hard liquor (only white wine, beer, champagne allowed)</p>
            <p>• Guests must provide additional insurance and valid permits for all vendors</p>
            {rulesOpen && <>
              <p>• No tape on walls, glitter or confetti</p>
              <p>• All rentals include setup and teardown time</p>
              <p>• Furniture must be moved back to where you found it</p>
              <p>• Guests must remove any equipment they bring into the space by the end of the booking</p>
              <p>*All ages are allowed in the space</p>
            </>}
          </div>
          <button className="od-read-more" onClick={() => setRulesOpen(o => !o)}>
            {rulesOpen ? 'READ LESS' : 'READ MORE'}
            <img src="/assets/icon-arrow-down.svg" alt="" className={`od-read-more-arrow${rulesOpen ? ' od-read-more-arrow--open' : ''}`} />
          </button>
        </div>

        <div className="od-policy-box">
          <h3 className="od-policy-title">Cancellation Policy</h3>
          <p className="od-policy-body-text">
            Guests may cancel their Booking until 90 days before the event start time and will receive a full refund (including all Fees) of their Booking Price.
            {cancelOpen && <> Guests may cancel their Booking between 90 days and 14 days before the event start time and receive a 50% refund (excluding Fees) of their Booking Price. Cancellations submitted less than 14 days before the Event start time are not refundable. <a href="#" className="od-policy-link">Learn More</a></>}
          </p>
          {cancelOpen && (
            <p className="od-policy-fine-print">All Bookings are subject to Peerspace's Grace Period policy which provides a full refund for Bookings cancelled within 24 hours from receipt of a Booking Confirmation but no later than 48 hours prior to the Event start time.</p>
          )}
          <button className="od-read-more" onClick={() => setCancelOpen(o => !o)}>
            {cancelOpen ? 'READ LESS' : 'READ MORE'}
            <img src="/assets/icon-arrow-down.svg" alt="" className={`od-read-more-arrow${cancelOpen ? ' od-read-more-arrow--open' : ''}`} />
          </button>
        </div>

        <div className="od-policy-box">
          <h3 className="od-policy-title">Parking</h3>
          <p className="od-policy-body-text">Nearby public parking lot and street parking are available.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="od-cta-row">
        <button className="es-btn es-btn--yellow od-cta-btn" onClick={() => navigate('/event-spaces-inquiry')}>
          SUBMIT AN INQUIRY
        </button>
      </div>

      </div>{/* end od-content */}

      <Testimonials />
      <PageFooter />

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="od-lightbox" onClick={closeLightbox}>
          <span className="od-lightbox-counter">{lightboxIndex + 1} / {photos.length}</span>
          <button className="od-lightbox-close" onClick={closeLightbox}>
            CLOSE
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <line x1="1" y1="1" x2="15" y2="15" stroke="#FDF3E2" strokeWidth="1.5"/>
              <line x1="15" y1="1" x2="1" y2="15" stroke="#FDF3E2" strokeWidth="1.5"/>
            </svg>
          </button>
          <button className="od-lightbox-prev" onClick={e => { e.stopPropagation(); prevPhoto() }}>
            <img src="/assets/lightbox-arrow-left.svg" alt="Previous" className="od-lightbox-arrow-img od-lightbox-arrow-img--flipped" />
          </button>
          <img
            className="od-lightbox-img"
            src={photos[lightboxIndex]}
            alt=""
            onClick={e => e.stopPropagation()}
          />
          <button className="od-lightbox-next" onClick={e => { e.stopPropagation(); nextPhoto() }}>
            <img src="/assets/lightbox-arrow-right.svg" alt="Next" className="od-lightbox-arrow-img" />
          </button>
          <div className="od-lightbox-dots" onClick={e => e.stopPropagation()}>
            {photos.map((_, i) => (
              <button
                key={i}
                className={`od-lightbox-dot${lightboxIndex === i ? ' od-lightbox-dot--active' : ''}`}
                onClick={() => setLightboxIndex(i)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Menu overlay */}
      {menuOpen && (
        <div className="menu-overlay">
          <div className="menu-left">
            <div className="menu-title-box"><span className="menu-title">The Directory</span></div>
            <nav className="menu-items">
              {menuItems.map((item, i) => (
                <a key={i}
                  className={`menu-item${hoveredItem === i ? ' menu-item--hovered' : ''}`}
                  onMouseEnter={() => setHoveredItem(i)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => { setMenuOpen(false); navigate(item.path) }}
                  style={{ cursor: 'pointer' }}>
                  <div className="menu-bullet"><div className="menu-bullet-diamond" /><span className="menu-bullet-num">{item.num}</span></div>
                  <span className="menu-item-label">{item.label}</span>
                  <img src="/assets/menu-arrow-badge.svg" alt="" className="menu-item-arrow" />
                </a>
              ))}
            </nav>
          </div>
          <div className="menu-right" style={{ background: hoveredItem !== null ? menuItems[hoveredItem].bgColor : '#faebdc' }}>
            <img
                  src={hoveredItem !== null ? menuItems[hoveredItem].image : '/assets/menu-illo-default.png'}
                  alt=""
                  className="menu-panel-img"
                />
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              <span className="close-text">CLOSE</span>
              <span className="menu-diamond">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <polygon points="0,13 13,0 26,13" fill="#BAE8E5" />
                  <polygon points="0,13 26,13 13,26" fill="#5F3207" />
                  <polygon points="13,0 26,13 13,26 0,13" fill="none" stroke="#272727" strokeWidth="3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
