import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import './Contact.css'
import './FutureProjects.css'
import PageNav from './PageNav.jsx'
import Diamond from './Diamond.jsx'
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

const row1 = [
  {
    title: 'Persian Library',
    illo: '/assets/fp-illo-persian-library.png',
    desc: 'A curated collection of Persian literature, poetry, and history—honoring storytelling as a vessel for memory and wisdom.',
  },
  {
    title: 'Persian Garden',
    illo: '/assets/fp-illo-persian-garden.png',
    desc: 'A classically inspired Persian garden with reflecting pools, geometric plantings, and fragrant native species.',
  },
  {
    title: 'Orchard',
    illo: '/assets/fp-illo-orchard.png',
    desc: 'A thriving orchard of heritage fruit trees, tended using regenerative practices and open to the community for harvesting.',
  },
]

const row2 = [
  {
    title: 'Reading Room',
    illo: '/assets/fp-illo-reading-room.png',
    desc: 'A quiet contemplative space for deep reading, research, and reflection, surrounded by curated collections.',
  },
  {
    title: 'Working Farm',
    illo: '/assets/fp-illo-working-farm.png',
    desc: 'A productive agricultural plot growing seasonal vegetables and herbs using traditional and regenerative methods.',
  },
  {
    title: 'Sound Garden',
    illo: '/assets/fp-illo-sound-garden.png',
    desc: 'An outdoor acoustic sanctuary where natural sounds, music, and listening become a shared experience.',
  },
]

const row3 = [
  {
    title: 'Media Room',
    illo: '/assets/fp-illo-media-room.png',
    desc: 'A dedicated facility for film screenings, music listening, and digital storytelling projects.',
  },
  {
    title: 'Art Studio',
    illo: '/assets/fp-illo-art-studio.png',
    desc: 'A spacious workshop for visual artists, ceramicists, and craftspeople to create and collaborate.',
  },
]

const partnerLogos = [
  { src: '/assets/fp-partner-nimruz.svg',          square: false },
  { src: '/assets/fp-partner-world-within.svg',    square: false },
  { src: '/assets/fp-partner-helena-symphony.png', square: true  },
]

function ProjectCard({ card }) {
  return (
    <div className="fp-card">
      <div className="fp-card-image">
        <img src={card.illo} alt={card.title} />
      </div>
      <div className="fp-card-body">
        <div className="fp-card-title">{card.title}</div>
        <div className="fp-card-desc">{card.desc}</div>
      </div>
    </div>
  )
}

function CtaCard() {
  const navigate = useNavigate()
  return (
    <div className="fp-card fp-cta-card">
      <p className="fp-cta-heading">Build the future of Nava Gardens together</p>
      <p className="fp-cta-body">
        These projects are rooted in the values that shaped Nava Gardens from the beginning: care, justice, creativity, and service. We invite collaborators, donors, and community members to help bring them to life.
      </p>
      <button className="fp-cta-btn" onClick={() => navigate('/contact')}>CONTACT US</button>
    </div>
  )
}

function ProjectRow({ cards, bg, diamondColor, header }) {
  const total = cards.length + 1
  return (
    <section className="fp-row" style={{ background: bg }}>
      {header && (
        <div className="fp-row-header">
          <div className="fp-row-label"><span>{header}</span></div>
          <img src="/assets/team-label-deco.svg" alt="" className="fp-row-label-deco" />
        </div>
      )}
      <div className="fp-row-inner">
        {cards.map((card, i) => (
          <React.Fragment key={i}>
            <Diamond color={diamondColor} index={i} total={total} />
            <ProjectCard card={card} />
          </React.Fragment>
        ))}
        <Diamond color={diamondColor} index={cards.length} total={total} />
      </div>
    </section>
  )
}

export default function FutureProjects() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const navigate = useNavigate()

  // Row 3: 2 project cards + 1 CTA card = 3 items, 4 diamonds
  const row3Total = row3.length + 2

  return (
    <div className="fp-page">

      {/* Hero */}
      <section className="fp-hero">
        <PageNav onMenuOpen={() => setMenuOpen(true)} />
        <h1 className="fp-hero-headline">
          We are building a place where history, culture, and community come together.
        </h1>
      </section>

      {/* Project rows */}
      <ProjectRow cards={row1} bg="#256C39" diamondColor="#BAE8E5" header="Future Projects" />
      <ProjectRow cards={row2} bg="#5F3207" diamondColor="#FFB921" />

      {/* Row 3 — mixed project cards + CTA card */}
      <section className="fp-row" style={{ background: '#FFB921' }}>
        <div className="fp-row-inner">
          {row3.map((card, i) => (
            <React.Fragment key={i}>
              <Diamond color="#CB5A38" index={i} total={row3Total} />
              <ProjectCard card={card} />
            </React.Fragment>
          ))}
          <Diamond color="#CB5A38" index={row3.length} total={row3Total} />
          <CtaCard />
          <Diamond color="#CB5A38" index={row3.length + 1} total={row3Total} />
        </div>
      </section>

      {/* Partnerships */}
      <section className="fp-partnerships">
        <p className="fp-partnerships-heading">PARTNERSHIPS</p>
        <div className="fp-marquee-wrap">
          <div className="fp-marquee-track">
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <img key={i} src={logo.src} alt="" className={`fp-partner-logo${logo.square ? ' fp-partner-logo--square' : ''}`} />
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />

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
