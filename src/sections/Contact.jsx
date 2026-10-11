import { useState, useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/richard-zhang06/', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/RichardZhang06', icon: '💻' },
    { name: 'Email', url: 'mailto:richardzhang217@gmail.com', icon: '✉️' }
  ];

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-header">
          <div className="section-label">
            <span className="label-number">03</span>
            <span className="label-divider">/</span>
            <span className="label-text">GET IN TOUCH</span>
          </div>
          <h2 className={`section-title ${isVisible ? 'animate' : ''}`}>
            Let's create something
            <span className="title-highlight"> amazing together</span>
          </h2>
        </div>

        <div className="contact-content">
          <div className={`contact-info ${isVisible ? 'animate' : ''}`}>
            <p className="contact-description">
              I'm currently seeking internship and full-time opportunities in software engineering, robotics, AI/ML, 
              and autonomous systems. Let's connect if you have an exciting opportunity or just want to chat about tech!
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon">📍</div>
                <div className="detail-content">
                  <h3 className="detail-title">Location</h3>
                  <p className="detail-text">Pittsburgh, PA</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">📧</div>
                <div className="detail-content">
                  <h3 className="detail-title">Email</h3>
                  <a href="mailto:richardzhang217@gmail.com" className="detail-link">
                    richardzhang217@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3 className="social-title">Connect With Me</h3>
              <div className="social-grid">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">{link.icon}</span>
                    <span className="social-name">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            Designed & Built by Richard Zhang © {new Date().getFullYear()}
          </p>
          <p className="footer-subtext">
            Made with ❤️ using React & Vite
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;