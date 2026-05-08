import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../api';
import '/node_modules/bootstrap/dist/css/bootstrap.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await loginUser(formData.email, formData.password);
      login(data.user, data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cute-bg pt-5 d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="glass-card p-5 shadow-sm text-center border-0">
              <div className="text-center mb-4">
                <div className="display-4 mb-3">👋</div>
                <h2 className="fw-bold cute-title">Welcome Back!</h2>
                <p className="text-secondary fw-bold">Sign in to your API Hub account 🎀</p>
              </div>

              {error && <div className="alert alert-danger rounded-pill fw-bold border-0 shadow-sm">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control rounded-pill border-0 shadow-sm px-4 text-center"
                    style={{ height: '50px' }}
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control rounded-pill border-0 shadow-sm px-4 text-center"
                    style={{ height: '50px' }}
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn-cute w-100 fs-5 mt-2" disabled={loading}>
                  {loading ? 'Signing in...' : 'Sign In 🚀'}
                </button>
              </form>

              <div className="text-center mt-4 pt-3 border-top">
                <p className="text-secondary fw-bold mb-0">
                  New here? <Link to="/register" className="text-primary text-decoration-none ms-1">Create an account ✨</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
