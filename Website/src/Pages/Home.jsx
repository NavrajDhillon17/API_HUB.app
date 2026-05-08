import React from 'react'
import '/src/App.css'
import { Link } from 'react-router-dom'

const PINK = '#ff9a9e'
const BLUE = '#a6c1ee'

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <div className="cute-bg-alt pt-5" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center py-5 mt-4">
          <div className="mb-4" style={{ fontSize: '4rem' }}>🌐</div>
          <h1 className="display-2 fw-bold mb-4 cute-title">
            Welcome to API Hub ✨
          </h1>
          <p className="fs-4 fw-semibold mb-5 mx-auto" style={{ color: '#555', maxWidth: '650px', lineHeight: '1.8' }}>
            Your one-stop destination for powerful, seamless API integrations.
            Weather, Recipes, Crypto, and the Cosmos — all in one place! 🎀
          </p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <Link to="/register">
              <button className="btn-cute fs-5 px-5 py-3">Get Started 🚀</button>
            </Link>
            <Link to="/about">
              <button className="btn btn-light rounded-pill border-0 shadow-sm fs-5 px-5 py-3 fw-bold" style={{ color: '#555' }}>
                Learn More 🌟
              </button>
            </Link>
          </div>

          {/* Stats row */}
          <div className="row justify-content-center mt-5 pt-4 g-4">
            {[
              { num: '4+', label: 'Live APIs' },
              { num: '10K+', label: 'API Calls Daily' },
              { num: '500+', label: 'Happy Users' },
              { num: '99.9%', label: 'Uptime' },
            ].map((s, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="glass-card p-4 shadow-sm border-0">
                  <h2 className="fw-bold mb-1 cute-title" style={{ fontSize: '2rem' }}>{s.num}</h2>
                  <p className="mb-0 fw-bold" style={{ color: '#666' }}>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURES ─────────────────────────────────── */}
      <div className="cute-bg py-5">
        <div className="container py-4">
          <h2 className="text-center fw-bold mb-2" style={{ color: '#333', fontSize: '2.2rem' }}>Explore Our Features 🌈</h2>
          <p className="text-center mb-5 fw-semibold" style={{ color: '#666' }}>Pick any category and dive in</p>
          <div className="row g-4 justify-content-center">
            {[
              { emoji: '🌤️', title: 'Weather API', desc: 'Get real-time weather forecasts, temperature, humidity and wind speed for any city worldwide.', to: '/weather', btn: 'Explore ☁️', accent: PINK },
              { emoji: '🍳', title: 'Recipe API', desc: 'Discover millions of delicious recipes, cooking instructions and ingredient lists from around the globe.', to: '/recipe', btn: 'Explore 🥘', accent: BLUE },
              { emoji: '🚀', title: 'Cosmos API', desc: "Explore the universe with NASA's Astronomy Picture of the Day. Save your favourite space images.", to: '/cosmos', btn: 'Explore 🌌', accent: PINK },
              { emoji: '📈', title: 'Crypto API', desc: 'Track real-time cryptocurrency prices, market cap and 24-hour changes for top 50 coins.', to: '/crypto', btn: 'Explore 💰', accent: BLUE },
            ].map((f, i) => (
              <div key={i} className="col-md-3 col-sm-6">
                <div className="glass-card text-center p-4 shadow-sm border-0 h-100 d-flex flex-column">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>{f.emoji}</div>
                  <h4 className="fw-bold mb-2" style={{ color: f.accent }}>{f.title}</h4>
                  <p className="fw-semibold flex-grow-1" style={{ color: '#666', lineHeight: '1.6' }}>{f.desc}</p>
                  <Link to={f.to} className="btn-cute mt-3 d-inline-block text-decoration-none">{f.btn}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <div className="cute-bg-alt py-5">
        <div className="container py-4">
          <h2 className="text-center fw-bold mb-2" style={{ color: '#333', fontSize: '2.2rem' }}>How It Works 🛠️</h2>
          <p className="text-center mb-5 fw-semibold" style={{ color: '#666' }}>Three simple steps to get started</p>
          <div className="row g-4 justify-content-center">
            {[
              { step: '1', emoji: '📝', title: 'Create an Account', desc: 'Sign up for free in seconds. No credit card required.', accent: PINK },
              { step: '2', emoji: '🔍', title: 'Explore APIs', desc: 'Browse Weather, Recipe, Crypto, and Cosmos APIs with one click.', accent: BLUE },
              { step: '3', emoji: '💾', title: 'Save & Track', desc: 'Save your favourite space images and track crypto coins in your dashboard.', accent: PINK },
            ].map((s, i) => (
              <div key={i} className="col-md-4">
                <div className="glass-card text-center p-5 shadow-sm border-0 h-100">
                  <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold mx-auto mb-4"
                    style={{ width: '60px', height: '60px', background: `linear-gradient(135deg, ${PINK}, ${BLUE})`, color: '#fff', fontSize: '1.4rem' }}>
                    {s.step}
                  </div>
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>{s.emoji}</div>
                  <h5 className="fw-bold mb-2" style={{ color: s.accent }}>{s.title}</h5>
                  <p className="mb-0 fw-semibold" style={{ color: '#777' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <div style={{ background: `linear-gradient(135deg, ${PINK}, ${BLUE})`, padding: '80px 0' }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-3" style={{ color: '#fff', fontSize: '2.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.15)' }}>
            Ready to explore? 🌟
          </h2>
          <p className="fs-5 mb-5 fw-semibold" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Join hundreds of developers already using API Hub.
          </p>
          <Link to="/register">
            <button className="btn btn-light rounded-pill fw-bold px-5 py-3 fs-5 shadow" style={{ color: PINK }}>
              Sign Up for Free
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
