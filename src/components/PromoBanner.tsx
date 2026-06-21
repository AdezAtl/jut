import React from "react";
import "./PromoBanner.css";

interface PromoBannerProps {
  theme: "light" | "dark";
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section className="promo-section">
      <div className="promo-container">
        <div
          className={`cta-banner ${isDark ? "banner-dark" : "banner-light"}`}
        >
          <div className="cta-left">
            <h2 className="cta-headline">
              Elevate Your
              <br />
              Brand Today!
            </h2>
          </div>
          <div className="cta-right">
            <p className="cta-body">
              Join thousands of clients and professionals already using the
              platform to connect, work smarter, and get things done faster.
            </p>
            <a
              href="#download"
              className={`cta-btn ${isDark ? "btn-dark" : "btn-light"}`}
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
