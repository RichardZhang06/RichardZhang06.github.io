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
            <span className="label-text">AI & SOFTWARE ENGINEER</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line">Hi, I'm</span>
            <span className="title-name">Richard Zhang</span>
            <span className="title-accent">.</span>
          </h1>

          <p className="hero-description">
            Computer Science student at Carnegie Mellon University specializing in machine learning, robotics,  
            full-stack development, and autonomous systems. Building intelligent solutions that bridge AI and real-world applications.
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