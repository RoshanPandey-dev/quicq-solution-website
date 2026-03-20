import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import './WelcomePopup.css'
import axios from 'axios'

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

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
      handleClose()
      setFormData({ name: '', email: '', message: '' })
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
          <div className="welcome-field">
            <label htmlFor="welcome-name">Name</label>
            <input type="text" id="welcome-name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
          </div>
          <div className="welcome-field">
            <label htmlFor="welcome-email">Email</label>
            <input type="email" id="welcome-email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
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
