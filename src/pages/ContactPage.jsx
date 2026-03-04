import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Loader2 } from 'lucide-react';
import './ContactPage.css';

// ============================================
// Web3Forms — Free contact form API
// ============================================
// How it works:
//   1. Go to https://web3forms.com
//   2. Enter your email: novexislabs07@gmail.com
//   3. You'll receive an Access Key in your inbox
//   4. Paste that key below
//   5. That's it — every form submission lands in your Gmail!
// ============================================

const WEB3FORMS_ACCESS_KEY = 'd084ee40-753f-4130-b3fa-6c1eaba8e2f2';

export default function ContactPage() {
  const [ref, isVisible] = useScrollAnimation(0.05);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Inquiry from ${formData.name} — Novexis Labs`,
          from_name: 'Novexis Labs Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service || 'Not specified',
          budget: formData.budget || 'Not specified',
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });

        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage(
        'Failed to send message. Please try again or email us directly at novexislabs07@gmail.com'
      );

      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <main className="contact-page" id="contact-page">
      {/* Hero */}
      <section className="contact-page__hero">
        <div className="contact-page__hero-bg" />
        <div className="container">
          <span className="section-label">Contact Us</span>
          <h1 className="contact-page__title">
            Let's Start Your <br />
            <span className="gradient-text">Next Big Project</span>
          </h1>
          <p className="contact-page__subtitle">
            Ready to transform your business? Get in touch and let's discuss 
            how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" ref={ref}>
        <div className="container">
          <div className={`contact-page__grid ${isVisible ? 'animate-in' : ''}`} style={{ opacity: isVisible ? undefined : 0 }}>
            {/* Info */}
            <div className="contact-page__info">
              <h2 className="contact-page__info-title">
                Get in Touch
              </h2>
              <p className="contact-page__info-desc">
                Have a project in mind? Fill out the form and our team will get 
                back to you within 24 hours. We'd love to hear about your vision.
              </p>

              <div className="contact-page__details">
                <a href="mailto:novexislabs07@gmail.com" className="contact-page__detail">
                  <div className="contact-page__detail-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="contact-page__detail-label">Email Us</span>
                    <span className="contact-page__detail-value">novexislabs07@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+916353861318" className="contact-page__detail">
                  <div className="contact-page__detail-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="contact-page__detail-label">Call Us (Shubhamm)</span>
                    <span className="contact-page__detail-value">+91 63556 10033</span>
                  </div>
                </a>

                <a href="tel:+916355610033" className="contact-page__detail">
                  <div className="contact-page__detail-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="contact-page__detail-label">Call Us (Bhavya)</span>
                    <span className="contact-page__detail-value">+91 63538 61318</span>
                  </div>
                </a>

                <div className="contact-page__detail">
                  <div className="contact-page__detail-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="contact-page__detail-label">Location</span>
                    <span className="contact-page__detail-value">India</span>
                  </div>
                </div>

                <div className="contact-page__detail">
                  <div className="contact-page__detail-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="contact-page__detail-label">Response Time</span>
                    <span className="contact-page__detail-value">Within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Connect Section */}
              <div className="contact-page__whatsapp-section glass-card">
                <div className="contact-page__whatsapp-header">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <strong>Let's Connect on WhatsApp</strong>
                </div>
                <p className="contact-page__whatsapp-desc">Get instant support! Chat with us directly on WhatsApp.</p>
                <div className="contact-page__whatsapp-buttons">
                  <a
                    href="https://wa.me/916355610033?text=Hi%20Novexis%20Labs!%20I'm%20interested%20in%20your%20services.%20Let's%20discuss%20my%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-page__whatsapp-btn"
                    id="whatsapp-shubhamm"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Chat with Shubham
                  </a>
                  <a
                    href="https://wa.me/916353861318?text=Hi%20Novexis%20Labs!%20I'm%20interested%20in%20your%20services.%20Let's%20discuss%20my%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-page__whatsapp-btn"
                    id="whatsapp-bhavya"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Chat with Bhavya
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-page__form-wrapper glass-card">
              {status === 'success' ? (
                <div className="contact-page__success">
                  <div className="contact-page__success-icon">✅</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours at your email.</p>
                </div>
              ) : status === 'error' ? (
                <div className="contact-page__success contact-page__error-state">
                  <div className="contact-page__success-icon">❌</div>
                  <h3>Something Went Wrong</h3>
                  <p>{errorMessage}</p>
                </div>
              ) : (
                <form className="contact-page__form" onSubmit={handleSubmit} id="contact-form">
                  <div className="contact-page__form-row">
                    <div className="contact-page__field">
                      <label htmlFor="name" className="contact-page__label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="contact-page__input"
                        disabled={status === 'sending'}
                      />
                    </div>
                    <div className="contact-page__field">
                      <label htmlFor="email" className="contact-page__label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="contact-page__input"
                        disabled={status === 'sending'}
                      />
                    </div>
                  </div>

                  <div className="contact-page__form-row">
                    <div className="contact-page__field">
                      <label htmlFor="phone" className="contact-page__label">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="contact-page__input"
                        disabled={status === 'sending'}
                      />
                    </div>
                    <div className="contact-page__field">
                      <label htmlFor="service" className="contact-page__label">Service Needed *</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="contact-page__input contact-page__select"
                        disabled={status === 'sending'}
                      >
                        <option value="">Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="SEO Optimization">SEO Optimization</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Brand Strategy">Brand Strategy</option>
                        <option value="Maintenance & Support">Maintenance & Support</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact-page__field">
                    <label htmlFor="budget" className="contact-page__label">Project Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="contact-page__input contact-page__select"
                      disabled={status === 'sending'}
                    >
                      <option value="">Select budget range</option>
                      <option value="₹5,000 - ₹15,000">₹5,000 - ₹15,000</option>
                      <option value="₹15,000 - ₹50,000">₹15,000 - ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                      <option value="₹1,00,000+">₹1,00,000+</option>
                    </select>
                  </div>

                  <div className="contact-page__field">
                    <label htmlFor="message" className="contact-page__label">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and timeline..."
                      required
                      rows="5"
                      className="contact-page__input contact-page__textarea"
                      disabled={status === 'sending'}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className={`btn-primary contact-page__submit ${status === 'sending' ? 'contact-page__submit--sending' : ''}`}
                    id="submit-form"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={18} className="contact-page__spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
