import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechVista Solutions',
    text: 'Novexis Labs completely transformed our online presence. Our website traffic increased by 200% and sales jumped 3x within just 4 months. Their team truly understands what drives digital growth.',
    rating: 5,
    initials: 'RK',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, StyleHub',
    text: 'The team at Novexis Labs delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and commitment to quality is unmatched in the industry.',
    rating: 5,
    initials: 'PS',
  },
  {
    name: 'Alex Thompson',
    role: 'Marketing Director, GrowthX',
    text: 'Working with Novexis Labs was a game-changer for our digital marketing strategy. They brought fresh ideas and executed flawlessly. Our leads doubled in just 2 months!',
    rating: 5,
    initials: 'AT',
  },
  {
    name: 'Neha Patel',
    role: 'Co-Founder, FinEdge',
    text: 'Outstanding work on our SaaS platform! Novexis Labs understood our complex requirements perfectly and delivered a product that our users love. Highly recommended.',
    rating: 5,
    initials: 'NP',
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className="testimonials section" id="testimonials-section" ref={ref}>
      <div className="testimonials__glow" />
      <div className="container">
        <div className={`testimonials__header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </div>

        <div className={`testimonials__slider ${isVisible ? 'animate-in animate-delay-2' : ''}`} style={{ opacity: isVisible ? undefined : 0 }}>
          <div className="testimonials__card glass-card">
            <div className="testimonials__quote-icon">
              <Quote size={32} />
            </div>
            
            <div className="testimonials__stars">
              {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                <Star key={i} size={18} fill="var(--cyan-500)" color="var(--cyan-500)" />
              ))}
            </div>

            <p className="testimonials__text" key={activeIndex}>
              "{testimonials[activeIndex].text}"
            </p>

            <div className="testimonials__author">
              <div className="testimonials__avatar">
                {testimonials[activeIndex].initials}
              </div>
              <div className="testimonials__author-info">
                <span className="testimonials__author-name">{testimonials[activeIndex].name}</span>
                <span className="testimonials__author-role">{testimonials[activeIndex].role}</span>
              </div>
            </div>
          </div>

          <div className="testimonials__controls">
            <button className="testimonials__arrow" onClick={prev} id="testimonial-prev" aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === activeIndex ? 'testimonials__dot--active' : ''}`}
                  onClick={() => { setActiveIndex(i); }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="testimonials__arrow" onClick={next} id="testimonial-next" aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
