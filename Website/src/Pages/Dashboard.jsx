import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getFavorites, getPortfolio } from '../api';
import '/node_modules/bootstrap/dist/css/bootstrap.css';

export default function Dashboard() {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchData = async () => {
      try {
        const [favData, portData] = await Promise.all([
          getFavorites(token),
          getPortfolio(token),
        ]);
        setFavorites(favData);
        setPortfolio(portData);
      } catch (err) {
        setError('Failed to load dashboard data');
      }
    };

    fetchData();
  }, [user, token, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="cute-bg pt-5" style={{ minHeight: '100vh', paddingBottom: '50px' }}>
      <div className="container mt-5">
        <div className="glass-card p-5 mb-5 shadow-sm text-center border-0 position-relative">
          <button className="btn btn-outline-danger position-absolute top-0 end-0 m-4 rounded-pill fw-bold" onClick={handleLogout}>
            Logout 🚪
          </button>
          <div className="d-flex align-items-center justify-content-center flex-column mb-4">
            <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: '100px', height: '100px', background: 'linear-gradient(135deg, #fbc2eb, #a6c1ee)', color: 'white', fontSize: '2.5rem' }}>
              {user.name.charAt(0).toUpperCase()}
            </div>
            <h1 className="mt-3 fw-bold cute-title">Welcome back, {user.name}! 🎀</h1>
            <p className="text-secondary fw-bold fs-5">{user.email}</p>
          </div>
        </div>

        {error && <div className="alert alert-danger rounded-pill fw-bold shadow-sm border-0">{error}</div>}

        <div className="row g-4 mb-5">
          <div className="col-12">
            <h2 className="fw-bold mb-4 cute-title text-center">📈 My Crypto Portfolio</h2>
            <div className="row g-4 justify-content-center">
              {portfolio.length === 0 ? (
                <p className="text-center text-secondary fw-bold">No coins added yet! Go track some crypto 🌟</p>
              ) : (
                portfolio.map((coin, idx) => (
                  <div key={idx} className="col-md-3">
                    <div className="glass-card p-4 text-center shadow-sm h-100 border-0">
                      <h4 className="fw-bold" style={{ color: '#555' }}>{coin.name}</h4>
                      <p className="text-secondary fw-bold text-uppercase">{coin.symbol}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-12">
            <h2 className="fw-bold mb-4 cute-title text-center">🌌 Saved Cosmos Images</h2>
            <div className="row g-4 justify-content-center">
              {favorites.length === 0 ? (
                <p className="text-center text-secondary fw-bold">No saved images yet! Explore the cosmos 🚀</p>
              ) : (
                favorites.map((fav, idx) => (
                  <div key={idx} className="col-md-4">
                    <div className="glass-card p-3 h-100 d-flex flex-column text-center shadow-sm border-0">
                      <img src={fav.url} alt={fav.title} className="card-img-top rounded-4 mb-3" style={{ height: '200px', objectFit: 'cover' }} />
                      <div className="card-body p-0">
                        <h5 className="fw-bold" style={{ color: '#444' }}>{fav.title}</h5>
                        <p className="text-secondary fw-bold"><small>{new Date(fav.date).toLocaleDateString()}</small></p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
