import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, MessageCircle } from 'lucide-react';
import './CTA.css';

export default function CTA() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="cta section" id="cta-section" ref={ref}>
      <div className="container">
        <div className={`cta__wrapper ${isVisible ? 'animate-in' : ''}`} style={{ opacity: isVisible ? undefined : 0 }}>
          <div className="cta__bg-orb cta__bg-orb--1" />
          <div className="cta__bg-orb cta__bg-orb--2" />
          
          <div className="cta__content">
            <span className="section-label">Ready to Start?</span>
            <h2 className="cta__title">
              Let's Build Something <br />
              <span className="gradient-text">Extraordinary Together</span>
            </h2>
            <p className="cta__subtitle">
              Transform your business with a digital presence that drives real results. 
              Get a free consultation and see how we can help you dominate your market.
            </p>
            
            <div className="cta__actions">
              <Link to="/contact" className="btn-primary cta__btn" id="cta-start-project">
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-secondary cta__btn" id="cta-chat">
                <MessageCircle size={18} />
                Let's Chat
              </Link>
            </div>

            <p className="cta__note">
              ✨ Free consultation • No commitment required • Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
