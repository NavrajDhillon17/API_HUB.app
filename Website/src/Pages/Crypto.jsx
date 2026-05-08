import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { addToPortfolio } from '../api';
import '/node_modules/bootstrap/dist/css/bootstrap.css';

export default function Crypto() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const { user, token } = useAuth();
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCoins(data);
        } else {
          // Fallback dummy data if rate limited
          setCoins([
            { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin', image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png', current_price: 64000, price_change_percentage_24h: 2.5 },
            { id: 'ethereum', symbol: 'eth', name: 'Ethereum', image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png', current_price: 3400, price_change_percentage_24h: -1.2 },
            { id: 'solana', symbol: 'sol', name: 'Solana', image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png', current_price: 145, price_change_percentage_24h: 5.6 },
            { id: 'binancecoin', symbol: 'bnb', name: 'BNB', image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png', current_price: 590, price_change_percentage_24h: 0.8 }
          ]);
          setMessage('Using fallback data (Live API Rate Limited).');
          setTimeout(() => setMessage(''), 4000);
        }
      })
      .catch(() => {
        setCoins([
          { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin', image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png', current_price: 64000, price_change_percentage_24h: 2.5 },
          { id: 'ethereum', symbol: 'eth', name: 'Ethereum', image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png', current_price: 3400, price_change_percentage_24h: -1.2 },
          { id: 'solana', symbol: 'sol', name: 'Solana', image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png', current_price: 145, price_change_percentage_24h: 5.6 },
          { id: 'binancecoin', symbol: 'bnb', name: 'BNB', image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png', current_price: 590, price_change_percentage_24h: 0.8 }
        ]);
        setMessage('Using fallback data (Live API Network/CORS Error).');
        setTimeout(() => setMessage(''), 4000);
      });
  }, []);

  const safeCoins = Array.isArray(coins) ? coins : [];
  const filtered = safeCoins.filter(c => c && c.name && c.name.toLowerCase().includes(search.toLowerCase()));

  const addToPortfolio = async (coin) => {
    if (!user) {
      setMessage('Please log in to add to portfolio');
      setTimeout(() => setMessage(''), 3000);
      return;
    }
    try {
      await addToPortfolio(token, { coinId: coin.id, symbol: coin.symbol, name: coin.name });
      setMessage(`Added ${coin.name} to portfolio!`);
    } catch (err) {
      setMessage(err.message);
    }
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="cute-bg pt-5" style={{ minHeight: '100vh', paddingBottom: '50px' }}>
      <h1 className="text-center fw-bold p-5 mt-4 cute-title">📈 Crypto Dashboard 🌟</h1>
      <div className="container mb-4">
        <input 
          type="text" 
          className="form-control w-50 mx-auto rounded-pill text-center border-0 shadow-sm" 
          style={{ height: '50px' }}
          placeholder="Search your favorite coins... 💖" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      {message && <div className="alert alert-info text-center w-50 mx-auto rounded-pill fw-bold border-0 shadow-sm">{message}</div>}

      <div className="container">
        <div className="row g-4">
          {filtered.map(coin => (
            <div key={coin.id} className="col-md-3">
              <div className="glass-card p-4 h-100 d-flex flex-column justify-content-between text-center">
                <div className="d-flex align-items-center justify-content-center mb-3 flex-column">
                  <img src={coin.image} alt={coin.name} style={{ width: '60px', height: '60px', marginBottom: '10px' }} />
                  <div>
                    <h5 className="mb-0 fw-bold" style={{ color: '#555' }}>{coin.name}</h5>
                    <small className="text-secondary fw-bold text-uppercase">{coin.symbol}</small>
                  </div>
                </div>
                <div>
                  <h3 className="fw-bold" style={{ color: '#444' }}>${coin.current_price?.toLocaleString() || 'N/A'}</h3>
                  <p className={coin.price_change_percentage_24h > 0 ? 'text-success fw-bold' : 'text-danger fw-bold'}>
                    {coin.price_change_percentage_24h > 0 ? '📈 ' : '📉 '} 
                    {coin.price_change_percentage_24h?.toFixed(2) || '0.00'}% (24h)
                  </p>
                  <button className="btn-cute w-100 mt-2" onClick={() => addToPortfolio(coin)}>
                    ⭐ Watch
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
