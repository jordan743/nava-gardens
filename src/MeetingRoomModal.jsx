import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './OutdoorsDetail.css'
import './GuestRoomsModal.css'

const allPhotos = [
  '/assets/accomm-meeting-1.jpg',
  '/assets/accomm-meeting-2.jpg',
  '/assets/accomm-meeting-3.jpg',
  '/assets/accomm-meeting-4.jpg',
  '/assets/accomm-meeting-5.jpg',
  '/assets/accomm-meeting-6.jpg',
]

export default function MeetingRoomModal({ onClose }) {
  const navigate = useNavigate()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const openLightbox = (i) => { setLightboxIndex(i); setLightboxOpen(true) }
  const closeLightbox = () => setLightboxOpen(false)
  const prevPhoto = () => setLightboxIndex(i => (i - 1 + allPhotos.length) % allPhotos.length)
  const nextPhoto = () => setLightboxIndex(i => (i + 1) % allPhotos.length)

  useEffect(() => {
    const onKey = (e) => {
      if (lightboxOpen) {
        if (e.key === 'ArrowLeft') prevPhoto()
        else if (e.key === 'ArrowRight') nextPhoto()
        else if (e.key === 'Escape') closeLightbox()
      } else if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen])

  return (
    <>
      <div className="grm-overlay" onClick={onClose}>
        <div className="grm-modal" onClick={e => e.stopPropagation()}>

          {/* Left — scrollable images */}
          <div className="grm-left">
            <div className="grm-main-photo" onClick={() => openLightbox(0)}>
              <img src={allPhotos[0]} alt="Meeting Room Spaces" />
            </div>
            <div className="grm-photo-grid">
              {allPhotos.slice(1).map((src, i) => (
                <div key={src} className="grm-photo-cell" onClick={() => openLightbox(i + 1)}>
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* Right — sticky info panel */}
          <div className="grm-right">

            {/* Header */}
            <div className="grm-right-header">
              <div className="grm-info-pill">MORE INFORMATION</div>
              <button className="grm-close-btn" onClick={onClose} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
                  <line x1="4" y1="4" x2="24" y2="24" stroke="#272727" strokeWidth="3"/>
                  <line x1="24" y1="4" x2="4" y2="24" stroke="#272727" strokeWidth="3"/>
                </svg>
              </button>
            </div>

            {/* Title + body */}
            <div className="grm-title-section">
              <h2 className="grm-title">Meeting Room Spaces</h2>
              <p className="grm-body">Flexible indoor spaces designed for conversation, collaboration, and focused work—perfect for teams, workshops, and community leaders.</p>
            </div>

            {/* Stats */}
            <div className="grm-stats grm-stats--meeting">
              <div className="grm-stat grm-stat--full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="10" width="20" height="10" rx="1" stroke="#272727" strokeWidth="3"/>
                  <rect x="5" y="7" width="5" height="5" rx="1" stroke="#272727" strokeWidth="3"/>
                  <rect x="14" y="7" width="5" height="5" rx="1" stroke="#272727" strokeWidth="3"/>
                  <line x1="2" y1="20" x2="2" y2="22" stroke="#272727" strokeWidth="3"/>
                  <line x1="22" y1="20" x2="22" y2="22" stroke="#272727" strokeWidth="3"/>
                </svg>
                <span>5 MEETING ROOMS</span>
              </div>
              <div className="grm-stat">
                <img src="/assets/icon-clock.svg" alt="" className="grm-stat-icon" />
                <span>3 HOUR STAY MINIMUM</span>
              </div>
              <div className="grm-stat">
                <img src="/assets/icon-measure.svg" alt="" className="grm-stat-icon" />
                <span>1000 SQFT.</span>
              </div>
            </div>

            {/* Text sections */}
            <div className="grm-text-sections">

              {/* Terms */}
              <div className="grm-section">
                <p className="grm-section-label">TERMS</p>
                <div className="grm-bullet-list">
                  <div className="grm-bullet-item">
                    <div className="grm-diamond" />
                    <span>From day meetings to week-long retreats</span>
                  </div>
                </div>
              </div>

              {/* Building Information */}
              <div className="grm-section">
                <p className="grm-section-label">BUILDING INFORMATION</p>
                <div className="grm-bullet-list">
                  {['Private & Open Meeting Rooms', 'Communal Bathroom', '24 Hour Maintenance', 'Kitchen Area'].map(item => (
                    <div key={item} className="grm-bullet-item">
                      <div className="grm-diamond" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="grm-pricing">
                <div className="grm-price-row">
                  <span className="grm-price-label">DAY RATE</span>
                  <div className="grm-price-line" />
                  <div className="grm-price-value">
                    <span className="grm-price-amount">$400</span>
                    <span className="grm-price-unit">per day</span>
                  </div>
                </div>
                <div className="grm-price-row">
                  <span className="grm-price-label">HOURLY RATE</span>
                  <div className="grm-price-line" />
                  <div className="grm-price-value">
                    <span className="grm-price-amount">$50</span>
                    <span className="grm-price-unit">per hour</span>
                  </div>
                </div>
              </div>

            </div>{/* end grm-text-sections */}

            {/* CTA */}
            <button className="grm-cta-btn" onClick={() => { onClose(); navigate('/accommodations-inquiry') }}>
              SUBMIT AN INQUIRY
            </button>

          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="od-lightbox" onClick={closeLightbox}>
          <span className="od-lightbox-counter">{lightboxIndex + 1} / {allPhotos.length}</span>
          <button className="od-lightbox-close" onClick={closeLightbox}>
            CLOSE
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <line x1="1" y1="1" x2="15" y2="15" stroke="#FDF3E2" strokeWidth="1.5"/>
              <line x1="15" y1="1" x2="1" y2="15" stroke="#FDF3E2" strokeWidth="1.5"/>
            </svg>
          </button>
          <button className="od-lightbox-prev" onClick={e => { e.stopPropagation(); prevPhoto() }}>
            <img src="/assets/lightbox-arrow-left.svg" alt="Previous" className="od-lightbox-arrow-img od-lightbox-arrow-img--flipped" />
          </button>
          <img className="od-lightbox-img" src={allPhotos[lightboxIndex]} alt="" onClick={e => e.stopPropagation()} />
          <button className="od-lightbox-next" onClick={e => { e.stopPropagation(); nextPhoto() }}>
            <img src="/assets/lightbox-arrow-right.svg" alt="Next" className="od-lightbox-arrow-img" />
          </button>
          <div className="od-lightbox-dots" onClick={e => e.stopPropagation()}>
            {allPhotos.map((_, i) => (
              <button key={i}
                className={`od-lightbox-dot${lightboxIndex === i ? ' od-lightbox-dot--active' : ''}`}
                onClick={() => setLightboxIndex(i)} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
