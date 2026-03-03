import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Target, Eye, Award, Users, Zap, Heart, Linkedin, Mail } from 'lucide-react';
import CTA from '../components/CTA';
import './AboutPage.css';

const values = [
  { icon: Target, title: 'Results-Driven', desc: 'Every decision we make is guided by data and focused on delivering measurable outcomes.' },
  { icon: Eye, title: 'Transparency', desc: 'Open communication and honest project updates at every stage of development.' },
  { icon: Award, title: 'Quality First', desc: 'We never compromise on quality. Every pixel, every line of code is crafted with precision.' },
  { icon: Zap, title: 'Innovation', desc: 'We stay ahead of the curve, leveraging the latest technologies and design trends.' },
  { icon: Heart, title: 'Client-Centric', desc: 'Your success is our success. We treat every project as if it were our own.' },
  { icon: Users, title: 'Collaboration', desc: 'We work closely with you, ensuring your vision is reflected in every deliverable.' },
];

const founders = [
  {
    name: 'Shubhamm Thakkar',
    role: 'Chief Executive Officer',
    tagline: 'Visionary Leader & Strategic Architect',
    bio: 'The driving force behind Novexis Labs\' vision and growth strategy. Shubhamm combines sharp business acumen with deep industry insight to steer the agency towards excellence and deliver transformative results for clients.',
    photo: '/shubhamm-ceo.jpg',
    linkedin: 'https://www.linkedin.com/in/shubhamthakkar2007/',
    email: 'shubhamthakkar2007@gmail.com',
  },
  {
    name: 'Bhavya Mehta',
    role: 'Chief Technology Officer',
    tagline: 'Tech Innovator & Code Craftsman',
    bio: 'The technical mastermind who ensures every product we build is powered by cutting-edge technology. Bhavya\'s deep expertise in modern web technologies and passion for clean code drives the superior quality of our deliverables.',
    photo: '/bhavya-cto.jpg',
    linkedin: 'https://www.linkedin.com/in/bhavya-mehta-83431434b/',
    email: 'bhavyamehta2819@gmail.com',
  },
];

export default function AboutPage() {
  const [ref, isVisible] = useScrollAnimation(0.05);
  const [foundersRef, foundersVisible] = useScrollAnimation(0.1);
  const [valuesRef, valuesVisible] = useScrollAnimation(0.1);

  const handleEmailClick = (e, email) => {
    e.preventDefault();
    e.stopPropagation();
    // Open Gmail compose directly in a new tab
    window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, '_blank', 'noopener,noreferrer');
  };

  const handleLinkedInClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="about-page" id="about-page">
      {/* Hero */}
      <section className="about-page__hero">
        <div className="about-page__hero-bg" />
        <div className="container">
          <span className="section-label">About Us</span>
          <h1 className="about-page__title">
            We're Building the Future of <br />
            <span className="gradient-text">Digital Excellence</span>
          </h1>
          <p className="about-page__subtitle">
            Founded by two passionate technologists, Novexis Labs is a premium digital 
            agency on a mission to help businesses thrive in the digital world.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="about-page__story section" ref={ref}>
        <div className="container">
          <div className={`about-page__story-grid ${isVisible ? 'animate-in' : ''}`} style={{ opacity: isVisible ? undefined : 0 }}>
            <div className="about-page__story-content">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Born from a Passion for <span className="gradient-text">Digital Innovation</span></h2>
              <p className="about-page__story-text">
                Novexis Labs was founded with a clear mission: to bridge the gap between 
                businesses and their digital potential. We noticed that many businesses 
                struggle with outdated websites, ineffective marketing, and poor user 
                experiences. That's exactly where we come in.
              </p>
              <p className="about-page__story-text">
                With a combined expertise spanning web development, design, marketing, 
                and brand strategy — we offer a complete digital transformation package 
                that helps businesses not just survive, but <strong>thrive</strong> in 
                today's competitive landscape.
              </p>
            </div>
            <div className="about-page__story-visual">
              <div className="about-page__story-card glass-card">
                <img src="/novexis-logo.jpg" alt="Novexis Labs" className="about-page__story-logo" />
                <h3>Novexis Labs</h3>
                <p>Premium Digital Agency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="about-page__founders section" ref={foundersRef}>
        <div className="container">
          <div className={`about-page__founders-header ${foundersVisible ? 'animate-in' : ''}`}>
            <span className="section-label">Leadership</span>
            <h2 className="section-title">
              Meet the <span className="gradient-text">Founders</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Two passionate entrepreneurs united by a shared vision to build extraordinary digital experiences.
            </p>
          </div>

          <div className="about-page__founders-grid">
            {founders.map((founder, i) => (
              <div
                key={founder.name}
                className={`about-page__founder glass-card ${foundersVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${0.2 * (i + 1)}s`, opacity: foundersVisible ? undefined : 0 }}
                id={`founder-card-${i}`}
              >
                <div className="about-page__founder-avatar">
                  <img src={founder.photo} alt={founder.name} className="about-page__founder-photo" />
                </div>
                <div className="about-page__founder-info">
                  <h3 className="about-page__founder-name">{founder.name}</h3>
                  <span className="about-page__founder-role">{founder.role}</span>
                  <span className="about-page__founder-tagline">{founder.tagline}</span>
                  <p className="about-page__founder-bio">{founder.bio}</p>
                  <div className="about-page__founder-socials">
                    <button
                      onClick={(e) => handleLinkedInClick(e, founder.linkedin)}
                      className="about-page__founder-social"
                      aria-label={`${founder.name} LinkedIn`}
                      title={`Open ${founder.name}'s LinkedIn`}
                    >
                      <Linkedin size={16} />
                    </button>
                    <button
                      onClick={(e) => handleEmailClick(e, founder.email)}
                      className="about-page__founder-social"
                      aria-label={`Email ${founder.name}`}
                      title={`Email ${founder.email}`}
                    >
                      <Mail size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-page__values section" ref={valuesRef}>
        <div className="container">
          <div className={`about-page__values-header ${valuesVisible ? 'animate-in' : ''}`}>
            <span className="section-label">Core Values</span>
            <h2 className="section-title">
              What <span className="gradient-text">Drives Us</span>
            </h2>
          </div>

          <div className="about-page__values-grid">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`about-page__value glass-card ${valuesVisible ? 'animate-in' : ''}`}
                  style={{ animationDelay: `${0.1 * (i + 1)}s`, opacity: valuesVisible ? undefined : 0 }}
                >
                  <div className="about-page__value-icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
