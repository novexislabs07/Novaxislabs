import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code, Palette, TrendingUp, Megaphone, Globe, Shield } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom-built, high-performance websites and web applications using cutting-edge technologies like React, Next.js, and Node.js.',
    features: ['React & Next.js', 'E-Commerce', 'Custom APIs', 'CMS Solutions'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Stunning, user-centric interfaces designed to maximize engagement, conversion, and overall user satisfaction.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies to boost your search rankings, organic traffic, and online visibility across all platforms.',
    features: ['Technical SEO', 'Content Strategy', 'Link Building', 'Analytics'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Full-funnel marketing campaigns that drive qualified leads, boost brand awareness, and maximize your ROI.',
    features: ['Social Media', 'PPC Campaigns', 'Email Marketing', 'Content Creation'],
  },
  {
    icon: Globe,
    title: 'Brand Strategy',
    description: 'Comprehensive branding solutions that establish your unique identity and create lasting connections with your audience.',
    features: ['Brand Identity', 'Logo Design', 'Style Guides', 'Market Analysis'],
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: '24/7 technical support, security monitoring, and continuous optimization to keep your digital assets running flawlessly.',
    features: ['Security Audits', '24/7 Monitoring', 'Performance', 'Updates'],
  },
];

export default function Services() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="services section" id="services-section" ref={ref}>
      <div className="services__glow" />
      <div className="container">
        <div className={`services__header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            Services That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="section-subtitle">
            We offer a comprehensive suite of digital services designed to elevate 
            your brand and accelerate your business growth.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`services__card glass-card ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${0.1 * (index + 1)}s`, opacity: isVisible ? undefined : 0 }}
                id={`service-card-${index}`}
              >
                <div className="services__card-icon">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-desc">{service.description}</p>
                <div className="services__card-features">
                  {service.features.map((feature) => (
                    <span key={feature} className="services__feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="services__card-glow" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
