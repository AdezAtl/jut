import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './Testimonials.css';
import plumberImg from '../assets/artisan_plumber.png';
import designerImg from '../assets/artisan_designer.png';
import electricianImg from '../assets/artisan_electrician.png';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  comment: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Amelia Joseph",
    role: "Client",
    avatar: designerImg,
    comment: "My plumbing issue resolved easily. Booking a technician was incredibly fast and seamless. The professional arrived on time and did an amazing job. I highly recommend and the results were beyond my expectations."
  },
  {
    id: 2,
    name: "Jacob Joshua",
    role: "Painter",
    avatar: plumberImg,
    comment: "Very friendly team. They tracked my professional in real time. Standard service and experience. Feeling safe and relaxed."
  },
  {
    id: 3,
    name: "Jacob Adams",
    role: "Electrician",
    avatar: electricianImg,
    comment: "The app makes matching so easy. The support was simple, I got three recommendations, and my AC was fixed within an hour."
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Client",
    avatar: designerImg,
    comment: "Outstanding customer service and high-quality craftsmanship. The wooden table they repaired is like brand new now!"
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 6000); // Slides slowly (6 seconds)
  };

  const stopAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handlePrev = () => {
    stopAutoSlide();
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    startAutoSlide();
  };

  const handleNext = () => {
    stopAutoSlide();
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    startAutoSlide();
  };

  // Shift logic to keep the active card centered/first
  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < testimonialsData.length; i++) {
      const index = (activeIndex + i) % testimonialsData.length;
      items.push({ ...testimonialsData[index], isFirst: i === 0 });
    }
    return items;
  };

  const visibleItems = getVisibleTestimonials();

  return (
    <section className="testimonials-section">
      <div className="container">
        
        {/* Header with Navigation */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">What our users say</h2>
          <div className="slider-controls">
            <button className="slider-btn btn-prev" onClick={handlePrev} aria-label="Previous testimonial">
              <ArrowLeft size={20} />
            </button>
            <button className="slider-btn btn-next" onClick={handleNext} aria-label="Next testimonial">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid/Track */}
        <div className="testimonials-track">
          {visibleItems.slice(0, 3).map((item) => (
            <div key={item.id} className={`testimonial-card ${item.isFirst ? 'active' : ''}`}>
              <div className="card-header">
                <div className="user-avatar">
                  <img src={item.avatar} alt={item.name} />
                </div>
                <div className="user-details">
                  <h4 className="user-name">{item.name}</h4>
                  <span className="user-role">{item.role}</span>
                </div>
              </div>
              <p className="user-comment">
                "{item.comment}"
              </p>
            </div>
          ))}
        </div>

        {/* Small Progress Dots */}
        <div className="slider-dots">
          {testimonialsData.map((_, index) => (
            <span 
              key={index} 
              className={`slider-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                stopAutoSlide();
                setActiveIndex(index);
                startAutoSlide();
              }}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
};
