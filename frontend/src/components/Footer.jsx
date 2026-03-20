import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp, MessageCircle } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/images/logo.png" alt="Quicq Solution" className="footer-logo-img" />
              <span className="footer-logo-text">
                Quicq<span className="logo-accent"> Solution</span>
              </span>
            </Link>
            <p className="footer-desc">
              Mumbai's trusted logistics partner — delivering parcels, goods, and bulk orders across the city with our fleet of trucks and carry vans.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="WhatsApp" className="footer-social-link"><MessageCircle size={18} /></a>
              <a href="#" aria-label="Facebook" className="footer-social-link"><Facebook size={18} /></a>
              <a href="#" aria-label="Twitter" className="footer-social-link"><Twitter size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="footer-social-link"><Linkedin size={18} /></a>
              <a href="#" aria-label="Instagram" className="footer-social-link"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="/#services">Our Services</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul>
              <li><a href="#">Truck Delivery</a></li>
              <li><a href="#">Carry Van Service</a></li>
              <li><a href="#">Warehousing</a></li>
              <li><a href="#">Same-Day Delivery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="footer-contact-icon" />
                <span>305/306, 3rd Floor, Evershine Mall, Chincholi Bunder Road, Malad West, Mumbai – 400064</span>
              </li>
              <li>
                <Phone size={18} className="footer-contact-icon" />
                <a href="tel:+918850935796">+91 88509 35796</a>
              </li>
              <li>
                <Mail size={18} className="footer-contact-icon" />
                <a href="mailto:info@quicqsolution.com">info@quicqsolution.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Quicq Solution. All Rights Reserved.</p>
          <button className="footer-scroll-top" onClick={scrollToTop} aria-label="Scroll to top" id="scroll-top-btn">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}
