import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import './About.css'
import PageNav from './PageNav.jsx'
import GetInTouch from './GetInTouch.jsx'
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

const aboutPhrases = [
  'gather, reflect, and grow.',
  'share moments, ideas, and inspiration.',
  'come together, build, and belong.',
]

function AnimatedHeadline() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % aboutPhrases.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="about-headline-row">
      <span className="about-headline-plain">A place to&nbsp;&nbsp;</span>
      <span key={idx} className="about-headline-phrase">{aboutPhrases[idx]}</span>
    </div>
  )
}

const timelineEvents = [
  { year: '1908', label: 'Original building was built' },
  { year: '1925', label: 'Fire burned down the property' },
  { year: '1927', label: 'Construction on new building began' },
  { year: '1929', label: 'Current building finished' },
]

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const navigate = useNavigate()
  const timelineRef = useRef(null)

  const scrollTimeline = (dir) => {
    if (!timelineRef.current) return
    const col = timelineRef.current.querySelector('.about-timeline-card-col')
    const diamond = timelineRef.current.querySelector('.about-timeline-diamond')
    const step = (col?.offsetWidth ?? 300) + (diamond?.offsetWidth ?? 31)
    timelineRef.current.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <div className="about-page">

      {/* ── HERO ──────────────────────────────── */}
      <section className="about-hero">
        <img src="/assets/about-hero.jpg" alt="" className="about-hero-bg" />
        <PageNav onMenuOpen={() => setMenuOpen(true)} />
        <div className="about-hero-flower">
          <img src="/assets/flower-offwhite.svg" alt="" className="about-hero-flower-img" />
        </div>
      </section>

      {/* ── HEADLINE ──────────────────────────── */}
      <section className="about-headline">
        <AnimatedHeadline />
      </section>

      {/* ── INTRO ─────────────────────────────── */}
      <section className="about-intro">
        <img src="/assets/about-nava-garden.jpg" alt="" className="about-bg-full" />
        <div className="about-text-panel">
          <div className="about-ornament-wrap about-ornament-wrap--center">
            <img src="/assets/about-ornament.png" alt="" className="about-ornament-img" />
          </div>
          <p className="about-h4">Nava Gardens is a space for community leaders, social entrepreneurs, and artists.</p>
          <div className="about-panel-lower">
            <p className="about-body">It is also a flexible event space designed to serve the needs of the local Helena community.</p>
            <p className="about-body">In Persian, Nava means 'melody' and is also short for Nahavand, my grandfather's hometown in rural Iran. In our family, it also came to mean all the things you need in life. When my grandparents first arrived in this part of the country, they were struck by how closely the landscape resembled their home.</p>
          </div>
        </div>
      </section>

      {/* ── LEGACY ────────────────────────────── */}
      <section className="about-legacy">
        <div className="about-half-panel">
          <div className="about-ornament-wrap">
            <img src="/assets/about-ornament.png" alt="" className="about-ornament-img" />
          </div>
          <div className="about-panel-body-wrap">
            <p className="about-h4">A Legacy Carried Forward</p>
            <div className="about-panel-lower">
              <p className="about-h5">Nava Gardens is inspired by my grandfather, Parwiz Zafari, a former member of the Iranian parliament who championed economic and political justice.</p>
              <p className="about-body">He crisscrossed the countryside in his green Jeep, supporting nearly 200 community projects focused on building wells, roads, and schools.</p>
              <p className="about-body">Forced to leave Iran as a political refugee to escape the clutches of the brutal Islamic Republic, he kept his home alive in his heart and shared it with all of us grandkids through the values he instilled in us. He passed down his wisdom through poetry, parables, and Iranian art and culture.</p>
            </div>
          </div>
        </div>
        <div className="about-legacy-image">
          <img src="/assets/about-legacy-panel.jpg" alt="" className="about-legacy-panel-img" />
        </div>
      </section>

      {/* ── IOOF ──────────────────────────────── */}
      <section className="about-ioof">
        <img src="/assets/about-ioof.jpg" alt="" className="about-bg-full" />
        <div className="about-text-panel">
          <div className="about-ornament-wrap">
            <img src="/assets/about-ornament.png" alt="" className="about-ornament-img" />
          </div>
          <div className="about-panel-body-wrap">
            <p className="about-h4">A Tradition of Public Good</p>
            <div className="about-panel-lower">
              <p className="about-h5">The Center was originally built as a lodge for the Independent Order of Odd Fellows (IOOF), a fraternal organization dedicated to Friendship, Love, and Truth.</p>
              <p className="about-body">Founded in 1819, the IOOF is a non-political, non-sectarian organization with a long tradition of public service, including caring for the sick, relieving hardship, educating orphans, and supporting communities in times of need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RAMIREZ ───────────────────────────── */}
      <section className="about-ramirez">
        <div className="about-half-panel">
          <div className="about-ornament-wrap">
            <img src="/assets/about-ornament.png" alt="" className="about-ornament-img" />
          </div>
          <div className="about-panel-body-wrap">
            <p className="about-h4">A Family Home,<br />Open to the Community</p>
            <div className="about-panel-lower">
              <p className="about-h5">The building became an inn operated by the Ramirez family, where John and Kathy Ramirez raised their children and carried forward a deep commitment to service and community.</p>
              <p className="about-body">The inn functioned as both a family home and a gathering place, supporting local sports teams, debate programs, and community initiatives in Helena and beyond, while regularly hosting special events and celebrations anchored it in community life.</p>
            </div>
          </div>
        </div>
        <div className="about-ramirez-right">
          <div className="about-ramirez-corners">
            <div className="about-ramirez-corner-col about-ramirez-corner-col--left">
              <img src="/assets/team-corner-a.svg" alt="" className="about-ramirez-corner-motif" />
              <img src="/assets/team-corner-b.svg" alt="" className="about-ramirez-corner-motif" />
            </div>
            <div className="about-ramirez-corner-col">
              <img src="/assets/team-corner-a.svg" alt="" className="about-ramirez-corner-motif" />
              <img src="/assets/team-corner-b.svg" alt="" className="about-ramirez-corner-motif" />
            </div>
          </div>
          <div className="about-ramirez-masked">
            <div className="about-ramirez-photo-wrap">
              <img src="/assets/about-ramirez-photo.jpg" alt="The Ramirez family gathering" className="about-ramirez-photo" />
            </div>
            <img src="/assets/team-hero-intersect-landscape.svg" alt="" className="about-ramirez-intersect" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── STEWARDSHIP QUOTE ─────────────────── */}
      <section className="about-quote">
        <div className="about-quote-ornament">
          <img src="/assets/about-ornament-l.png" alt="" className="about-ornament-img" />
        </div>
        <p className="about-quote-text">
          At Nava Gardens, we see ourselves as stewards of this inherited legacy. We aim to honor the spirit of care, generosity, and community embodied by both the Odd Fellows and the Ramirez family, and to carry it forward in a new form, for a new generation.
        </p>
        <div className="about-quote-ornament about-quote-ornament--r">
          <img src="/assets/about-ornament-r.png" alt="" className="about-ornament-img" />
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────── */}
      <section className="about-timeline">
        <div className="about-timeline-header">
          <div className="about-timeline-labels">
            <div className="about-timeline-pill">
              <span className="about-timeline-pill-label">TIMELINE</span>
            </div>
            <div className="about-timeline-pill about-timeline-pill--date">
              <span className="about-timeline-date">1908 - 2026</span>
            </div>
          </div>
          <div className="about-timeline-nav">
            <button className="about-timeline-nav-btn" aria-label="Previous" onClick={() => scrollTimeline(-1)}>
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                <path d="M21 8H1M1 8L8 1M1 8L8 15" stroke="#272727" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="about-timeline-nav-btn" aria-label="Next" onClick={() => scrollTimeline(1)}>
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="#272727" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="about-timeline-row" ref={timelineRef}>
          {timelineEvents.map((event, i) => (
            <React.Fragment key={i}>
              <div className="about-timeline-diamond">
                <div className="about-timeline-diamond-inner" />
              </div>
              <div className="about-timeline-card-col">
                <div className="about-timeline-card">
                  <div className="about-timeline-card-img-wrap">
                    <img src="/assets/about-timeline.jpg" alt="" className="about-timeline-card-img" />
                    <div className="about-timeline-card-tint" />
                  </div>
                  <div className="about-timeline-card-label">{event.label}</div>
                </div>
                <div className="about-timeline-year">{event.year}</div>
              </div>
            </React.Fragment>
          ))}
          <div className="about-timeline-diamond">
            <div className="about-timeline-diamond-inner" />
          </div>
        </div>
      </section>

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
