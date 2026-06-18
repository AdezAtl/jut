import React from 'react';
import './Hero.css';
import plumberImg from '../assets/artisan_plumber.png';
import designerImg from '../assets/artisan_designer.png';
import electricianImg from '../assets/artisan_electrician.png';

interface FloatingBubbleProps {
  avatar: string;
  role: string;
  text: string;
  className: string;
}

const FloatingBubble: React.FC<FloatingBubbleProps> = ({ avatar, role, text, className }) => {
  return (
    <div className={`floating-node ${className}`}>
      <div className="node-connector"></div>
      <div className="avatar-circle">
        <img src={avatar} alt={role} />
      </div>
      <div className="speech-bubble">
        <span className="bubble-text">{text}</span>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="grid-bg">
        {/* Accent grid blocks highlighting parts of the grid */}
        <div className="grid-bg-accent" style={{ top: '20%', left: '15%' }}></div>
        <div className="grid-bg-accent" style={{ top: '65%', right: '10%' }}></div>
        <div className="grid-bg-accent" style={{ bottom: '15%', left: '40%' }}></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hire Skilled Professionals.<br />
            Right When You Need It.
          </h1>
          <p className="hero-subtitle">
            From trusted artisans to top digital talent — hire verified freelancers for any job, anytime.
          </p>
          <a href="#download" className="btn btn-primary btn-hero-cta">
            Download App
          </a>
        </div>

        {/* Floating artisan layout */}
        <div className="floating-layout-container">
          <FloatingBubble 
            avatar={plumberImg} 
            role="Plumber" 
            text="I need a Plumber" 
            className="node-1 animate-float" 
          />
          <FloatingBubble 
            avatar={designerImg} 
            role="Interior Designer" 
            text="I need a Designer" 
            className="node-2 animate-float-delayed" 
          />
          <FloatingBubble 
            avatar={electricianImg} 
            role="Electrician" 
            text="I need an Electrician" 
            className="node-3 animate-float" 
          />
          <FloatingBubble 
            avatar={plumberImg} /* reused for visual balance */
            role="Carpenter" 
            text="I need a Carpenter" 
            className="node-4 animate-float-delayed" 
          />
          <FloatingBubble 
            avatar={designerImg} 
            role="Painter" 
            text="I need a Painter" 
            className="node-5 animate-float" 
          />
        </div>
      </div>
    </section>
  );
};
