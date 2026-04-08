import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import './EventSpacesInquiry.css'
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

const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
const days = Array.from({ length: 31 }, (_, i) => i + 1)
const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i)

export default function EventSpacesInquiry() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const navigate = useNavigate()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [form, setForm] = useState({
    firstName: '', lastName: '', partnerFirstName: '', partnerLastName: '', email: '', phone: '',
    commMethod: 'Phone', smsOptIn: true,
    eventLocation: 'Indoors', eventType: 'Wedding',
    month: '', day: '', year: '',
    dateFlexible: 'Yes',
    eventTime: '', attendees: '',
    message: '', hearAbout: 'Social Media',
  })

  const set = (field, value) => setForm(f => ({ ...f, [field]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! Your inquiry has been submitted.')
  }

  return (
    <div className="esi-page">

      {/* Hero */}
      <section className="esi-hero">
        <PageNav onMenuOpen={() => setMenuOpen(true)} />
        <div className="esi-hero-body">
          <div className="esi-eyebrow-pill">INQUIRY FORM</div>
          <h1 className="esi-hero-headline">Event Spaces</h1>
        </div>
      </section>

      {/* Form */}
      <section className="esi-form-section">
        <form className="esi-form" onSubmit={handleSubmit}>

          {/* Column 1 — Contact Information */}
          <div className="esi-col">
            <div className="esi-col-header">CONTACT INFORMATION</div>

            <div className="esi-field-group">
              <label className="esi-label">NAME *</label>
              <input className="esi-input" type="text" placeholder="First Name"
                value={form.firstName} onChange={e => set('firstName', e.target.value)} />
              <input className="esi-input" type="text" placeholder="Last Name"
                value={form.lastName} onChange={e => set('lastName', e.target.value)} />
            </div>

            {form.eventType === 'Wedding' && (
              <div className="esi-field-group">
                <label className="esi-label">PARTNER *</label>
                <input className="esi-input" type="text" placeholder="First Name"
                  value={form.partnerFirstName} onChange={e => set('partnerFirstName', e.target.value)} />
                <input className="esi-input" type="text" placeholder="Last Name"
                  value={form.partnerLastName} onChange={e => set('partnerLastName', e.target.value)} />
              </div>
            )}

            <div className="esi-field-group">
              <label className="esi-label">EMAIL *</label>
              <input className="esi-input" type="email" placeholder="Email Address"
                value={form.email} onChange={e => set('email', e.target.value)} />
            </div>

            <div className="esi-field-group">
              <label className="esi-label">PHONE *</label>
              <input className="esi-input" type="tel" placeholder="000-000-0000"
                value={form.phone} onChange={e => set('phone', e.target.value)} />
            </div>

            <div className="esi-field-group">
              <label className="esi-label">WHAT IS YOUR PREFERRED COMMUNICATION METHOD? *</label>
              {['Phone', 'Email', 'Other'].map(opt => (
                <label key={opt} className="esi-radio-label">
                  <input type="radio" name="commMethod" value={opt}
                    checked={form.commMethod === opt}
                    onChange={() => set('commMethod', opt)} />
                  <span className="esi-radio-custom" />
                  {opt}
                </label>
              ))}
            </div>

            <div className="esi-field-group">
              <label className="esi-label">SMS COMMUNICATION *</label>
              <label className="esi-checkbox-label">
                <input type="checkbox" checked={form.smsOptIn}
                  onChange={e => set('smsOptIn', e.target.checked)} />
                <span className="esi-checkbox-custom" />
                SMS Opt-In
              </label>
              <p className="esi-fine-print">I agree to receive SMS messages from Nava Gardens about reservations and event inquiries. Message and data rates may apply.</p>
            </div>
          </div>

          {/* Column 2 — Event Details */}
          <div className="esi-col">
            <div className="esi-col-header">EVENT DETAILS</div>

            <div className="esi-field-group">
              <label className="esi-label">EVENT LOCATION *</label>
              <div className="esi-select-wrap">
                <select className="esi-select" value={form.eventLocation}
                  onChange={e => set('eventLocation', e.target.value)}>
                  <option>Indoors</option>
                  <option>Outdoors</option>
                  <option>Both</option>
                </select>
                <span className="esi-select-chevron">&#8964;</span>
              </div>
            </div>

            <div className="esi-field-group">
              <label className="esi-label">EVENT TYPE *</label>
              <div className="esi-select-wrap">
                <select className="esi-select" value={form.eventType}
                  onChange={e => set('eventType', e.target.value)}>
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Birthday / Celebration</option>
                  <option>Community Gathering</option>
                  <option>Other</option>
                </select>
                <span className="esi-select-chevron">&#8964;</span>
              </div>
            </div>

            <div className="esi-field-group">
              <label className="esi-label">EVENT DATE *</label>
              <div className="esi-date-row">
                <div className="esi-select-wrap esi-select-wrap--date">
                  <select className="esi-select" value={form.month}
                    onChange={e => set('month', e.target.value)}>
                    <option value="">Month</option>
                    {months.map(m => <option key={m}>{m}</option>)}
                  </select>
                  <span className="esi-select-chevron">&#8964;</span>
                </div>
                <div className="esi-select-wrap esi-select-wrap--date">
                  <select className="esi-select" value={form.day}
                    onChange={e => set('day', e.target.value)}>
                    <option value="">Day</option>
                    {days.map(d => <option key={d}>{d}</option>)}
                  </select>
                  <span className="esi-select-chevron">&#8964;</span>
                </div>
                <div className="esi-select-wrap esi-select-wrap--date">
                  <select className="esi-select" value={form.year}
                    onChange={e => set('year', e.target.value)}>
                    <option value="">Year</option>
                    {years.map(y => <option key={y}>{y}</option>)}
                  </select>
                  <span className="esi-select-chevron">&#8964;</span>
                </div>
              </div>
            </div>

            <div className="esi-field-group">
              <label className="esi-label">IS YOUR DATE FLEXIBLE? *</label>
              {['Yes', 'No', 'Maybe'].map(opt => (
                <label key={opt} className="esi-radio-label">
                  <input type="radio" name="dateFlexible" value={opt}
                    checked={form.dateFlexible === opt}
                    onChange={() => set('dateFlexible', opt)} />
                  <span className="esi-radio-custom" />
                  {opt}
                </label>
              ))}
            </div>

            <div className="esi-field-group">
              <label className="esi-label">EVENT TIME *</label>
              <input className="esi-input" type="text" placeholder="00:00 AM – 00:00 PM"
                value={form.eventTime} onChange={e => set('eventTime', e.target.value)} />
            </div>

            <div className="esi-field-group">
              <label className="esi-label">NUMBER OF ATTENDEES *</label>
              <input className="esi-input" type="number" placeholder="100" min="1"
                value={form.attendees} onChange={e => set('attendees', e.target.value)} />
            </div>
          </div>

          {/* Column 3 — More Information */}
          <div className="esi-col">
            <div className="esi-col-header">MORE INFORMATION</div>

            <div className="esi-field-group">
              <label className="esi-label">ANY MORE DETAILS WE SHOULD KNOW ABOUT?</label>
              <textarea className="esi-textarea" placeholder="Your message"
                value={form.message} onChange={e => set('message', e.target.value)} />
            </div>

            <div className="esi-field-group">
              <label className="esi-label">HOW DID YOU HEAR ABOUT NAVA GARDENS?</label>
              <div className="esi-select-wrap">
                <select className="esi-select" value={form.hearAbout}
                  onChange={e => set('hearAbout', e.target.value)}>
                  <option>Social Media</option>
                  <option>Google Search</option>
                  <option>Word of Mouth</option>
                  <option>Event / Wedding Vendor</option>
                  <option>Other</option>
                </select>
                <span className="esi-select-chevron">&#8964;</span>
              </div>
            </div>

            <button type="submit" className="esi-submit">SUBMIT</button>
          </div>

        </form>
      </section>

      <PageFooter />

      {/* Menu overlay */}
      {menuOpen && (
        <div className="menu-overlay">
          <div className="menu-left">
            <div className="menu-title-box">
              <span className="menu-title">The Directory</span>
            </div>
            <nav className="menu-items">
              {menuItems.map((item, i) => (
                <a key={i}
                  className={`menu-item${hoveredItem === i ? ' menu-item--hovered' : ''}`}
                  onMouseEnter={() => setHoveredItem(i)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => { setMenuOpen(false); navigate(item.path) }}
                  style={{ cursor: 'pointer' }}>
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
