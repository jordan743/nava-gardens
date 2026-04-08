import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PageNav from './PageNav'
import './App.css'

// Colors from Figma
// Cream: #FDF3E2
// Dark: #262626
// Yellow: #FFB921
// Blue: #BAE8E5
// Brown: #5F3207

const menuItems = [
  { num: 1, label: 'Event Spaces',     path: '/event-spaces',    image: '/assets/menu-illo-event-spaces.png',    bgColor: '#faebdc' },
  { num: 2, label: 'Accommodations',   path: '/accommodations',  image: '/assets/menu-illo-accommodations.png',  bgColor: '#faebdc' },
  { num: 3, label: 'The Property',     path: '/the-property',                image: '/assets/menu-illo-the-property.png',    bgColor: '#faebdc' },
  { num: 4, label: 'About',            path: '/about',           image: '/assets/menu-illo-about.png',           bgColor: '#faebdc' },
  { num: 5, label: 'Our Team',         path: '/team',            image: '/assets/menu-illo-our-team.png',        bgColor: '#faebdc' },
  { num: 6, label: 'Future Projects',  path: '/future-projects', image: '/assets/menu-illo-future-projects.png', bgColor: '#faebdc' },
  { num: 7, label: 'Contact',          path: '/contact',         image: '/assets/menu-illo-contact.png',         bgColor: '#faebdc' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [bookOpen, setBookOpen] = useState(false)
  const navigate = useNavigate()
  // LOADING SCREEN — commented out, re-enable by uncommenting below
  // const [loading, setLoading] = useState(true)
  // const [fadingOut, setFadingOut] = useState(false)
  // useEffect(() => {
  //   const fadeTimer = setTimeout(() => setFadingOut(true), 2800)
  //   const doneTimer = setTimeout(() => setLoading(false), 3400)
  //   return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer) }
  // }, [])

  return (
    <>
    {/* LOADING SCREEN — re-enable by restoring state/useEffect above and uncommenting:
    {loading && (
      <div className={`loading-screen${fadingOut ? ' loading-screen--out' : ''}`}>
        <img src="/assets/loading-bg.jpg" alt="" className="loading-bg" />
        <div className="loading-shape-wrap">
          <img src="/assets/loading-shape.svg" alt="" className="loading-shape-base" />
          <img src="/assets/loading-shape.svg" alt="" className="loading-shape-fill" />
          <img src="/assets/loading-wordmark.svg" alt="Nava Gardens" className="loading-wordmark" />
        </div>
      </div>
    )}
    */}
    <div className="page-wrapper">
      <div className="site-frame">
        <div className="hero">
          <video className="hero-bg" src="/hero.mp4" autoPlay muted loop playsInline />
          <div className="hero-grain" />

          {/* Menu Overlay */}
          {menuOpen && (
            <div className="menu-overlay">
              {/* Left panel */}
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
                      <img
                        src="/assets/menu-arrow-badge.svg"
                        alt=""
                        className="menu-item-arrow"
                      />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Right panel */}
              <div
                className="menu-right"
                style={{ background: hoveredItem !== null ? menuItems[hoveredItem].bgColor : menuItems[0].bgColor }}
              >
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

          {/* Top nav */}
          <PageNav onMenuOpen={() => setMenuOpen(!menuOpen)} />

          {/* Bottom overlay */}
          <div className="hero-bottom">
            {/* Tagline */}
            <div className="tagline-box">
              <p className="tagline">
                Nava Gardens is a retreat center in Helena,<br />
                Montana helping people and organization<br />
                to gather, celebrate, and grow.
              </p>
            </div>

            {/* Quilt / yellow tile */}
            <div className="tile-quilt">
              <img src="/assets/quilt.svg" alt="" className="quilt-img" />
            </div>

            {/* Community diamond */}
            <div className="tile-community">
              <div className="community-diamond-wrap">
                <div className="community-diamond" />
                <p className="community-text">A TIGHT KNIT COMMUNITY IN THE HEART OF MONTANA.</p>
              </div>
            </div>

            {/* Flower tile */}
            <div className="tile-flower">
              <img src="/assets/flower-tile-terracotta.svg" alt="" className="flower-tile-img" />
            </div>

            {/* Book CTA */}
            <div className="book-cta" onClick={() => setBookOpen(true)} style={{ cursor: 'pointer' }}>
              <div className="book-cta-text">
                <p>BOOK WITH</p>
                <p>US NOW</p>
              </div>
              <img src="/assets/arrow-union.svg" alt="" className="book-cta-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Book modal */}
    {bookOpen && (
      <div className="book-modal-overlay" onClick={() => setBookOpen(false)}>
        <div className="book-modal" onClick={e => e.stopPropagation()}>
          <div className="book-modal-cards">
            <div className="book-modal-card">
              <div className="book-modal-img-wrap">
                <img src="/assets/es-outdoors-1.jpg" alt="Event Spaces" className="book-modal-img" />
              </div>
              <div className="book-modal-body">
                <p className="book-modal-title">Event Spaces</p>
                <p className="book-modal-desc">Flexible indoor and outdoor spaces designed for gatherings of all kinds—from celebrations and weddings to community events and retreats.</p>
                <button className="book-modal-btn" onClick={() => { setBookOpen(false); navigate('/event-spaces-inquiry') }}>SUBMIT AN INQUIRY</button>
              </div>
            </div>
            <div className="book-modal-card">
              <div className="book-modal-img-wrap">
                <img src="/assets/accomm-guest-1.jpg" alt="Accommodations" className="book-modal-img" />
              </div>
              <div className="book-modal-body">
                <p className="book-modal-title">Accommodations</p>
                <p className="book-modal-desc">Comfortable guest rooms and meeting spaces designed for overnight stays, extended visits, and small group gatherings.</p>
                <button className="book-modal-btn" onClick={() => { setBookOpen(false); navigate('/accommodations-inquiry') }}>SUBMIT AN INQUIRY</button>
              </div>
            </div>
          </div>
          <button className="book-modal-close" onClick={() => setBookOpen(false)}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <line x1="1" y1="1" x2="17" y2="17" stroke="#FDF3E2" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="17" y1="1" x2="1" y2="17" stroke="#FDF3E2" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    )}
    </>
  )
}

