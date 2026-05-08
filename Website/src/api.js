// Central API base URL — set VITE_API_URL in your .env for production
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// ── Helper ────────────────────────────────────────────────────────────────────
const request = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, options);
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Something went wrong');
  return data;
};

// ── Auth ──────────────────────────────────────────────────────────────────────
export const registerUser = (name, email, password) =>
  request('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });

export const loginUser = (email, password) =>
  request('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

export const getMe = (token) =>
  request('/api/auth/me', {
    headers: { Authorization: `Bearer ${token}` },
  });

// ── User — Portfolio ──────────────────────────────────────────────────────────
export const getPortfolio = (token) =>
  request('/api/user/portfolio', {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addToPortfolio = (token, coin) =>
  request('/api/user/portfolio', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(coin),
  });

export const removeFromPortfolio = (token, coinId) =>
  request(`/api/user/portfolio/${coinId}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });

// ── User — Favorites ─────────────────────────────────────────────────────────
export const getFavorites = (token) =>
  request('/api/user/favorites', {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addToFavorites = (token, image) =>
  request('/api/user/favorites', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(image),
  });

export const removeFromFavorites = (token, id) =>
  request(`/api/user/favorites/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
