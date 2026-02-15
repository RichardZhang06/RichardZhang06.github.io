import { useState, useEffect, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Projects from resume
  const projects = [
    {
      title: 'AI-Powered Home Search Platform',
      category: 'AI/Web',
      description: 'Built an AI-powered home search app enabling listing inquiries, showing scheduling, and price analysis with instant client responses. Deployed on Microsoft Azure with secure OAuth2 authentication.',
      tech: ['Python', 'OpenAI', 'PostgreSQL', 'Azure', 'FastAPI', 'OAuth2'],
      year: '2025',
      role: 'AI Software Engineer',
      company: 'Every Prosperity Properties',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI Humanoid Character Animation',
      category: 'AI/RL',
      description: 'Developed physically simulated humanoid characters for video games using reinforcement learning (PPO). Trained agents for stable bipedal walking and recovery from perturbations.',
      tech: ['Genesis AI', 'PyTorch', 'CUDA', 'NumPy', 'Python'],
      year: '2025',
      role: 'Software Engineer',
      company: 'Lightspeed LA',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Presenter.AI',
      category: 'Hackathon',
      description: 'Real-time web application providing AI-powered live feedback on public speaking - analyzing speech clarity, pacing, and filler words using OpenAI\'s ChatGPT API.',
      tech: ['React', 'Node.js', 'Express', 'Socket.IO', 'OpenAI API', 'WebSockets'],
      year: '2024',
      role: 'Full Stack Developer',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Reading Time Estimator',
      category: 'ML/Extension',
      description: 'Chrome extension using machine learning to analyze reading patterns and estimate article reading times. Features Python backend API on AWS EC2 with real-time content analysis.',
      tech: ['Python', 'scikit-learn', 'JavaScript', 'AWS EC2', 'Flask'],
      year: '2024',
      role: 'Developer',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Autonomous Race Car Navigation',
      category: 'Robotics',
      description: 'Leading autonomous navigation development for Formula SAE electric race car. Developed AI-driven raceline generation using SVMs for optimal lap performance.',
      tech: ['C++', 'Python', 'ROS2', 'scikit-learn', 'OpenCV', 'Eigen'],
      year: '2024',
      role: 'Path Planning Captain',
      company: 'CMU Racing Driverless',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-container">
        <div className="projects-header">
          <div className="section-label">
            <span className="label-number">02</span>
            <span className="label-divider">/</span>
            <span className="label-text">MY WORK</span>
          </div>
          <h2 className={`section-title ${isVisible ? 'animate' : ''}`}>
            Featured
            <span className="title-highlight"> Projects</span>
          </h2>
        </div>

        <div className={`projects-filters ${isVisible ? 'animate' : ''}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-button ${filter === cat ? 'active' : ''}`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        <div className={`projects-grid ${isVisible ? 'animate' : ''}`}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;