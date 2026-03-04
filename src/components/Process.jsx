import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Search, PenTool, Rocket, HeadphonesIcon } from 'lucide-react';
import './Process.css';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into understanding your business goals, target audience, and competitive landscape to craft a winning strategy.',
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Design & Develop',
    description: 'Our expert team brings your vision to life with stunning designs and robust, scalable development using modern technologies.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Launch & Optimize',
    description: 'We rigorously test, launch, and continuously optimize your digital solution for maximum performance and conversions.',
  },
  {
    icon: HeadphonesIcon,
    step: '04',
    title: 'Support & Grow',
    description: 'Post-launch, we provide ongoing support, analytics monitoring, and iterative improvements to fuel your continued growth.',
  },
];

export default function Process() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="process section" id="process-section" ref={ref}>
      <div className="container">
        <div className={`process__header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-label">Our Process</span>
          <h2 className="section-title">
            How We <span className="gradient-text">Deliver Excellence</span>
          </h2>
          <p className="section-subtitle">
            A proven, streamlined process that ensures every project is delivered 
            on time, on budget, and beyond expectations.
          </p>
        </div>

        <div className="process__timeline">
          <div className="process__line" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className={`process__step ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${0.15 * (index + 1)}s`, opacity: isVisible ? undefined : 0 }}
                id={`process-step-${index}`}
              >
                <div className="process__step-number">
                  <span>{step.step}</span>
                </div>
                <div className="process__step-content glass-card">
                  <div className="process__step-icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="process__step-title">{step.title}</h3>
                  <p className="process__step-desc">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
