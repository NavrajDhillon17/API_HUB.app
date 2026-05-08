import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { addToFavorites } from '../api';
import '/node_modules/bootstrap/dist/css/bootstrap.css';

export default function Cosmos() {
  const [images, setImages] = useState([]);
  const { user, token } = useAuth();
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=12')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(console.error);
  }, []);

  const saveFavorite = async (img) => {
    if (!user) {
      setMessage('Please log in to save images');
      setTimeout(() => setMessage(''), 3000);
      return;
    }
    try {
      await addToFavorites(token, { title: img.title, url: img.url, date: img.date, explanation: img.explanation });
      setMessage(`Saved "${img.title}"! 🚀`);
    } catch (err) {
      setMessage(err.message);
    }
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="cute-bg-darker pt-5" style={{ minHeight: '100vh', paddingBottom: '50px' }}>
      <h1 className="text-center fw-bold p-5 mt-4 cute-title">🌌 Cosmos Gallery ✨</h1>
      <p className="text-center text-secondary fw-bold mb-5">Explore breathtaking random space images 🚀</p>

      {message && <div className="alert alert-info text-center w-50 mx-auto fixed-top mt-5 rounded-pill shadow-sm fw-bold border-0" style={{ zIndex: 1050 }}>{message}</div>}

      <div className="container">
        <div className="row g-4">
          {images.map((img, idx) => (
            <div key={idx} className="col-md-4">
              <div className="glass-card p-3 h-100 d-flex flex-column justify-content-between text-center border-0 shadow-sm">
                <img src={img.url} className="card-img-top rounded-4 mb-3" alt={img.title} style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column justify-content-between p-0">
                  <div>
                    <h5 className="card-title fw-bold" style={{ color: '#444' }}>{img.title}</h5>
                    <p className="text-secondary fw-bold"><small>{img.date}</small></p>
                    <p className="card-text text-secondary mb-3" style={{ fontSize: '0.85rem' }}>
                      {img.explanation?.slice(0, 100)}...
                    </p>
                  </div>
                  <button className="btn-cute w-100" onClick={() => saveFavorite(img)}>
                    ❤️ Save to Dashboard
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
