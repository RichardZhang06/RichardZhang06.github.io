import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg" style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
      }}>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-label">
            <span className="label-line"></span>
            <span className="label-text">DEVELOPER & DESIGNER</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line">Hi, I'm</span>
            <span className="title-name">Richard Zhang</span>
            <span className="title-accent">.</span>
          </h1>

          <p className="hero-description">
            I craft digital experiences that blend creativity with code.
            Specializing in full-stack development and modern web technologies.
          </p>

          <div className="hero-cta">
            <button onClick={scrollToProjects} className="cta-button primary">
              View My Work
              <span className="button-arrow">→</span>
            </button>
            <a href="#contact" className="cta-button secondary">
              Get In Touch
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span className="scroll-text">SCROLL</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;