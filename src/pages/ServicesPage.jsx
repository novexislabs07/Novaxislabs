import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code, Palette, TrendingUp, Megaphone, Globe, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'We build blazing-fast, responsive websites and web applications that convert visitors into customers. From landing pages to full-stack SaaS platforms — we do it all.',
    features: [
      'React, Next.js & Modern Frameworks',
      'E-Commerce Platforms (Shopify, Custom)',
      'Custom CMS & Admin Dashboards',
      'REST & GraphQL API Development',
      'Progressive Web Apps (PWA)',
      'Performance Optimization & Speed',
    ],
    highlight: 'Most Popular',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Our design team creates stunning, intuitive interfaces that users love. We combine aesthetics with functionality to maximize engagement and conversions.',
    features: [
      'User Research & Persona Development',
      'Wireframing & Information Architecture',
      'High-Fidelity Prototypes (Figma)',
      'Design Systems & Component Libraries',
      'Usability Testing & Iteration',
      'Mobile-First Responsive Design',
    ],
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description: 'Dominate search rankings with our data-driven SEO strategies. We help you get found by the right audience at the right time.',
    features: [
      'Technical SEO & Site Audits',
      'Keyword Research & Content Strategy',
      'On-Page & Off-Page Optimization',
      'Local SEO & Google Business Profile',
      'Performance & Core Web Vitals',
      'Monthly Analytics & Reporting',
    ],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Full-funnel marketing campaigns designed to drive qualified leads, boost brand awareness, and deliver measurable ROI across all channels.',
    features: [
      'Social Media Marketing & Management',
      'Google Ads & PPC Campaigns',
      'Email Marketing & Automation',
      'Content Marketing & Copywriting',
      'Influencer Marketing Strategy',
      'Conversion Rate Optimization',
    ],
  },
  {
    icon: Globe,
    title: 'Brand Strategy',
    description: 'We help businesses build powerful, memorable brands that stand out in crowded markets and create lasting emotional connections.',
    features: [
      'Brand Identity & Visual Language',
      'Logo Design & Typography',
      'Brand Guidelines & Style Guides',
      'Market Analysis & Positioning',
      'Brand Voice & Messaging Strategy',
      'Rebranding & Brand Refresh',
    ],
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: '24/7 monitoring, updates, and technical support to ensure your digital assets are always secure, fast, and running smoothly.',
    features: [
      'Security Monitoring & Patch Updates',
      '24/7 Uptime Monitoring & Alerts',
      'Performance Optimization',
      'Regular Backups & Recovery',
      'Bug Fixes & Feature Updates',
      'Dedicated Account Manager',
    ],
  },
];

export default function ServicesPage() {
  const [ref, isVisible] = useScrollAnimation(0.05);

  return (
    <main className="services-page" id="services-page">
      {/* Hero */}
      <section className="services-page__hero">
        <div className="services-page__hero-bg" />
        <div className="container">
          <span className="section-label">Our Services</span>
          <h1 className="services-page__title">
            Premium Digital Services <br />
            That <span className="gradient-text">Drive Growth</span>
          </h1>
          <p className="services-page__subtitle">
            We offer a comprehensive suite of digital solutions designed to take 
            your business to the next level. Every service is tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section" ref={ref}>
        <div className="container">
          <div className="services-page__list">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`services-page__item glass-card ${isVisible ? 'animate-in' : ''}`}
                  style={{ animationDelay: `${0.1 * (index + 1)}s`, opacity: isVisible ? undefined : 0 }}
                  id={`service-detail-${index}`}
                >
                  {service.highlight && (
                    <span className="services-page__badge">{service.highlight}</span>
                  )}
                  <div className="services-page__item-header">
                    <div className="services-page__item-icon">
                      <Icon size={30} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="services-page__item-title">{service.title}</h2>
                      <p className="services-page__item-desc">{service.description}</p>
                    </div>
                  </div>
                  <div className="services-page__features">
                    {service.features.map((feature, i) => (
                      <div key={i} className="services-page__feature">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="services-page__cta">
            <h3>Ready to get started?</h3>
            <p>Let's discuss how we can help your business grow.</p>
            <Link to="/contact" className="btn-primary" id="services-cta-btn">
              Start Your Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
