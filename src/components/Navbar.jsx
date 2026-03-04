import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="main-nav">
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo" id="logo-link">
          <img src={`${import.meta.env.BASE_URL}novexis-logo.jpg`} alt="Novexis Labs Logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">
            Novexis <span className="gradient-text">Labs</span>
          </span>
        </Link>

        <div className={`navbar__links ${isMobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              id={`nav-${link.name.toLowerCase()}`}
            >
              {link.name}
              <span className="navbar__link-indicator" />
            </Link>
          ))}
          <Link to="/contact" className="btn-primary navbar__cta" id="nav-cta">
            Get Started
          </Link>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileOpen && <div className="navbar__overlay" onClick={() => setIsMobileOpen(false)} />}
    </nav>
  );
}
