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

const faqGroups = [
  {
    category: 'Booking & Reservations',
    faqs: [
      {
        q: 'How do I book an event space or accommodation?',
        a: 'Submit an inquiry through our website and our team will follow up within 1–2 business days to discuss availability, details, and next steps.',
      },
      {
        q: 'Is a deposit required to hold my date?',
        a: 'Yes. A deposit is required to confirm your reservation. The deposit amount varies depending on the type of booking. Details will be provided during the booking process.',
      },
      {
        q: 'Can I visit the property before booking?',
        a: 'Absolutely. We encourage site visits so you can experience the space firsthand. Contact us to schedule a tour.',
      },
      {
        q: 'How far in advance should I book?',
        a: 'We recommend booking as early as possible, especially for weekends and peak summer dates. Some dates book out 12+ months in advance.',
      },
    ],
  },
  {
    category: 'Event Spaces',
    faqs: [
      {
        q: 'What is the maximum guest capacity?',
        a: 'Our spaces accommodate up to 150 guests, depending on the layout and event type.',
      },
      {
        q: 'Is alcohol allowed at events?',
        a: 'We allow white wine, beer, and champagne. Hard liquor is not permitted on the property.',
      },
      {
        q: 'Can I bring my own vendors?',
        a: 'Yes, outside vendors are welcome. All vendors must provide valid permits and proof of liability insurance prior to the event.',
      },
      {
        q: 'Is setup and teardown time included in my booking?',
        a: 'Yes. All rentals include setup and teardown time within your booked window. Please factor this into your event timeline.',
      },
      {
        q: 'Is the venue wheelchair accessible?',
        a: 'Yes, Nava Gardens is wheelchair accessible. Please let us know of any specific accessibility needs when submitting your inquiry.',
      },
    ],
  },
  {
    category: 'Accommodations',
    faqs: [
      {
        q: 'What types of accommodations are available?',
        a: 'We offer guest rooms for longer stays, artist residency options, and meeting room spaces. An AirBnB listing is coming soon.',
      },
      {
        q: 'What is the minimum stay for guest rooms?',
        a: 'Guest rooms have a 2-night minimum stay. Contact us for details on longer-term rates and availability.',
      },
      {
        q: 'Are the bedrooms private?',
        a: 'Yes. Guest rooms are private bedrooms with access to communal bathrooms, a shared kitchen, and common areas.',
      },
      {
        q: 'Is parking available?',
        a: 'Yes. Nearby public parking and street parking are available at no additional charge.',
      },
    ],
  },
  {
    category: 'Property & Policies',
    faqs: [
      {
        q: 'Is smoking allowed on the property?',
        a: 'No. Smoking is not permitted anywhere on the Nava Gardens property.',
      },
      {
        q: 'Are pets allowed?',
        a: 'Please contact us directly to discuss your specific situation. Pet accommodations are evaluated on a case-by-case basis.',
      },
      {
        q: 'Is there WiFi available?',
        a: 'Yes, WiFi is available throughout the event spaces and accommodations.',
      },
      {
        q: 'What happens if I need to cancel?',
        a: 'Please refer to our Refund & Cancellation Policy for full details. In general, cancellations made 90+ days in advance are fully refunded.',
      },
    ],
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="lp-faq-item">
      <button className="lp-faq-question" onClick={() => setOpen(o => !o)}>
        <span className="lp-faq-question-text">{q}</span>
        <svg
          className={`lp-faq-chevron${open ? ' lp-faq-chevron--open' : ''}`}
          viewBox="0 0 18 18" fill="none"
        >
          <polyline points="3,6 9,12 15,6" stroke="#272727" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && <p className="lp-faq-answer">{a}</p>}
    </div>
  )
}

export default function FAQs() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const navigate = useNavigate()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="lp-page">

      <section className="lp-hero">
        <PageNav onMenuOpen={() => setMenuOpen(true)} />
        <div className="lp-hero-body">
          <div className="lp-eyebrow-pill">SUPPORT</div>
          <h1 className="lp-hero-headline">FAQs</h1>
        </div>
      </section>

      <div className="lp-content">

        {faqGroups.map(group => (
          <div key={group.category} className="lp-section">
            <p className="lp-section-title">{group.category}</p>
            <div className="lp-faq-list">
              {group.faqs.map(faq => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        ))}

        <div className="lp-section">
          <p className="lp-section-title">Still have questions?</p>
          <p className="lp-body">We're happy to help. Reach out to us at <strong>hello@navagardens.com</strong> or use the contact form on our website and we'll get back to you as soon as possible.</p>
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
