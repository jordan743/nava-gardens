import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import './Contact.css'
import PageNav from './PageNav.jsx'
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

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="contact-page">

      <div className="contact-top">
      <PageNav onMenuOpen={() => setMenuOpen(true)} />

      {/* Menu Overlay */}
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

      {/* Main content */}
      <div className="contact-main">

        {/* Left panel — illustration */}
        <div className="contact-left">
          <img src="/assets/contact-illo.png" alt="" className="contact-sketch" />
        </div>

        {/* Right panel — info card */}
        <div className="contact-right">
          <div className="contact-card">

            {/* Ornament */}
            <img src="/assets/contact-ornament.svg" alt="" className="contact-ornament" />

            {/* Info sections */}
            <div className="contact-info">

              {/* Visit Us */}
              <div className="contact-row">
                <h2 className="contact-section-label">VISIT US</h2>
                <div className="contact-section-content">
                  <p className="contact-body-sm">A historic farm and garden estate reimagined as a place for nonprofits, neighbors, and storytellers to grow together.</p>
                  <p className="contact-body-sm">2245 Head Ln<br />Helena, MT 59602</p>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-row">
                <h2 className="contact-section-label">HOURS</h2>
                <div className="contact-section-content">
                  <p className="contact-body-sm">OPEN July 9th through September 23rd</p>
                  <div className="contact-hours-grid">
                    <div className="contact-hours-col">
                      <p className="contact-body-sm">Monday, Wednesday, Thursday:<br /><strong>10:00 AM–6:00 PM</strong></p>
                    </div>
                    <div className="contact-hours-col">
                      <p className="contact-body-sm">Tuesday:<br /><strong>CLOSED</strong></p>
                    </div>
                  </div>
                  <p className="contact-body-sm">Friday, Saturday, Sunday:<br /><strong>10:00 AM–10:00 PM</strong></p>
                </div>
              </div>

              {/* Get In Touch */}
              <div className="contact-row contact-row--git">
                <h2 className="contact-section-label">GET IN<br />TOUCH</h2>
                <div className="contact-section-content">
                  <p className="contact-body-sm">general@navagardens.com</p>
                  <p className="contact-body-sm"><span className="contact-label-upper">Press</span><br /><strong>press@navagardens.com</strong></p>
                  <p className="contact-body-sm"><span className="contact-label-upper">Join Our Team</span><br /><strong>careers@navagardens.com</strong></p>
                  <p className="contact-body-sm"><span className="contact-label-upper">Partnerships</span><br /><strong>partner@navagardens.com</strong></p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>{/* end contact-top */}

      <PageFooter />
    </div>
  )
}
