import React from 'react';
import './PromoBanner.css';

export const PromoBanner: React.FC = () => {
  return (
    <section className="promo-section">
      <div className="container">
        <div className="promo-card">
          {/* Overlay elements representing the geometric circle patterns from the design */}
          <div className="promo-circle-overlay circle-1"></div>
          <div className="promo-circle-overlay circle-2"></div>
          <div className="promo-circle-overlay circle-3"></div>

          <div className="promo-content">
            <h2 className="promo-title">Elevate Your Brand Today!</h2>
            <div className="promo-info">
              <p className="promo-text">
                Join thousands of clients and professionals already using the platform to connect, work smarter, and get things done faster.
              </p>
              <a href="#download" className="btn btn-white btn-promo-cta">
                Download App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
