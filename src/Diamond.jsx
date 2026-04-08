import React, { useState, useEffect, useRef } from 'react'

// ── Scroll direction tracker (singleton) ──────────────────────────────────
let _scrollDir = 'down'
let _lastScrollY = 0
let _hasScrolled = false
let _scrollTrackerInit = false

function ensureScrollTracking() {
  if (_scrollTrackerInit) return
  _scrollTrackerInit = true
  _lastScrollY = window.scrollY
  window.addEventListener('scroll', () => {
    const y = window.scrollY
    if (y !== _lastScrollY) {
      _scrollDir = y > _lastScrollY ? 'down' : 'up'
      _hasScrolled = true
      _lastScrollY = y
    }
  }, { passive: true })
}

export default function Diamond({ color, index = 0, total = 5 }) {
  const ref = useRef(null)
  const [waveDir, setWaveDir] = useState(null)

  useEffect(() => {
    ensureScrollTracking()
    const el = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && _hasScrolled) {
        setWaveDir(_scrollDir)
      } else if (!entry.isIntersecting) {
        setWaveDir(null)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const staggerMs = waveDir === 'down' ? index * 70 : (total - 1 - index) * 70

  return (
    <div
      ref={ref}
      className={`team-diamond-spacer${waveDir ? ' team-diamond-wave' : ''}`}
      style={waveDir ? { animationDelay: `${staggerMs}ms` } : {}}
    >
      <div className="team-diamond-inner" style={{ background: color }} />
    </div>
  )
}
