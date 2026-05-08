import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm" style={{ 
      background: 'rgba(255, 255, 255, 0.85)', 
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
    }}>
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2" to="/">
          <span className="cute-title" style={{ background: 'linear-gradient(45deg, #ff9a9e, #fecfef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            API Hub
          </span>
        </Link>
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
            <li className="nav-item">
              <Link className="nav-link text-secondary mx-2 hover-pink" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-secondary mx-2 hover-pink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Features ✨
              </a>
              <ul className="dropdown-menu border-0 shadow-sm rounded-4" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
                <li><Link className="dropdown-item py-2 text-secondary fw-bold hover-bg-pink" to="/weather">🌤️ Weather</Link></li>
                <li><Link className="dropdown-item py-2 text-secondary fw-bold hover-bg-pink" to="/recipe">🍳 Recipe</Link></li>
                <li><Link className="dropdown-item py-2 text-secondary fw-bold hover-bg-pink" to="/crypto">💰 Crypto</Link></li>
                <li><Link className="dropdown-item py-2 text-secondary fw-bold hover-bg-pink" to="/cosmos">🚀 Cosmos</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary mx-2 hover-pink" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary mx-2 hover-pink" to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="d-flex gap-3 align-items-center">
            {user ? (
              <div className="dropdown">
                <button className="btn btn-light rounded-pill dropdown-toggle fw-bold text-secondary border-0 shadow-sm d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="rounded-circle d-flex align-items-center justify-content-center text-white" style={{ width: '25px', height: '25px', background: 'linear-gradient(45deg, #fbc2eb, #a6c1ee)' }}>
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  {user.name}
                </button>
                <ul className="dropdown-menu dropdown-menu-end border-0 shadow-sm rounded-4 mt-2">
                  <li><Link className="dropdown-item py-2 text-secondary fw-bold hover-bg-pink" to="/dashboard">Dashboard 🌟</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item py-2 text-danger fw-bold hover-bg-pink" onClick={handleLogout}>Logout 🚪</button></li>
                </ul>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn btn-light rounded-pill fw-bold text-secondary border-0 shadow-sm px-4">Sign In</button>
                </Link>
                <Link to="/register">
                  <button className="btn-cute px-4 py-2">Join Us 🚀</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
