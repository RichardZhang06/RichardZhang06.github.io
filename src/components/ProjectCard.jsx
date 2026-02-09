import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  return (
    <article className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="project-image-wrapper">
        <div className="project-image" style={{ background: project.color || 'var(--bg-tertiary)' }}>
          <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
          {project.image && <img src={project.image} alt={project.title} />}
        </div>
        <div className="project-overlay">
          <div className="overlay-content">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="overlay-link"
            >
              View Live →
            </a>
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="overlay-link secondary"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-category">{project.category}</div>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-meta">
          <span className="meta-item">
            <span className="meta-icon">📅</span>
            {project.year}
          </span>
          {project.role && (
            <span className="meta-item">
              <span className="meta-icon">👤</span>
              {project.role}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;