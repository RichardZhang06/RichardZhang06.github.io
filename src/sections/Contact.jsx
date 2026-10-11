import { useState, useEffect, useRef } from 'react';
import './Contact.css';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

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
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/richard-zhang06/', icon: <LinkedInIcon /> },
    { name: 'GitHub', url: 'https://github.com/RichardZhang06', icon: <GitHubIcon /> }
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