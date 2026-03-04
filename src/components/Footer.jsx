import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo" onClick={scrollToTop}>
              <img src={`${import.meta.env.BASE_URL}novexis-logo.jpg`} alt="Novexis Labs" className="footer__logo-img" />
              <span className="footer__logo-text">
                Novexis <span className="gradient-text">Labs</span>
              </span>
            </Link>
            <p className="footer__desc">
              Premium digital agency transforming businesses through innovative 
              web development, design, and marketing solutions.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social" aria-label="LinkedIn" id="social-linkedin">
                <Linkedin size={18} />
              </a>
              <a href="#" className="footer__social" aria-label="Twitter" id="social-twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="footer__social" aria-label="Instagram" id="social-instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="footer__social" aria-label="GitHub" id="social-github">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__links">
              <li><Link to="/services" className="footer__link">Web Development <ArrowUpRight size={14} /></Link></li>
              <li><Link to="/services" className="footer__link">UI/UX Design <ArrowUpRight size={14} /></Link></li>
              <li><Link to="/services" className="footer__link">SEO Optimization <ArrowUpRight size={14} /></Link></li>
              <li><Link to="/services" className="footer__link">Digital Marketing <ArrowUpRight size={14} /></Link></li>
              <li><Link to="/services" className="footer__link">Brand Strategy <ArrowUpRight size={14} /></Link></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__links">
              <li><Link to="/about" className="footer__link">About Us <ArrowUpRight size={14} /></Link></li>
              <li><Link to="/portfolio" className="footer__link">Portfolio <ArrowUpRight size={14} /></Link></li>
              <li><Link to="/contact" className="footer__link">Contact <ArrowUpRight size={14} /></Link></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Get In Touch</h4>
            <div className="footer__contact-list">
              <a href="mailto:novexislabs07@gmail.com" className="footer__contact-item">
                <Mail size={16} />
                <span>novexislabs07@gmail.com</span>
              </a>
              <a href="tel:+916353861318" className="footer__contact-item">
                <Phone size={16} />
                <span>+91 63538 61318</span>
              </a>
              <a href="tel:+916355610033" className="footer__contact-item">
                <Phone size={16} />
                <span>+91 63556 10033</span>
              </a>
              <a href="https://wa.me/916353861318?text=Hi%20Novexis%20Labs!%20I'm%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="footer__contact-item footer__whatsapp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span>WhatsApp</span>
              </a>
              <div className="footer__contact-item">
                <MapPin size={16} />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Novexis Labs. All rights reserved.
          </p>
          <p className="footer__tagline">
            Crafted with 💙 by Bhavya Mehta & Shubhamm Thakkar
          </p>
        </div>
      </div>
    </footer>
  );
}
