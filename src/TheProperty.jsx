import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import './TheProperty.css'
import PageNav from './PageNav.jsx'
import Diamond from './Diamond.jsx'
import GetInTouch from './GetInTouch.jsx'
import PageFooter from './PageFooter.jsx'

const menuItems = [
  { num: 1, label: 'Event Spaces',     path: '/event-spaces',    image: '/assets/menu-illo-event-spaces.png',    bgColor: '#faebdc' },
  { num: 2, label: 'Accommodations',   path: '/accommodations',  image: '/assets/menu-illo-accommodations.png',  bgColor: '#faebdc' },
  { num: 3, label: 'The Property',     path: '/the-property',    image: '/assets/menu-illo-the-property.png',    bgColor: '#faebdc' },
  { num: 4, label: 'About',            path: '/about',           image: '/assets/menu-illo-about.png',           bgColor: '#faebdc' },
  { num: 5, label: 'Our Team',         path: '/team',            image: '/assets/menu-illo-our-team.png',        bgColor: '#faebdc' },
  { num: 6, label: 'Future Projects',  path: '/future-projects', image: '/assets/menu-illo-future-projects.png', bgColor: '#faebdc' },
  { num: 7, label: 'Contact',          path: '/contact',         image: '/assets/menu-illo-contact.png',         bgColor: '#faebdc' },
]

const sections = [
  {
    id: 'main',
    label: 'THE MAIN AREA',
    amenities: ['4 BATHS', '7 BEDROOMS', 'KITCHEN', 'COMMON AREAS'],
    video: '/property-main.mp4',
  },
  {
    id: 'west',
    label: 'THE WEST WING',
    amenities: ['4 BATHS', '7 BEDROOMS', 'KITCHEN', 'COMMON AREAS'],
    video: '/property-west.mp4',
  },
  {
    id: 'east',
    label: 'THE EAST WING',
    amenities: ['4 BATHS', '7 BEDROOMS', 'KITCHEN', 'COMMON AREAS'],
    video: '/property-east.mp4',
  },
]

function PropertySection({ section, index }) {
  const total = 2 // one diamond each side
  return (
    <section className="prop-section">
      <div className="prop-section-header">
        <div className="prop-section-left">
          <div className="prop-label-pill">{section.label}</div>
          <div className="prop-amenity-pills">
            {section.amenities.map(a => (
              <div key={a} className="prop-amenity-pill">{a}</div>
            ))}
          </div>
        </div>
        <img src="/assets/team-label-deco.svg" alt="" className="prop-section-deco" />
      </div>

      <div className="prop-video-row">
        <Diamond color="#5F3207" index={0} total={total} />
        <div className="prop-video-wrap">
          <video
            className="prop-video"
            src={section.video}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
        <Diamond color="#5F3207" index={1} total={total} />
      </div>
    </section>
  )
}

export default function TheProperty() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="prop-page">

      {/* ── HERO ──────────────────────────────── */}
      <section className="prop-hero">
        <img src="/assets/property-hero-sketch.png" alt="" className="prop-hero-sketch" />
        <PageNav onMenuOpen={() => setMenuOpen(true)} />
        <h1 className="prop-hero-title">The Property</h1>
      </section>

      {/* ── SECTIONS ──────────────────────────── */}
      {sections.map((section, i) => (
        <PropertySection key={section.id} section={section} index={i} />
      ))}

      <GetInTouch />
      <PageFooter />

      {/* ── MENU OVERLAY ──────────────────────── */}
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
