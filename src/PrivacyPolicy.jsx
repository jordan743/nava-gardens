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

export default function PrivacyPolicy() {
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
          <h1 className="lp-hero-headline">Privacy Policy</h1>
        </div>
      </section>

      <div className="lp-content">

        <p className="lp-meta">Last updated: January 1, 2025</p>

        <div className="lp-section">
          <p className="lp-section-title">Our Commitment</p>
          <p className="lp-body">Nava Gardens is committed to protecting your privacy. This policy explains what information we collect, how we use it, and how we keep it safe. By using our website or services, you agree to the practices described here.</p>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">Information We Collect</p>
          <ul className="lp-list">
            <li><strong>Contact information</strong> — name, email address, and phone number provided through inquiry or booking forms.</li>
            <li><strong>Event details</strong> — dates, guest counts, and preferences submitted as part of a booking request.</li>
            <li><strong>Communication records</strong> — messages or emails exchanged with our team.</li>
            <li><strong>Usage data</strong> — anonymized information about how you navigate and interact with our website.</li>
          </ul>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">How We Use Your Information</p>
          <ul className="lp-list">
            <li>To respond to inquiries and process booking requests.</li>
            <li>To communicate updates, confirmations, and relevant information about your reservation.</li>
            <li>To send our newsletter, if you have opted in.</li>
            <li>To improve our website and services based on usage patterns.</li>
            <li>To comply with legal obligations when required.</li>
          </ul>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">Information Sharing</p>
          <p className="lp-body">We do not sell, rent, or trade your personal information. We may share limited information with trusted third parties — such as payment processors or email platforms — only as needed to operate our services. These parties are obligated to protect your data and may not use it for any other purpose.</p>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">SMS Communications</p>
          <p className="lp-body">If you opt in to SMS communications, we will send you messages related to your reservation or inquiry. Message and data rates may apply. You can opt out at any time by replying STOP to any message or contacting us directly.</p>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">Data Retention</p>
          <p className="lp-body">We retain your information only as long as necessary to fulfill the purposes for which it was collected, or as required by law. You may request deletion of your personal data at any time by contacting us.</p>
        </div>

        <div className="lp-section">
          <p className="lp-section-title">Contact</p>
          <p className="lp-body">For questions or concerns about your privacy, please contact us at <strong>hello@navagardens.com</strong> or write to us at 2245 Head Ln, Helena, MT 59602.</p>
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
