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

  // Sample projects data
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web App',
      description: 'A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      year: '2024',
      role: 'Full Stack Developer',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'AI Chat Assistant',
      category: 'AI/ML',
      description: 'Intelligent chatbot using natural language processing to provide customer support and automated responses.',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      year: '2024',
      role: 'ML Engineer',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Task Management Tool',
      category: 'Productivity',
      description: 'Collaborative project management tool with real-time updates, kanban boards, and team analytics.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
      year: '2023',
      role: 'Lead Developer',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Portfolio CMS',
      category: 'CMS',
      description: 'Headless CMS for creative professionals to showcase their work with customizable templates.',
      tech: ['Vue.js', 'GraphQL', 'Strapi', 'AWS'],
      year: '2023',
      role: 'Frontend Lead',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Fitness Tracker',
      category: 'Mobile',
      description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.',
      tech: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      year: '2023',
      role: 'Mobile Developer',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Real Estate Dashboard',
      category: 'Dashboard',
      description: 'Analytics dashboard for real estate agents with property listings, market trends, and client management.',
      tech: ['React', 'D3.js', 'Express', 'MySQL'],
      year: '2022',
      role: 'Full Stack Developer',
      color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      liveUrl: 'https://example.com'
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