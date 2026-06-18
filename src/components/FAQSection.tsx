import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import './FAQSection.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How do I book a service?",
    answer: "Open the Jut app, select the category of service you need (e.g. Electrician, Plumber), describe the issue, set your location, and post the request. The dispatch system will instantly match you with a verified professional near you."
  },
  {
    id: 2,
    question: "Are the professionals verified?",
    answer: "Yes, 100%. Every artisan on Jut goes through a rigorous KYC verification process via Smile ID, facial matching, and background identity checks before they can accept any job orders."
  },
  {
    id: 3,
    question: "What if I'm not satisfied with the service?",
    answer: "Jut uses an escrow payment system. Your payment is held securely by us and is only released to the artisan once you confirm the job is completed to your satisfaction. If there is an issue, you can log a dispute and our support team will resolve it."
  },
  {
    id: 4,
    question: "How do payments work?",
    answer: "You fund the job quote securely via Paystack (using card, bank transfer, or USSD). The funds are held in escrow. Once you confirm completion, 85% is released to the artisan's wallet, and 15% is deducted as our commission."
  },
  {
    id: 5,
    question: "Can I track my professional real-time?",
    answer: "Absolutely! Once an artisan accepts your job offer, you will see their live GPS location and ETA stream in real-time directly on the map in your app as they make their way to your address."
  },
  {
    id: 6,
    question: "Can professionals choose which jobs to accept?",
    answer: "Yes. When a matching job is offered, artisans have 45 seconds to review the details (category, distance, estimated price) and choose to accept or decline it."
  },
  {
    id: 7,
    question: "Is the app available 24/7?",
    answer: "Our platform is online 24/7. However, matching and dispatch depend on the availability of online artisans in your specific location at the time of your request."
  }
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [email, setEmail] = useState('');

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Do nothing for email submission as requested
  };

  return (
    <section className="faq-section">
      <div className="container faq-container">
        <div className="faq-grid">
          
          {/* Left Column: Accordion list */}
          <div className="faq-accordion-side">
            {faqData.map((item) => (
              <div 
                key={item.id} 
                className={`faq-item ${openId === item.id ? 'active' : ''}`}
                onClick={() => toggleFAQ(item.id)}
              >
                <div className="faq-question-row">
                  <span className="faq-question">{item.question}</span>
                  <div className="faq-toggle-circle">
                    <Plus size={16} className="faq-plus-icon" />
                  </div>
                </div>
                <div className="faq-answer-container">
                  <div className="faq-answer">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Newsletter box */}
          <div className="faq-newsletter-side">
            <h2 className="newsletter-title">How we can help you?</h2>
            <p className="newsletter-subtitle">
              Follow our newsletter to get regularly update our latest update.
            </p>
            
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary btn-newsletter">
                Lets Talk
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
