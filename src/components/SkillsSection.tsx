import React from 'react';
import './SkillsSection.css';

const row1Skills = [
  'Plumber', 'Electrician', 'Carpenter', 'Painter', 'Interior Designer', 
  'Roofer', 'Mason', 'Welder', 'Gardener', 'AC Technician'
];

const row2Skills = [
  'House Cleaner', 'Auto Mechanic', 'Tailor', 'Hairdresser', 'Makeup Artist', 
  'Caterer', 'Photographer', 'Graphic Designer', 'Web Developer', 'App Developer'
];

export const SkillsSection: React.FC = () => {
  // We duplicate the list to make the infinite scroll track seamless
  const track1 = [...row1Skills, ...row1Skills];
  const track2 = [...row2Skills, ...row2Skills];

  return (
    <section className="skills-section" id="for-client">
      <div className="container skills-container">
        <h2 className="skills-title">One platform. Every skill you need.</h2>
        
        <div className="skills-scroller-container">
          {/* Row 1: Scroll Left */}
          <div className="skills-row">
            <div className="scroll-track">
              {track1.map((skill, index) => (
                <div className="skill-badge" key={`r1-${index}`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scroll Right */}
          <div className="skills-row mt-4">
            <div className="scroll-track-reverse">
              {track2.map((skill, index) => (
                <div className="skill-badge" key={`r2-${index}`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
