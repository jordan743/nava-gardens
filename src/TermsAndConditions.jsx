import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import './LegalPage.css'
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

export default function TermsAndConditions() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const navigate = useNavigate()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="lp-page">

      <section className="lp-hero">
        <PageNav onMenuOpen={() => setMenuOpen(true)} />
        <div className="lp-hero-body">
          <div className="lp-eyebrow-pill">LEGAL</div>
          <h1 className="lp-hero-headline">Terms &amp; Conditions</h1>
        </div>
      </section>

      <div className="lp-content">

        <p className="lp-meta">Last updated: January 1, 2025</p>

        <div className="lp-section">
          <p className="lp-section-title">Overview</p>
          <p className="lp-body">By booking an event, reserving accommodations, or otherwise using the facilities and services of Nava Gardens, you agree to be bound by the following terms and conditions. Please read them carefully before making a reservation.</p>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">Reservations & Bookings</p>
          <ul className="lp-list">
            <li>All bookings require a signed agreement and a deposit to confirm the reservation.</li>
            <li>Reservations are not confirmed until a booking confirmation is issued by Nava Gardens.</li>
            <li>The primary contact on the reservation is responsible for all guests and vendors on the property.</li>
            <li>Nava Gardens reserves the right to refuse or cancel any booking that does not comply with our policies.</li>
          </ul>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">Property Use</p>
          <ul className="lp-list">
            <li>No smoking anywhere on the property.</li>
            <li>No hard liquor — only white wine, beer, and champagne are permitted.</li>
            <li>No tape on walls, glitter, or confetti.</li>
            <li>Furniture must be returned to its original position at the end of your booking.</li>
            <li>All equipment and personal items must be removed by the end of the booked time.</li>
            <li>Guests are responsible for any damage to the property or its contents during their booking period.</li>
          </ul>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">Vendors & Insurance</p>
          <ul className="lp-list">
            <li>All outside vendors must provide valid permits and proof of liability insurance prior to the event.</li>
            <li>Nava Gardens is not responsible for the conduct or performance of outside vendors.</li>
            <li>Guests hosting events with 50 or more attendees may be required to obtain event liability insurance.</li>
          </ul>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">Liability</p>
          <p className="lp-body">Nava Gardens is not liable for injury, loss, or damage to persons or property during the use of our facilities, except where caused by our own negligence. Guests assume full responsibility for their safety and the safety of their guests while on the property.</p>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">Amendments</p>
          <p className="lp-body">Nava Gardens reserves the right to update these terms at any time. Continued use of our services following any changes constitutes acceptance of the revised terms. For questions, please contact us at <strong>hello@navagardens.com</strong>.</p>
        </div>

      </div>

      <PageFooter />

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
