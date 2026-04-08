import React, { useState, useEffect, useRef } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    title: 'Intimate & Memorable...',
    quote: 'We couldn\'t have asked for a more meaningful place to celebrate. Nava Gardens has such a unique character, and the combination of the historic manor and the surrounding landscape made the whole day feel intimate and memorable. Our guests are still talking about it."',
    attribution: 'Wedding Guest',
  },
  {
    title: 'A retreat of my dreams...',
    quote: 'Staying at Nava Gardens felt like being welcomed into a living story. Every detail—from the gardens to the shared spaces—invited us to slow down and connect. We hosted a small gathering here and left feeling deeply nourished, inspired, and already planning our return."',
    attribution: 'Guest & Community Organizer',
  },
  {
    title: 'Beautiful & Welcoming...',
    quote: 'Nava Gardens is one of those places that immediately puts people at ease. We hosted a small community event here and the space felt both beautiful and welcoming. The setting, the gardens, and the thoughtful care behind everything made it a really special experience."',
    attribution: 'Community Organizer',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  const prev = () => setIndex(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex(i => (i + 1) % testimonials.length)

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(next, 6000)
    return () => clearInterval(intervalRef.current)
  }, [paused, index])

  const t = testimonials[index]

  return (
    <section
      className="testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button className="testimonials-arrow testimonials-arrow--prev" onClick={prev} aria-label="Previous testimonial">
        <img src="/assets/testimonial-arrow-l.svg" alt="" className="testimonials-arrow-img" />
      </button>

      <div className="testimonials-center">
        <img src="/assets/testimonial-ornament-t.svg" alt="" className="testimonials-ornament testimonials-ornament--top" />

        <div className="testimonials-content">
          <h2 className="testimonials-title">{t.title}</h2>
          <div className="testimonials-quote-row">
            <img src="/assets/testimonial-quote.svg" alt="" className="testimonials-quote-mark" />
            <p className="testimonials-body">{t.quote}</p>
          </div>
          <p className="testimonials-attribution">{t.attribution}</p>
        </div>

      </div>

      <button className="testimonials-arrow testimonials-arrow--next" onClick={next} aria-label="Next testimonial">
        <img src="/assets/testimonial-arrow-r.svg" alt="" className="testimonials-arrow-img" />
      </button>
    </section>
  )
}
