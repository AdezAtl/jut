import React, { useState } from 'react';
import { Search, Zap, UserCheck, MapPin, CreditCard, Briefcase, Bell, FileText, CheckCircle2, DollarSign } from 'lucide-react';
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
  const [userType, setUserType] = useState<'client' | 'professional'>('client');

  const clientSteps = [
    {
      icon: <Search size={26} color="#ffffff" />,
      title: "Search",
      descTitle: "Tell Us What You Need",
      descText: "Describe your job in seconds, including photos and preferred schedule."
    },
    {
      icon: <Zap size={26} color="#ffffff" />,
      title: "Match",
      descTitle: "Instant Matching",
      descText: "Our dispatch system matches you with the best nearby artisan in 45 seconds."
    },
    {
      icon: <UserCheck size={26} color="#ffffff" />,
      title: "Hire",
      descTitle: "Hire with Confidence",
      descText: "Compare ratings, bios, and quotes to select your ideal match."
    },
    {
      icon: <MapPin size={26} color="#ffffff" />,
      title: "Track in Real Time",
      descTitle: "Real-time Updates",
      descText: "Live track your professional's GPS location from arrival to job completion."
    },
    {
      icon: <CreditCard size={26} color="#ffffff" />,
      title: "Pay & Review",
      descTitle: "Pay Securely",
      descText: "Your funds are held in secure escrow. Only release them when the job is done ✅."
    }
  ];

  const professionalSteps = [
    {
      icon: <Briefcase size={26} color="#ffffff" />,
      title: "Profile",
      descTitle: "Showcase Your Skills",
      descText: "Build a standout profile with your trade, experience, certifications, and portfolio."
    },
    {
      icon: <Bell size={26} color="#ffffff" />,
      title: "Leads",
      descTitle: "Receive Job Alerts",
      descText: "Get matched with relevant, nearby jobs in real-time. No bidding wars or lead fees."
    },
    {
      icon: <FileText size={26} color="#ffffff" />,
      title: "Quote",
      descTitle: "Send Custom Quotes",
      descText: "Chat with clients, discuss details, and offer your price in seconds."
    },
    {
      icon: <CheckCircle2 size={26} color="#ffffff" />,
      title: "Deliver",
      descTitle: "Provide Great Service",
      descText: "Navigate to the job, complete the work, and mark the job finished on the app."
    },
    {
      icon: <DollarSign size={26} color="#ffffff" />,
      title: "Payouts",
      descTitle: "Direct Secure Payouts",
      descText: "Funds are released directly to your account immediately after job approval."
    }
  ];

  const currentSteps = userType === 'client' ? clientSteps : professionalSteps;

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container how-it-works-container">
        <div className="how-it-works-grid">
          
          {/* Left Column: Title and Dots */}
          <div className="how-left-side">
            <div className="how-header-container">
              <h2 className="how-main-title">How it Works</h2>
              <div className="user-type-toggle">
                <button
                  className={`toggle-option ${userType === 'client' ? 'active' : ''}`}
                  onClick={() => setUserType('client')}
                >
                  Client
                </button>
                <button
                  className={`toggle-option ${userType === 'professional' ? 'active' : ''}`}
                  onClick={() => setUserType('professional')}
                >
                  Professionals
                </button>
              </div>
            </div>
            
            <p className="how-main-text">
              {userType === 'client' 
                ? "Simple, fast, and seamless. From booking trusted professionals to getting the job done, everything happens in just a few taps."
                : "Grow your business, find high-paying jobs, and work on your own schedule. We connect you with local clients needing your expertise."}
            </p>
            
            {/* Carousel Dot Indicators */}
            <div className="how-dots-indicator">
              <span 
                className={`dot ${userType === 'client' ? 'active' : ''}`}
                onClick={() => setUserType('client')}
              ></span>
              <span 
                className={`dot ${userType === 'professional' ? 'active' : ''}`}
                onClick={() => setUserType('professional')}
              ></span>
            </div>
          </div>

          {/* Right Column: Steps list */}
          <div className="how-right-side">
            {currentSteps.map((step, idx) => (
              <StepItem 
                key={idx}
                icon={step.icon}
                title={step.title}
                descTitle={step.descTitle}
                descText={step.descText}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
