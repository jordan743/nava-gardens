import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import './Contact.css'
import './Team.css'
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

const placeholder = {
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lectus id nisl aliquam vestibulum.',
  fullBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lectus id nisl aliquam vestibulum. Nullam non facilisis ex, eget fringilla felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
}

const teamRow1 = [
  {
    name: 'Rostam Zafari',
    role: 'Founder',
    bio: 'Rostam is inspired by the example of his grandfather, Parwiz Zafari, to advance economic justice and Iranian culture.',
    fullBio: 'Rostam is inspired by the example of his grandfather, Parwiz Zafari, to advance economic justice and Iranian culture. Through Nava Gardens, Rostam has created a living gathering place — a space where community, heritage, and stewardship of the land intersect. He brings a deep commitment to cultural preservation and regenerative practices to everything he builds.',
    photo: '/assets/team-photo-rostam.jpg',
  },
  {
    name: 'Alex Ramirez',
    role: 'Head of Operations',
    bio: 'Born and raised in Helena, Alex enjoys Montana and all the wonderful adventures that it has to offer.',
    fullBio: 'Born and raised in Helena, Alex enjoys Montana and all the wonderful adventures that it has to offer. With a background in hospitality and event coordination, Alex keeps Nava Gardens running seamlessly — from managing event logistics to building relationships with local vendors and community partners.',
    photo: '/assets/team-photo-alex.jpg',
  },
  {
    name: 'Josh Curtis',
    role: 'Head of Agriculture',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lectus id nisl aliquam vestibulum.',
    fullBio: placeholder.fullBio,
    photo: null,
  },
  {
    name: 'Tyler Ritchie',
    role: 'Carpenter',
    bio: 'Tyler is a craftsman and entrepreneur dedicated to the intersection of traditional artistry and community impact.',
    fullBio: 'Tyler is a craftsman and entrepreneur dedicated to the intersection of traditional artistry and community impact. His woodworking and construction work can be seen throughout Nava Gardens — from hand-built trellises to restored outbuildings. Tyler believes deeply in building things that last.',
    photo: '/assets/team-photo-tyler.jpg',
  },
]

const teamRow2 = [
  { name: 'Emma Zafari', role: 'Intern', bio: placeholder.bio, fullBio: placeholder.fullBio, photo: null },
  { name: 'Lorem Ipsum', role: 'Lorem Ipsum Role', bio: placeholder.bio, fullBio: placeholder.fullBio, photo: null },
  { name: 'Lorem Ipsum', role: 'Lorem Ipsum Role', bio: placeholder.bio, fullBio: placeholder.fullBio, photo: null },
  { name: 'Lorem Ipsum', role: 'Lorem Ipsum Role', bio: placeholder.bio, fullBio: placeholder.fullBio, photo: null },
]

const teamRow3 = [
  { name: 'Lorem Ipsum', role: 'Lorem Ipsum Role', bio: placeholder.bio, fullBio: placeholder.fullBio, photo: null },
  { name: 'Lorem Ipsum', role: 'Lorem Ipsum Role', bio: placeholder.bio, fullBio: placeholder.fullBio, photo: null },
  { name: 'Lorem Ipsum', role: 'Lorem Ipsum Role', bio: placeholder.bio, fullBio: placeholder.fullBio, photo: null },
  { name: 'Lorem Ipsum', role: 'Lorem Ipsum Role', bio: placeholder.bio, fullBio: placeholder.fullBio, photo: null },
]


function TeamCard({ member }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`team-card${expanded ? ' team-card--expanded' : ''}`}>
      <div className="team-card-photo">
        {member.photo
          ? <img src={member.photo} alt={member.name} className="team-card-photo-img" />
          : <div className="team-card-photo-placeholder" />
        }
      </div>
      <div className="team-card-info">
        <div>
          <p className="team-card-name">{member.name}</p>
          <p className="team-card-role">{member.role}</p>
        </div>
        <div className="team-card-bio-wrap">
          <p className="team-card-bio">{expanded ? member.fullBio : member.bio}</p>
        </div>
        <button
          className={`team-card-read-more${expanded ? ' team-card-read-more--open' : ''}`}
          onClick={() => setExpanded(e => !e)}
        >
          <span>{expanded ? 'READ LESS' : 'READ MORE'}</span>
          <svg className="team-card-chevron" width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="#272727" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

function TeamRow({ members, bg, diamondColor }) {
  const total = members.length + 1
  return (
    <section className="team-row" style={{ background: bg }}>
      <div className="team-row-inner">
        {members.map((m, i) => (
          <React.Fragment key={i}>
            <Diamond color={diamondColor} index={i} total={total} />
            <TeamCard member={m} />
          </React.Fragment>
        ))}
        <Diamond color={diamondColor} index={members.length} total={total} />
      </div>
    </section>
  )
}

export default function Team() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="team-page">

      {/* Hero */}
      <section className="team-hero">
        <PageNav onMenuOpen={() => setMenuOpen(true)} />
        {/* Corner motifs — two-column frame centered over the photo */}
        <div className="team-hero-corners">
          <div className="team-hero-corner-col team-hero-corner-col--left">
            <img src="/assets/team-corner-a.svg" alt="" className="team-corner-motif" />
            <img src="/assets/team-corner-b.svg" alt="" className="team-corner-motif" />
          </div>
          <div className="team-hero-corner-col">
            <img src="/assets/team-corner-a.svg" alt="" className="team-corner-motif" />
            <img src="/assets/team-corner-b.svg" alt="" className="team-corner-motif" />
          </div>
        </div>
        {/* Masked photo */}
        <div className="team-hero-masked">
          <div className="team-hero-photo-wrap">
            <img src="/assets/team-editorial.jpg" alt="" className="team-hero-photo" />
          </div>
          <img src="/assets/team-hero-intersect-landscape.svg" alt="" className="team-hero-intersect" />
        </div>
      </section>

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

      {/* Quote */}
      <section className="team-quote">
        <p className="team-quote-text">We are not owners of this place—we are stewards of a story still unfolding.</p>
      </section>

      {/* Team rows */}
      <section className="team-row" style={{ background: '#5F3207' }}>
        <div className="team-row-header">
          <div className="team-row-label">
            <span>Our Team</span>
          </div>
          <img src="/assets/team-label-deco.svg" alt="" className="team-row-label-deco" />
        </div>
        <div className="team-row-inner">
          {teamRow1.map((m, i) => (
            <React.Fragment key={i}>
              <Diamond color="#BAE8E5" index={i} total={teamRow1.length + 1} />
              <TeamCard member={m} />
            </React.Fragment>
          ))}
          <Diamond color="#BAE8E5" index={teamRow1.length} total={teamRow1.length + 1} />
        </div>
      </section>

      <TeamRow members={teamRow2} bg="#BAE8E5" diamondColor="#CB5A38" />
      <TeamRow members={teamRow3} bg="#FFB921" diamondColor="#256C39" />


      <GetInTouch />

      <PageFooter />
    </div>
  )
}
