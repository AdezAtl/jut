import React from 'react';
import { Search, Zap, UserCheck, MapPin, CreditCard } from 'lucide-react';
import './HowItWorks.css';

interface StepItemProps {
  icon: React.ReactNode;
  title: string;
  descTitle: string;
  descText: string;
}

const StepItem: React.FC<StepItemProps> = ({ icon, title, descTitle, descText }) => {
  return (
    <div className="step-item">
      <div className="step-icon-container">
        {icon}
      </div>
      <div className="step-text-container">
        <h3 className="step-title">{title}</h3>
        <p className="step-desc">
          <strong className="step-desc-title">{descTitle}</strong> — {descText}
        </p>
      </div>
    </div>
  );
};

export const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container how-it-works-container">
        <div className="how-it-works-grid">
          
          {/* Left Column: Title and Dots */}
          <div className="how-left-side">
            <h2 className="how-main-title">How it Works (Client)</h2>
            <p className="how-main-text">
              Simple, fast, and seamless. From booking trusted professionals to getting the job done, everything happens in just a few taps.
            </p>
            
            {/* Carousel Dot Indicators */}
            <div className="how-dots-indicator">
              <span className="dot active"></span>
              <span className="dot"></span>
            </div>
          </div>

          {/* Right Column: 5 Steps list */}
          <div className="how-right-side">
            <StepItem 
              icon={<Search size={22} color="#ffffff" />}
              title="Search"
              descTitle="Tell Us What You Need"
              descText="Describe your job in seconds, including photos and preferred schedule."
            />
            <StepItem 
              icon={<Zap size={22} color="#ffffff" />}
              title="Match"
              descTitle="Instant Matching"
              descText="Our dispatch system matches you with the best nearby artisan in 45 seconds."
            />
            <StepItem 
              icon={<UserCheck size={22} color="#ffffff" />}
              title="Hire"
              descTitle="Hire with Confidence"
              descText="Compare ratings, bios, and quotes to select your ideal match."
            />
            <StepItem 
              icon={<MapPin size={22} color="#ffffff" />}
              title="Track in Real Time"
              descTitle="Real-time Updates"
              descText="Live track your professional's GPS location from arrival to job completion."
            />
            <StepItem 
              icon={<CreditCard size={22} color="#ffffff" />}
              title="Pay & Review"
              descTitle="Pay Securely"
              descText="Your funds are held in secure escrow. Only release them when the job is done ✅."
            />
          </div>

        </div>
      </div>
    </section>
  );
};
