import React from 'react'
import { Link } from 'react-router-dom'
import './PageNav.css'

export default function PageNav({ onMenuOpen }) {
  return (
    <nav className="page-nav">
      <Link to="/" className="page-nav-logo-link">
        <img src="/assets/nav-logo-filled.svg" alt="Nava Gardens" className="page-nav-logo" />
      </Link>
      <button className="page-nav-menu-btn" onClick={onMenuOpen}>
        <span className="page-nav-menu-text">MENU</span>
        <span className="page-nav-diamond">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <polygon points="0,13 13,0 26,13" fill="#BAE8E5" />
            <polygon points="0,13 26,13 13,26" fill="#5F3207" />
            <polygon points="13,0 26,13 13,26 0,13" fill="none" stroke="#272727" strokeWidth="3" />
          </svg>
        </span>
      </button>
    </nav>
  )
}
