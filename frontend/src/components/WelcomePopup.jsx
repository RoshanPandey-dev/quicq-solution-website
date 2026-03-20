import { useState, useEffect } from 'react'
import { X, CheckCircle } from 'lucide-react'
import './WelcomePopup.css'
import axios from 'axios'

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('welcomePopupShown')
    if (!alreadyShown) {
      const timer = setTimeout(() => setIsOpen(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem('welcomePopupShown', 'true')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8000/api/v1/popup', formData)
      setSubmitted(true)
      setTimeout(() => {
        handleClose()
        setSubmitted(false)
        setFormData({ name: '', email: '', phone: '', message: '' })
      }, 3000)
    } catch (error) {
      console.error('Error submitting popup form:', error)
      alert('Failed to submit. Please try again later.')
    }
  }

  if (!isOpen) return null

  return (
    <div className="welcome-overlay" onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}>
      <div className="welcome-popup">
        <div className="welcome-popup-header">
          <h2>👋 Welcome</h2>
          <button className="welcome-popup-close" onClick={handleClose} aria-label="Close">
            <X size={22} />
          </button>
        </div>
        <form className="welcome-popup-form" onSubmit={handleSubmit}>
          {submitted && (
            <div className="welcome-success">
              <CheckCircle size={20} />
              <span>Thank you! Your inquiry has been sent.</span>
            </div>
          )}
          <div className="welcome-field">
            <label htmlFor="welcome-name">Name</label>
            <input type="text" id="welcome-name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
          </div>
          <div className="welcome-field">
            <label htmlFor="welcome-email">Email</label>
            <input type="email" id="welcome-email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
          </div>
          <div className="welcome-field">
            <label htmlFor="welcome-phone">Phone Number</label>
            <input type="tel" id="welcome-phone" name="phone" value={formData.phone} onChange={handleChange} pattern="^\+?[0-9\s\-]{7,15}$" title="Enter a valid 10-15 digit phone number" placeholder="+91 98765 43210" required />
          </div>
          <div className="welcome-field">
            <label htmlFor="welcome-message">Message</label>
            <textarea id="welcome-message" name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." required />
          </div>
          <div className="welcome-popup-actions">
            <button type="button" className="welcome-btn-cancel" onClick={handleClose}>Cancel</button>
            <button type="submit" className="welcome-btn-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
