import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-logo">
          <svg className="logo-svg" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="14" stroke="url(#logo-grad)" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="60 30" />
            <path d="M17 11V18C17 19.6569 15.6569 21 14 21C12.3431 21 11 19.6569 11 18" stroke="url(#logo-grad)" strokeWidth="4.5" strokeLinecap="round" />
            <defs>
              <linearGradient id="logo-grad" x1="3" y1="3" x2="31" y2="31" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2F69FF" />
                <stop offset="1" stopColor="#1D52DF" />
              </linearGradient>
            </defs>
          </svg>
          <span className="logo-text">jut</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#how-it-works" className="nav-link">How it works</a>
          <a href="#for-client" className="nav-link">For client</a>
          <a href="#for-professional" className="nav-link">For Professional</a>
          <a href="#about-us" className="nav-link">About Us</a>
        </nav>

        <div className="navbar-actions">
          <a href="#book" className="btn btn-primary btn-book">Book a service</a>
          <button className="mobile-toggle-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          <a href="#how-it-works" className="mobile-nav-link" onClick={() => setIsOpen(false)}>How it works</a>
          <a href="#for-client" className="mobile-nav-link" onClick={() => setIsOpen(false)}>For client</a>
          <a href="#for-professional" className="mobile-nav-link" onClick={() => setIsOpen(false)}>For Professional</a>
          <a href="#about-us" className="mobile-nav-link" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#book" className="btn btn-primary mobile-book-btn" onClick={() => setIsOpen(false)}>Book a service</a>
        </nav>
      </div>
    </header>
  );
};
