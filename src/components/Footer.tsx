import React from "react";
import { Facebook, Instagram } from "lucide-react";
import "./Footer.css";

const TiktokIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-tiktok"
  >
    <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
  </svg>
);

interface FooterProps {
  theme: "light" | "dark";
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Row */}
        <div className="footer-top">
          {/* Logo & Socials column */}
          <div className="footer-brand-col">
            <a href="#" className="footer-logo">
              <img
                src={theme === "dark" ? "/dark_logo.PNG" : "/light_logo.PNG"}
                className="logo-img"
                alt="jut logo"
              />
              <span className="logo-text">jut</span>
            </a>

            <div className="social-links">
              <a
                href="https://www.facebook.com/share/1Cv49djG3V/?mibextid=wwXIfr"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@aoniltd?_r=1&_t=ZS-97OYQ3OfDAT"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <TiktokIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/aoniltd?igsh=aWplMmV0M3F1djN2&utm_source=qr"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
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
            <a href="#plumbing" className="footer-link">
              Plumbing
            </a>
            <a href="#electrical" className="footer-link">
              Electrical
            </a>
            <a href="#carpentry" className="footer-link">
              Carpentry
            </a>
            <a href="#painting" className="footer-link">
              Painting
            </a>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Company</h4>
            <a href="#about" className="footer-link">
              About Us
            </a>
            <a href="#careers" className="footer-link">
              Careers
            </a>
            <a href="#press" className="footer-link">
              Press Kit
            </a>
            <a href="#contact-info" className="footer-link">
              Help Center
            </a>
          </div>
        </div>

        {/* Divider line */}
        <hr className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">&copy; 2026 - All Rights Reserved</p>
          <div className="legal-links">
            <a href="#terms" className="legal-link">
              Terms of use
            </a>
            <a href="#privacy" className="legal-link">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
