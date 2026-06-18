import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        {/* Main Footer Row */}
        <div className="footer-top">
          {/* Logo & Socials column */}
          <div className="footer-brand-col">
            <a href="#" className="footer-logo">
              <img src="/light_logo.PNG" className="logo-img" alt="jut logo" />
              <span className="logo-text">jut</span>
            </a>
            
            <div className="social-links">
              <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>

            <a href="#contact" className="btn btn-primary btn-contact">
              Contact Us
            </a>
          </div>

          {/* Quick link columns (optional but standard, let's keep it simple as the design has contact button and brand) */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Services</h4>
            <a href="#plumbing" className="footer-link">Plumbing</a>
            <a href="#electrical" className="footer-link">Electrical</a>
            <a href="#carpentry" className="footer-link">Carpentry</a>
            <a href="#painting" className="footer-link">Painting</a>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Company</h4>
            <a href="#about" className="footer-link">About Us</a>
            <a href="#careers" className="footer-link">Careers</a>
            <a href="#press" className="footer-link">Press Kit</a>
            <a href="#contact-info" className="footer-link">Help Center</a>
          </div>
        </div>

        {/* Divider line */}
        <hr className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">© 2026 - All Rights Reserved</p>
          <div className="legal-links">
            <a href="#terms" className="legal-link">Terms of use</a>
            <a href="#privacy" className="legal-link">Privacy policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
