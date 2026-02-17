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
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                className="overlay-link"
              >
                View Demo →
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="overlay-link"
              >
                View on GitHub →
              </a>
            )}
            {!project.demoUrl && !project.githubUrl && (
              <div className="overlay-link disabled">
                Private Project
              </div>
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
          {project.company && (
            <span className="meta-item">
              <span className="meta-icon">🏢</span>
              {project.company}
            </span>
          )}
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