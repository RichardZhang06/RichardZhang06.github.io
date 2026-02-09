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
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Team Leadership', 'Agile', 'Communication'] }
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
              I'm a passionate full-stack developer with a keen eye for design and a love for creating 
              seamless digital experiences. With over 5 years of experience in web development, I've had 
              the pleasure of working with startups and established companies alike.
            </p>
            <p className="about-paragraph">
              My approach combines technical expertise with creative problem-solving. I believe that great 
              software is not just functional—it's intuitive, beautiful, and makes people's lives easier.
            </p>
            <p className="about-paragraph">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or enjoying a good cup of coffee while sketching out my next big idea.
            </p>

            <div className="about-highlight">
              <div className="highlight-icon">💡</div>
              <div className="highlight-content">
                <h3 className="highlight-title">My Philosophy</h3>
                <p className="highlight-text">
                  "Code is poetry written in logic. Every line should be intentional, every function should 
                  tell a story, and every project should leave a positive impact."
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