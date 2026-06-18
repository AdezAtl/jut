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
          <img src="/light_logo.PNG" className="logo-img" alt="jut logo" />
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
