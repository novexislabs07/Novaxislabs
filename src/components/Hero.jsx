import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const words = ['Sales', 'Growth', 'Success', 'Revenue'];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero-section">
      {/* Animated Background Elements */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
        <div className="hero__particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="hero__particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }} />
          ))}
        </div>
      </div>

      <div className={`hero__content container ${isLoaded ? 'hero__content--loaded' : ''}`}>
        <div className="hero__badge">
          <Sparkles size={14} />
          <span>Premium Digital Agency</span>
        </div>

        <h1 className="hero__title">
          We Build Digital
          <br />
          Solutions That Drive
          <br />
          <span className="hero__rotating-word" key={wordIndex}>
            {words[wordIndex]}
          </span>
        </h1>

        <p className="hero__subtitle">
          Novexis Labs transforms your business vision into powerful digital experiences. 
          From cutting-edge web development to strategic marketing — we deliver measurable 
          results that accelerate your growth.
        </p>

        <div className="hero__actions">
          <Link to="/contact" className="btn-primary hero__cta" id="hero-cta">
            Start Your Project
            <ArrowRight size={18} />
          </Link>
          <Link to="/portfolio" className="btn-secondary hero__portfolio-btn" id="hero-portfolio-btn">
            <Play size={16} />
            View Our Work
          </Link>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">50+</span>
            <span className="hero__stat-label">Projects Delivered</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">98%</span>
            <span className="hero__stat-label">Client Satisfaction</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">3x</span>
            <span className="hero__stat-label">Average ROI</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
