import React, { useState } from 'react'
import '/src/App.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon. 🎀')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="cute-bg pt-5" style={{ minHeight: '100vh', paddingBottom: '50px' }}>
      <div className="hero">
        <div className="container py-5">
          <h1 className="text-center mb-5 display-4 fw-bold cute-title">Contact Us 💌</h1>
          <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="glass-card p-5 h-100 shadow-sm text-center">
                      <h3 className="mb-4 fw-bold" style={{ color: '#555' }}>Get in Touch ✨</h3>
                      <div className="mb-4">
                        <h5 className="fw-bold text-secondary">📧 Email</h5>
                        <p className="fw-bold text-primary">support@apihub.cute</p>
                      </div>
                      <div className="mb-4">
                        <h5 className="fw-bold text-secondary">📱 Phone</h5>
                        <p className="fw-bold text-primary">+1 (555) 123-4567</p>
                      </div>
                      <div className="mb-4">
                        <h5 className="fw-bold text-secondary">📍 Address</h5>
                        <p className="fw-bold text-primary">123 Street<br />Pastel Valley, CA 94025</p>
                      </div>
                      <div className="mb-4">
                        <h5 className="fw-bold text-secondary">🕐 Business Hours</h5>
                        <p className="fw-bold text-primary">Monday - Friday: 9AM - 6PM<br />Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6 mb-4">
                    <div className="glass-card p-5 h-100 shadow-sm border-0" style={{ background: 'rgba(255,255,255,0.85)' }}>
                      <h3 className="mb-4 fw-bold text-center" style={{ color: '#555' }}>✉️ Send us a Message</h3>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label fw-bold text-secondary">Name</label>
                          <input
                            type="text"
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            style={{ height: '50px' }}
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label fw-bold text-secondary">Email</label>
                          <input
                            type="email"
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            style={{ height: '50px' }}
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="subject" className="form-label fw-bold text-secondary">Subject</label>
                          <input
                            type="text"
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            style={{ height: '50px' }}
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="message" className="form-label fw-bold text-secondary">Message</label>
                          <textarea
                            className="form-control rounded-4 border-0 shadow-sm p-3"
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                        <button type="submit" className="btn-cute w-100 fs-5">
                          Send Message 🚀
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-12 text-center">
                    <div className="glass-card p-5 shadow-sm">
                      <h3 className="mb-4 fw-bold cute-title">🌟 Follow Us</h3>
                      <div className="row">
                        <div className="col-md-3 mb-3">
                          <div className="p-3">
                            <h5 className="fw-bold text-secondary">📘 Facebook</h5>
                            <p className="fw-bold text-primary">@apihub</p>
                          </div>
                        </div>
                        <div className="col-md-3 mb-3">
                          <div className="p-3">
                            <h5 className="fw-bold text-secondary">🐦 Twitter</h5>
                            <p className="fw-bold text-primary">@apihub_dev</p>
                          </div>
                        </div>
                        <div className="col-md-3 mb-3">
                          <div className="p-3">
                            <h5 className="fw-bold text-secondary">💼 LinkedIn</h5>
                            <p className="fw-bold text-primary">API Hub Company</p>
                          </div>
                        </div>
                        <div className="col-md-3 mb-3">
                          <div className="p-3">
                            <h5 className="fw-bold text-secondary">🐙 GitHub</h5>
                            <p className="fw-bold text-primary">github.com/apihub</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
