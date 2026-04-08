import React from 'react'
import { useNavigate } from 'react-router-dom'
import './PageFooter.css'

export default function PageFooter() {
  const navigate = useNavigate()

  return (
    <footer className="page-footer">

      {/* ── Top info row ─────────────────────────── */}
      <div className="pf-top">

        {/* Resources */}
        <div className="pf-col">
          <h3 className="pf-col-title">Resources</h3>
          <ul className="pf-links">
            {[
              { label: 'Event Spaces',    path: '/event-spaces' },
              { label: 'Accommodations',  path: '/accommodations' },
              { label: 'The Property',    path: '/the-property' },
              { label: 'About',           path: '/about' },
              { label: 'Our Team',        path: '/team' },
              { label: 'Future Projects', path: '/future-projects' },
              { label: 'Contact',         path: '/contact' },
            ].map(({ label, path }) => (
              <li key={label}>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); navigate(path) }}
                >
                  {label}
                  <img src="/assets/footer-arrow.svg" alt="" className="pf-link-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="pf-col">
          <h3 className="pf-col-title">Legal</h3>
          <ul className="pf-links">
            {[
              { label: 'Terms & Conditions', path: '/terms' },
              { label: 'Privacy Policy',     path: '/privacy' },
              { label: 'Refund Policy',      path: '/refund-policy' },
              { label: 'FAQs',               path: '/faqs' },
            ].map(({ label, path }) => (
              <li key={label}>
                <a href="#" onClick={(e) => { e.preventDefault(); navigate(path) }}>
                  {label}
                  <img src="/assets/footer-arrow.svg" alt="" className="pf-link-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="pf-col">
          <h3 className="pf-col-title">Social</h3>
          <ul className="pf-links">
            {['Instagram', 'TikTok', 'Youtube'].map(l => (
              <li key={l}><a href="#">{l}<img src="/assets/footer-arrow.svg" alt="" className="pf-link-arrow" /></a></li>
            ))}
          </ul>
        </div>

        {/* Visit Us */}
        <div className="pf-col">
          <h3 className="pf-col-title">Visit Us</h3>
          <p className="pf-body">
            2245 Head Ln<br />
            Helena, MT 59602
          </p>
          <p className="pf-body-xs">
            *OPEN July 9th –<br />
            September 23rd*
          </p>
        </div>

        {/* Hours */}
        <div className="pf-col">
          <h3 className="pf-col-title">Hours</h3>
          <div className="pf-hours">
            <div className="pf-hours-row">
              <p className="pf-body-xs">Monday, Wednesday, Thursday:</p>
              <p className="pf-body-xs pf-bold">10:00 AM–6:00 PM</p>
            </div>
            <div className="pf-hours-row">
              <p className="pf-body-xs">Tuesday:</p>
              <p className="pf-body-xs pf-bold">CLOSED</p>
            </div>
            <div className="pf-hours-row">
              <p className="pf-body-xs">Friday, Saturday, Sunday:</p>
              <p className="pf-body-xs pf-bold">10:00 AM–10:00 PM</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="pf-col pf-col--newsletter">
          <h3 className="pf-col-title">Join Our Newsletter</h3>
          <div className="pf-email-input">
            <span className="pf-email-placeholder">Your email</span>
            <span className="pf-email-arrow">→</span>
          </div>
        </div>

      </div>

      {/* ── Wordmark + tile row ──────────────────── */}
      <div className="pf-brand-row">
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/') }}
          className="pf-wordmark-link"
        >
          <div className="pf-wordmark">
            <img src="/assets/wordmark-nava.svg" alt="NAVA" className="pf-wordmark-nava" />
            <img src="/assets/wordmark-gardens.svg" alt="GARDENS" className="pf-wordmark-gardens" />
          </div>
        </a>
        <div className="pf-tile">
          <img src="/assets/footer-tile.svg" alt="" className="pf-tile-img" />
        </div>
      </div>

    </footer>
  )
}
