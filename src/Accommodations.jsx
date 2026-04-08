import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import './Accommodations.css'
import PageNav from './PageNav.jsx'
import Testimonials from './Testimonials.jsx'
import PageFooter from './PageFooter.jsx'
import GuestRoomsModal from './GuestRoomsModal.jsx'
import MeetingRoomModal from './MeetingRoomModal.jsx'

const menuItems = [
  { num: 1, label: 'Event Spaces',     path: '/event-spaces',    image: '/assets/menu-illo-event-spaces.png',    bgColor: '#faebdc' },
  { num: 2, label: 'Accommodations',   path: '/accommodations',  image: '/assets/menu-illo-accommodations.png',  bgColor: '#faebdc' },
  { num: 3, label: 'The Property',     path: '/the-property',                image: '/assets/menu-illo-the-property.png',    bgColor: '#faebdc' },
  { num: 4, label: 'About',            path: '/about',           image: '/assets/menu-illo-about.png',           bgColor: '#faebdc' },
  { num: 5, label: 'Our Team',         path: '/team',            image: '/assets/menu-illo-our-team.png',        bgColor: '#faebdc' },
  { num: 6, label: 'Future Projects',  path: '/future-projects', image: '/assets/menu-illo-future-projects.png', bgColor: '#faebdc' },
  { num: 7, label: 'Contact',          path: '/contact',         image: '/assets/menu-illo-contact.png',         bgColor: '#faebdc' },
]

const cards = [
  {
    title: 'Guest Rooms',
    body: 'Thoughtfully designed living spaces for longer stays—ideal for visiting professionals, artists-in-residence, or those seeking a grounded home base.',
    images: ['/assets/accomm-guest-1.jpg', '/assets/accomm-guest-2.jpg', '/assets/accomm-guest-3.jpg'],
    hasButton: true,
    buttonLabel: 'LEARN MORE',
    buttonPath: null,
  },
  {
    title: 'AirBnB',
    badge: 'COMING SOON',
    body: 'Comfortable, character-rich accommodations for short-term stays, blending historic charm with modern ease.',
    images: ['/assets/accomm-hero-interior.jpg'],
    hasButton: false,
  },
  {
    title: 'Meeting Room Spaces',
    body: 'Flexible indoor spaces designed for conversation, collaboration, and focused work—perfect for teams, workshops, and community leaders.',
    images: ['/assets/accomm-meeting-1.jpg', '/assets/accomm-meeting-2.jpg', '/assets/accomm-meeting-3.jpg'],
    hasButton: true,
    buttonLabel: 'LEARN MORE',
    buttonPath: null,
  },
]

function AccommodationCard({ card, onLearnMore }) {
  const [slideIndex, setSlideIndex] = useState(0)
  const multipleImages = card.images.length > 1

  useEffect(() => {
    if (!multipleImages) return
    const timer = setInterval(() => {
      setSlideIndex(i => (i + 1) % card.images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [card.images.length, multipleImages])

  return (
    <div className="ac-card">
      <div className="ac-card-photo-wrap">
        {card.images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`ac-card-photo${slideIndex === i ? ' ac-card-photo--active' : ''}`}
          />
        ))}
        {multipleImages && (
          <div className="ac-card-dots">
            {card.images.map((_, i) => (
              <button
                key={i}
                className={`ac-card-dot${slideIndex === i ? ' ac-card-dot--active' : ''}`}
                onClick={() => setSlideIndex(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="ac-card-body">
        <div className="ac-card-title-row">
          <h2 className="ac-card-title">{card.title}</h2>
          {card.badge && <span className="ac-card-badge">{card.badge}</span>}
        </div>
        <p className="ac-card-text">{card.body}</p>
        {card.hasButton && (
          <button className="ac-card-btn" onClick={onLearnMore}>{card.buttonLabel}</button>
        )}
      </div>
    </div>
  )
}

export default function Accommodations() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [guestRoomsOpen, setGuestRoomsOpen] = useState(false)
  const [meetingRoomOpen, setMeetingRoomOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="ac-page">

      {/* Nav */}
      <div className="ac-nav-bar">
        <PageNav onMenuOpen={() => setMenuOpen(true)} />
      </div>

      {/* Hero: two images + centered diamond SVG */}
      <div className="ac-hero">
        <div className="ac-hero-half">
          <img src="/assets/accomm-hero-landscape.jpg" alt="Montana landscape" />
        </div>
        <div className="ac-hero-half">
          <img src="/assets/accomm-hero-interior.jpg" alt="Nava Gardens interior" />
        </div>
        <img
          src="/assets/accomm-hero-diamond.svg"
          alt=""
          className="ac-hero-diamond"
        />
      </div>

      {/* Body */}
      <div className="ac-body">

        {/* Header row */}
        <div className="ac-header-row">
          <div className="ac-label-pill">ACCOMMODATIONS</div>
          <img src="/assets/testimonial-ornament-t.svg" alt="" className="ac-header-ornament" />
        </div>

        {/* Cards */}
        <div className="ac-cards-row">
          {cards.map((card, i) => (
            <React.Fragment key={card.title}>
              <AccommodationCard
                card={card}
                onLearnMore={
                  card.title === 'Guest Rooms' ? () => setGuestRoomsOpen(true) :
                  card.title === 'Meeting Room Spaces' ? () => setMeetingRoomOpen(true) :
                  undefined
                }
              />
              {i < cards.length - 1 && (
                <div className="ac-card-divider">
                  <div className="ac-card-divider-diamond" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA bar */}
        <div className="ac-cta-bar">
          <h2 className="ac-cta-headline">Stay, gather, and build<br />something meaningful</h2>
          <p className="ac-cta-body">Whether you're planning a retreat, hosting loved ones, or simply looking for a place that feels intentional and alive, Nava Gardens offers accommodations shaped around care and connection.</p>
          <button className="es-btn es-btn--yellow ac-cta-btn" onClick={() => navigate('/accommodations-inquiry')}>
            SUBMIT AN INQUIRY
          </button>
        </div>

      </div>

      <Testimonials />
      <PageFooter />

      {/* Guest Rooms modal */}
      {guestRoomsOpen && <GuestRoomsModal onClose={() => setGuestRoomsOpen(false)} />}

      {/* Meeting Room modal */}
      {meetingRoomOpen && <MeetingRoomModal onClose={() => setMeetingRoomOpen(false)} />}

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
