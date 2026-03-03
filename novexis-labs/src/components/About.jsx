import { useEffect, useState } from 'react';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';
import { CheckCircle, Award, Users, Target, Zap, Clock } from 'lucide-react';
import './About.css';

const stats = [
  { icon: Users, number: 50, suffix: '+', label: 'Happy Clients' },
  { icon: Target, number: 98, suffix: '%', label: 'Success Rate' },
  { icon: Zap, number: 75, suffix: '+', label: 'Projects Done' },
  { icon: Clock, number: 3, suffix: '+', label: 'Years Experience' },
];

const reasons = [
  'Custom-tailored solutions for every client',
  'Transparent communication & project updates',
  'On-time delivery with quality assurance',
  'Post-launch support & maintenance',
  'Data-driven approach for maximum ROI',
  'Industry-leading technology stack',
];

function StatCard({ icon: Icon, number, suffix, label, delay, isVisible }) {
  const [count, setIsActive] = useCountUp(number, 2000);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setIsActive(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay, setIsActive]);

  return (
    <div className="about__stat-card">
      <div className="about__stat-icon">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <span className="about__stat-number">
        {isVisible ? count : 0}{suffix}
      </span>
      <span className="about__stat-label">{label}</span>
    </div>
  );
}

export default function AboutSection() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [statsRef, statsVisible] = useScrollAnimation(0.2);

  return (
    <section className="about section" id="about-section" ref={ref}>
      <div className="about__glow" />
      <div className="container">
        <div className="about__wrapper">
          <div className={`about__left ${isVisible ? 'animate-in' : ''}`}>
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">
              We Don't Just Build — <br />
              We <span className="gradient-text">Transform Businesses</span>
            </h2>
            <p className="section-subtitle">
              At Novexis Labs, we combine creativity with technology to deliver 
              digital experiences that don't just look great — they drive real, 
              measurable business growth.
            </p>

            <div className="about__reasons">
              {reasons.map((reason, i) => (
                <div 
                  key={i} 
                  className="about__reason"
                  style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                >
                  <CheckCircle size={18} className="about__reason-icon" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`about__right ${isVisible ? 'animate-in animate-delay-3' : ''}`} style={{ opacity: isVisible ? undefined : 0 }}>
            <div className="about__visual">
              <div className="about__visual-inner">
                <div className="about__logo-showcase">
                  <img src="/novexis-logo.jpg" alt="Novexis Labs" className="about__logo-img" />
                </div>
                <div className="about__visual-badge">
                  <Award size={20} />
                  <div>
                    <span className="about__badge-title">Trusted Agency</span>
                    <span className="about__badge-text">Premium Quality Work</span>
                  </div>
                </div>
              </div>
              <div className="about__visual-ring" />
              <div className="about__visual-ring about__visual-ring--2" />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={`about__stats ${statsVisible ? 'animate-in' : ''}`} ref={statsRef} style={{ opacity: statsVisible ? undefined : 0 }}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 200} isVisible={statsVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
