import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import './EventSpaces.css'
import PageNav from './PageNav.jsx'
import PageFooter from './PageFooter.jsx'
import Testimonials from './Testimonials.jsx'

const menuItems = [
  { num: 1, label: 'Event Spaces',     path: '/event-spaces',    image: '/assets/menu-illo-event-spaces.png',    bgColor: '#faebdc' },
  { num: 2, label: 'Accommodations',   path: '/accommodations',  image: '/assets/menu-illo-accommodations.png',  bgColor: '#faebdc' },
  { num: 3, label: 'The Property',     path: '/the-property',                image: '/assets/menu-illo-the-property.png',    bgColor: '#faebdc' },
  { num: 4, label: 'About',            path: '/about',           image: '/assets/menu-illo-about.png',           bgColor: '#faebdc' },
  { num: 5, label: 'Our Team',         path: '/team',            image: '/assets/menu-illo-our-team.png',        bgColor: '#faebdc' },
  { num: 6, label: 'Future Projects',  path: '/future-projects', image: '/assets/menu-illo-future-projects.png', bgColor: '#faebdc' },
  { num: 7, label: 'Contact',          path: '/contact',         image: '/assets/menu-illo-contact.png',         bgColor: '#faebdc' },
]

const sections = [
  {
    label: 'Weddings',
    amenities: ['4 Baths', '7 Bedrooms', 'Kitchen', 'Common Areas'],
    images: [
      '/assets/es-wedding-3.jpg',
      '/assets/es-wedding-4.jpg',
      '/assets/es-wedding-5.jpg',
    ],
    headline: 'Nava Gardens offers a wedding setting shaped by history, landscape, and a spirit of gathering.',
    capacity: '150 Guests',
    body: 'Celebrate your wedding in a place designed for connection and meaningful moments. The manor and surrounding grounds provide flexible spaces for ceremonies, receptions, and time with the people who matter most. Whether indoors or outdoors, the setting supports a day that feels personal, relaxed, and rooted in place. Reserve your date and begin planning a celebration that reflects your story.',
    diamondColor: '#BAE8E5',
    learnMorePath: '/event-spaces/weddings',
  },
  {
    label: 'The Outdoors',
    amenities: ['The Courtyard', '5 Acres', 'Garden', 'Stunning Views'],
    images: [
      '/assets/es-outdoors-1.jpg',
      '/assets/es-outdoors-2.jpg',
      '/assets/es-outdoors-3.jpg',
    ],
    headline: 'Nestled in the foothills of Helena, our outdoor grounds are designed for connection.',
    capacity: '150 Guests',
    body: 'From seasonal celebrations to meaningful milestones, the outdoor spaces at Nava Gardens offer a flexible setting shaped around your vision. Surrounded by open skies and mountain views, the grounds provide room to gather, celebrate, and connect with the landscape. Reserve your date and begin shaping an experience grounded in care and intention.',
    diamondColor: '#256C39',
    learnMorePath: '/event-spaces/outdoors',
  },
  {
    label: 'The Indoors',
    amenities: ['4 Baths', '7 Bedrooms', 'Kitchen', 'Common Areas'],
    images: [
      '/assets/es-indoors-1.jpg',
      '/assets/es-indoors-2.jpg',
      '/assets/es-indoors-3.jpg',
    ],
    headline: 'Set within a historic estate rooted in over a century of community life, our indoor gathering spaces are designed for meaningful moments.',
    capacity: '150 Guests',
    body: 'From intimate gatherings to meaningful milestones, the indoor spaces at Nava Gardens provide a flexible setting designed to support your event. Warm, welcoming rooms offer space for conversation, celebration, and creativity throughout every season. Reserve your date and begin shaping an experience grounded in care and intention.',
    diamondColor: '#CB5A38',
    learnMorePath: '/event-spaces/indoors',
  },
]

function EventSection({ section }) {
  const navigate = useNavigate()
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex(i => (i + 1) % section.images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [section.images.length])

  return (
    <section className="es-section">
      <div className="es-content-row">
        <div className="es-side-diamond">
          <div className="es-diamond-inner" style={{ background: section.diamondColor }} />
        </div>

        <div className="es-content-box">
          <div className="es-photo-wrap">
            <div className="es-section-header">
              <div className="es-label-pill es-label-pill--serif">{section.label}</div>
              <div className="es-amenity-pills">
                {section.amenities.map(a => (
                  <div key={a} className="es-amenity-pill">{a}</div>
                ))}
              </div>
            </div>
            {section.images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${section.label} ${i + 1}`}
                className={`es-photo${slideIndex === i ? ' es-photo--active' : ''}`}
              />
            ))}
            <div className="es-dots">
              {section.images.map((_, i) => (
                <button
                  key={i}
                  className={`es-dot${slideIndex === i ? ' es-dot--active' : ''}`}
                  onClick={() => setSlideIndex(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="es-info-row">
            <div className="es-info-col es-info-col--desc">
              <p className="es-info-headline">{section.headline}</p>
              {section.learnMorePath
                ? <button className="es-btn es-btn--outline" onClick={() => navigate(section.learnMorePath)}>LEARN MORE</button>
                : <button className="es-btn es-btn--outline">LEARN MORE</button>
              }
            </div>
            <div className="es-info-col es-info-col--capacity">
              <p className="es-info-label">Capacity</p>
              <p className="es-info-capacity">{section.capacity}</p>
            </div>
            <div className="es-info-col es-info-col--body">
              <p className="es-info-body">{section.body}</p>
              <button className="es-btn es-btn--yellow" onClick={() => navigate('/event-spaces-inquiry')}>SUBMIT AN INQUIRY</button>
            </div>
          </div>
        </div>

        <div className="es-side-diamond">
          <div className="es-diamond-inner" style={{ background: section.diamondColor }} />
        </div>
      </div>
    </section>
  )
}

export default function EventSpaces() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="es-page">

      <section className="es-hero">
        <PageNav onMenuOpen={() => setMenuOpen(true)} />
        <h1 className="es-hero-headline">
          Nava Gardens is an event space designed for meaningful gatherings.
        </h1>
      </section>

      {sections.map(section => (
        <EventSection key={section.label} section={section} />
      ))}

      <Testimonials />

      <PageFooter />

      {menuOpen && (
        <div className="menu-overlay">
          <div className="menu-left">
            <div className="menu-title-box">
              <span className="menu-title">The Directory</span>
            </div>
            <nav className="menu-items">
              {menuItems.map((item, i) => (
                <a
                  key={i}
                  className={`menu-item${hoveredItem === i ? ' menu-item--hovered' : ''}`}
                  onMouseEnter={() => setHoveredItem(i)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => { setMenuOpen(false); navigate(item.path) }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="menu-bullet">
                    <div className="menu-bullet-diamond" />
                    <span className="menu-bullet-num">{item.num}</span>
                  </div>
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
