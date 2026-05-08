import React from 'react'
import { Link } from 'react-router-dom'
import '/src/App.css'

const PINK = '#ff9a9e'
const BLUE = '#a6c1ee'

export default function About() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <div className="cute-bg-alt pt-5" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center py-5 mt-4">
          <h1 className="display-2 fw-bold mb-4 cute-title">About API Hub</h1>
          <p className="fs-4 fw-semibold mx-auto" style={{ color: '#555', maxWidth: '650px', lineHeight: '1.8' }}>
            We believe developer tools should be fast, and fun to use.
            API Hub brings powerful real-world APIs together under one smooth roof.
          </p>
          <div className="row g-4 align-items-stretch my-5 gap-4 justify-content-center">
            <div className="col-md-5">
              <div className="glass-card p-5 h-100 shadow-sm border-0">
                <div className="mb-3" style={{ fontSize: '2.5rem' }}>🎯</div>
                <h3 className="fw-bold mb-3" style={{ color: PINK }}>Our Mission</h3>
                <p className="fs-5 fw-semibold" style={{ color: '#666', lineHeight: '1.8' }}>
                  We strive to provide developers with easy-to-use, reliable, and comprehensive APIs
                  that power modern applications. Our goal is to simplify integration, accelerate
                  development, and make the experience genuinely enjoyable.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="glass-card p-5 h-100 shadow-sm border-0">
                <div className="mb-3" style={{ fontSize: '2.5rem' }}>🌟</div>
                <h3 className="fw-bold mb-3" style={{ color: BLUE }}>What We Offer</h3>
                <ul className="list-unstyled fs-5 fw-semibold" style={{ color: '#666', lineHeight: '2' }}>
                  <li>🌤️ Real-time Weather Data</li>
                  <li>🍳 Extensive Recipe Database</li>
                  <li>💰 Live Crypto Market Prices</li>
                  <li>🚀 NASA Cosmos Gallery (APOD)</li>
                  <li>👤 Personalised User Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── VALUES ───────────────────────────────────── */}
      <div className="cute-bg py-5">
        <div className="container py-4">
          <h2 className="text-center fw-bold mb-2" style={{ color: '#333', fontSize: '2.2rem' }}>💖 Our Values</h2>
          <p className="text-center mb-5 fw-semibold" style={{ color: '#666' }}>What drives everything we build</p>
          <div className="row g-4 justify-content-center">
            {[
              { emoji: '✨', title: 'Simplicity', desc: 'Complex APIs, simple interfaces. We hide the complexity so you can focus on building.', accent: PINK },
              { emoji: '⚡', title: 'Speed', desc: 'Fast responses, fast development. We optimise every layer so you never wait.', accent: BLUE },
              { emoji: '🔒', title: 'Security', desc: 'JWT auth, hashed passwords, and protected routes — security is non-negotiable.', accent: PINK },
              { emoji: '🎨', title: 'Design', desc: 'Beautiful interfaces matter. Every pixel is intentional, approachable, and fun.', accent: BLUE },
            ].map((v, i) => (
              <div key={i} className="col-md-3 col-sm-6">
                <div className="glass-card text-center p-5 shadow-sm border-0 h-100">
                  <div className="mb-3" style={{ fontSize: '2.8rem' }}>{v.emoji}</div>
                  <h5 className="fw-bold mb-2" style={{ color: v.accent }}>{v.title}</h5>
                  <p className="mb-0 fw-semibold" style={{ color: '#777', lineHeight: '1.7' }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container py-4">
          <h2 className="text-center fw-bold mb-2" style={{ color: '#333', fontSize: '2.2rem' }}>📈 Our Impact</h2>
          <p className="text-center mb-5 fw-semibold" style={{ color: '#666' }}>Numbers that speak for themselves</p>
          <div className="row g-4 justify-content-center">
            {[
              { num: '10K+', label: 'API Calls Daily', emoji: '🔥', accent: PINK },
              { num: '500+', label: 'Active Developers', emoji: '👩‍💻', accent: BLUE },
              { num: '4', label: 'Integrated APIs', emoji: '🔗', accent: PINK },
              { num: '99.9%', label: 'Uptime SLA', emoji: '⚡', accent: BLUE },
            ].map((s, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="glass-card text-center p-5 shadow-sm border-0">
                  <div className="mb-2" style={{ fontSize: '2.5rem' }}>{s.emoji}</div>
                  <h2 className="fw-bold mb-1" style={{ color: s.accent, fontSize: '2.2rem' }}>{s.num}</h2>
                  <p className="mb-0 fw-bold" style={{ color: '#666' }}>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────── */}
      <div style={{ background: `linear-gradient(135deg, ${PINK}, ${BLUE})`, padding: '80px 0' }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-3" style={{ color: '#fff', fontSize: '2.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.15)' }}>
            Join us today! 🚀
          </h2>
          <p className="fs-5 mb-5 fw-semibold" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Start exploring real-world APIs in minutes — no setup needed.
          </p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <Link to="/register">
              <button className="btn btn-light rounded-pill fw-bold px-5 py-3 fs-5 shadow" style={{ color: PINK }}>
                Sign Up Free 
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn btn-outline-light rounded-pill fw-bold px-5 py-3 fs-5">
                Contact Us 💌
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
