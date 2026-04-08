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

export default function RefundPolicy() {
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
          <h1 className="lp-hero-headline">Refund &amp; Cancellation Policy</h1>
        </div>
      </section>

      <div className="lp-content">

        <p className="lp-meta">Last updated: January 1, 2025</p>

        <div className="lp-section">
          <p className="lp-section-title">Overview</p>
          <p className="lp-body">We understand that plans change. Our refund and cancellation policy is designed to be fair to both guests and our team. Please review the timelines below carefully before confirming your booking.</p>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">Event Space Cancellations</p>
          <ul className="lp-list">
            <li><strong>90+ days before the event:</strong> Full refund of the booking price, including all fees.</li>
            <li><strong>14–90 days before the event:</strong> 50% refund of the booking price, excluding fees.</li>
            <li><strong>Less than 14 days before the event:</strong> No refund. The full booking amount is non-refundable.</li>
          </ul>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">Accommodation Cancellations</p>
          <ul className="lp-list">
            <li><strong>30+ days before the stay:</strong> Full refund of the booking price, including all fees.</li>
            <li><strong>7–30 days before the stay:</strong> 50% refund of the booking price, excluding fees.</li>
            <li><strong>Less than 7 days before the stay:</strong> No refund. The full booking amount is non-refundable.</li>
          </ul>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">Grace Period</p>
          <p className="lp-body">All bookings are subject to a 24-hour grace period. If you cancel within 24 hours of receiving your booking confirmation — and no less than 48 hours before your event or check-in — you will receive a full refund.</p>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">No-Shows</p>
          <p className="lp-body">Guests who do not show up without prior cancellation will forfeit the full booking amount. No refund will be issued.</p>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">Force Majeure</p>
          <p className="lp-body">In the event of circumstances beyond our control — including natural disasters, severe weather, or government-mandated closures — Nava Gardens will work with guests to reschedule or offer a credit. Refunds in these cases are evaluated on a case-by-case basis.</p>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">How to Cancel</p>
          <p className="lp-body">To cancel a reservation, please contact us at <strong>hello@navagardens.com</strong> or call us directly. Cancellations must be submitted in writing to be considered valid. The date of written notice will determine which refund tier applies.</p>
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
