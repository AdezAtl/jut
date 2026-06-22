import React from "react";
import "./StatsSection.css";

interface StatCardProps {
  number: string;
  label: string;
  isHighlighted?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  number,
  label,
  isHighlighted,
}) => {
  return (
    <div className={`stat-card ${isHighlighted ? "highlighted" : ""}`}>
      <h3 className="stat-number">{number}</h3>
      <p className="stat-label">{label}</p>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="stats-section" id="about-us">
      <div className="container stats-container">
        <div className="stats-grid">
          {/* Left: 4 Metric Cards */}
          <div className="stats-cards-side">
            <div className="stats-cards-grid">
              <StatCard number="5000+" label="Professional handymen" />
              <StatCard number="5000+" label="Clients" />
              <StatCard number="5000+" label="Successful jobs" />
              <StatCard
                number="5000+"
                label="Satisfied clients"
                isHighlighted={true}
              />
            </div>
          </div>

          {/* Right: Commitments Description */}
          <div className="stats-info-side">
            <h2 className="info-title">Commitments</h2>
            <p className="info-text">
              We are committed to working with you collaboratively to understand
              your goals and develop a strategy that will achieve them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
