import { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
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

  const skills = [
    { category: 'Languages', items: ['Python', 'C++', 'JavaScript', 'HTML/CSS'] },
    { category: 'Frameworks & Tools', items: ['React', 'Node.js', 'Express', 'FastAPI', 'Flask', 'Socket.IO'] },
    { category: 'AI & ML', items: ['PyTorch', 'OpenAI API', 'scikit-learn', 'Genesis AI', 'Reinforcement Learning'] },
    { category: 'Cloud & Databases', items: ['Microsoft Azure', 'AWS EC2', 'PostgreSQL', 'REST APIs'] },
    { category: 'Other', items: ['Git', 'Linux', 'ROS2', 'OpenCV', 'OAuth2', 'WebSockets'] }
  ];

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className="about-header">
          <div className="section-label">
            <span className="label-number">01</span>
            <span className="label-divider">/</span>
            <span className="label-text">ABOUT ME</span>
          </div>
          <h2 className={`section-title ${isVisible ? 'animate' : ''}`}>
            Turning ideas into
            <span className="title-highlight"> elegant solutions</span>
          </h2>
        </div>

        <div className="about-content">
          <div className={`about-text ${isVisible ? 'animate' : ''}`}>
            <p className="about-paragraph">
              I'm a Computer Science student at Carnegie Mellon University with a concentration in Machine Learning. 
              Currently working as an AI Software Engineer at Every Prosperity Properties, where I build intelligent systems 
              that leverage AI to solve real-world problems in the real estate industry.
            </p>
            <p className="about-paragraph">
              My experience spans from developing physically simulated humanoid characters using reinforcement learning 
              at Lightspeed LA, to building full-stack web applications with real-time AI feedback. I'm passionate about 
              autonomous systems, having served as Path Planning Captain for Carnegie Mellon Racing Driverless.
            </p>
            <p className="about-paragraph">
              I thrive at the intersection of artificial intelligence and practical software engineering, creating solutions 
              that are both technically sophisticated and genuinely useful. Whether it's training RL agents for game 
              characters or building AI-powered property search tools, I focus on making technology work for people.
            </p>

            <div className="about-highlight">
              <div className="highlight-icon">🎓</div>
              <div className="highlight-content">
                <h3 className="highlight-title">Education</h3>
                <p className="highlight-text">
                  <strong>Carnegie Mellon University</strong> - B.S. in Computer Science (Machine Learning Concentration)<br />
                  GPA: 3.67 | Expected Graduation: June 2027
                </p>
              </div>
            </div>
          </div>

          <div className={`about-skills ${isVisible ? 'animate' : ''}`}>
            <h3 className="skills-title">Skills & Expertise</h3>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div 
                  key={skillGroup.category} 
                  className="skill-group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="skill-category">{skillGroup.category}</h4>
                  <div className="skill-items">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;