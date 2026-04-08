import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './GetInTouch.css'

const phrases = ['hosting an event', 'booking a stay']

function CtaCorner() {
  return (
    <svg width="56" height="56" viewBox="0 0 55.1321 55.3481" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M54.1321 54.1321V1L1 1V54.1321H54.1321Z" fill="#FDF3E2" stroke="#272727" strokeWidth="3" />
      <path d="M2.38574 27.5664L27.5639 1.46236L52.7457 27.5664H2.38574Z" fill="#BAE8E5" stroke="#272727" strokeWidth="3" />
      <path d="M52.7457 27.5661L27.5676 53.9011L2.38574 27.5661H52.7457Z" fill="#5F3207" stroke="#272727" strokeWidth="3" />
    </svg>
  )
}

function AnimatedHeading() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % phrases.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <p className="git-heading">
      Interested in{' '}
      <span key={idx} className="git-phrase">{phrases[idx]}</span>
      <br />at Nava Gardens?
    </p>
  )
}

export default function GetInTouch() {
  const navigate = useNavigate()

  return (
    <section className="get-in-touch">
      <div className="git-corners">
        <div className="git-corner-col">
          <CtaCorner />
          <CtaCorner />
        </div>
      </div>

      <div className="git-content">
        <img src="/assets/team-cta-ornament.svg" alt="" className="git-ornament" />
        <div className="git-text">
          <p className="git-eyebrow">Get in touch</p>
          <AnimatedHeading />
          <button className="git-btn" onClick={() => navigate('/contact')}>CONTACT US</button>
        </div>
      </div>

      <div className="git-corners">
        <div className="git-corner-col">
          <CtaCorner />
          <CtaCorner />
        </div>
      </div>
    </section>
  )
}
