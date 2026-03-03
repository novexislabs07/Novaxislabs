import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import './PortfolioPage.css';

const categories = ['All', 'Web Development', 'UI/UX Design', 'E-Commerce', 'Branding'];

const projects = [
  {
    title: 'TechVista Dashboard',
    category: 'Web Development',
    description: 'A comprehensive analytics dashboard for TechVista Solutions that increased operational efficiency by 45%.',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
  },
  {
    title: 'StyleHub E-Commerce',
    category: 'E-Commerce',
    description: 'A premium fashion e-commerce platform with AI-powered recommendations that boosted sales by 200%.',
    tags: ['Next.js', 'Stripe', 'Shopify'],
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
  },
  {
    title: 'FinEdge SaaS Platform',
    category: 'Web Development',
    description: 'A fintech SaaS application with real-time data processing and beautiful visualization dashboards.',
    tags: ['React', 'Python', 'PostgreSQL'],
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  },
  {
    title: 'GrowthX Rebrand',
    category: 'Branding',
    description: 'Complete brand identity overhaul including logo, guidelines, website, and marketing materials.',
    tags: ['Branding', 'Figma', 'Motion'],
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
  },
  {
    title: 'MediCare App',
    category: 'UI/UX Design',
    description: 'A healthcare app designed with accessibility and user experience as top priorities. Serving 10K+ users daily.',
    tags: ['Figma', 'React Native', 'UX'],
    gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
  },
  {
    title: 'FoodFast Marketplace',
    category: 'E-Commerce',
    description: 'Multi-vendor food ordering platform with real-time delivery tracking and smart recommendations.',
    tags: ['Next.js', 'Firebase', 'Stripe'],
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
  },
];

export default function PortfolioPage() {
  const [ref, isVisible] = useScrollAnimation(0.05);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="portfolio-page" id="portfolio-page">
      {/* Hero */}
      <section className="portfolio-page__hero">
        <div className="portfolio-page__hero-bg" />
        <div className="container">
          <span className="section-label">Portfolio</span>
          <h1 className="portfolio-page__title">
            Our <span className="gradient-text">Featured Work</span>
          </h1>
          <p className="portfolio-page__subtitle">
            A showcase of digital solutions that have helped businesses achieve 
            remarkable growth and success.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="section" ref={ref}>
        <div className="container">
          <div className="portfolio-page__filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`portfolio-page__filter ${activeFilter === cat ? 'portfolio-page__filter--active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="portfolio-page__grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`portfolio-page__card glass-card ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${0.1 * (index + 1)}s`, opacity: isVisible ? undefined : 0 }}
                id={`project-card-${index}`}
              >
                <div className="portfolio-page__card-preview" style={{ background: project.gradient }}>
                  <div className="portfolio-page__card-overlay">
                    <ExternalLink size={24} />
                  </div>
                </div>
                <div className="portfolio-page__card-body">
                  <span className="portfolio-page__card-category">{project.category}</span>
                  <h3 className="portfolio-page__card-title">{project.title}</h3>
                  <p className="portfolio-page__card-desc">{project.description}</p>
                  <div className="portfolio-page__card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="portfolio-page__tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="portfolio-page__empty">
              <p>No projects found in this category yet. We're always working on something new!</p>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </main>
  );
}
