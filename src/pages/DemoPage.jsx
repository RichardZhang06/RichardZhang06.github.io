import { useParams, Link } from 'react-router-dom';
import './DemoPage.css';

const DemoPage = () => {
  const { projectId } = useParams();

  // Demo content for each project
  const demos = {
    'home-search': {
      title: 'AI-Powered Home Search Platform',
      description: 'Interactive demo showcasing the AI-powered property search features',
      videoUrl: 'https://www.youtube.com/embed/your-video-id', // Add your demo video
      features: [
        'Natural language property search',
        'AI-powered price analysis',
        'Automated showing scheduling',
        'Instant client communication'
      ],
      techStack: ['Python', 'OpenAI', 'PostgreSQL', 'Azure', 'FastAPI', 'OAuth2'],
      screenshots: [
        // Add screenshot URLs or import them
      ]
    },
    'humanoid-animation': {
      title: 'AI Humanoid Character Animation',
      description: 'Reinforcement learning agent performing bipedal locomotion',
      videoUrl: 'https://www.youtube.com/embed/your-video-id',
      features: [
        'PPO-based training algorithm',
        'Stable bipedal walking',
        'Dynamic recovery from perturbations',
        'Real-time physics simulation'
      ],
      techStack: ['Genesis AI', 'PyTorch', 'CUDA', 'NumPy', 'Python']
    },
    'presenter-ai': {
      title: 'Presenter.AI',
      description: 'Real-time speech analysis and feedback system',
      videoUrl: 'https://www.youtube.com/embed/your-video-id',
      features: [
        'Real-time speech clarity analysis',
        'Filler word detection',
        'Pacing feedback',
        'AI-powered improvement suggestions'
      ],
      techStack: ['React', 'Node.js', 'Express', 'Socket.IO', 'OpenAI API']
    },
    'reading-estimator': {
      title: 'Reading Time Estimator',
      description: 'ML-powered Chrome extension for personalized reading time estimation',
      videoUrl: 'https://www.youtube.com/embed/your-video-id',
      features: [
        'Personalized reading speed analysis',
        'ML-based time prediction',
        'Real-time content analysis',
        'Automatic model retraining'
      ],
      techStack: ['Python', 'scikit-learn', 'JavaScript', 'AWS EC2', 'Flask']
    },
    'racing-nav': {
      title: 'Autonomous Race Car Navigation',
      description: 'AI-driven path planning for Formula SAE racing',
      videoUrl: 'https://www.youtube.com/embed/your-video-id',
      features: [
        'SVM-based raceline generation',
        'Real-time path optimization',
        'Sensor fusion and localization',
        'Optimal lap performance'
      ],
      techStack: ['C++', 'Python', 'ROS2', 'scikit-learn', 'OpenCV', 'Eigen']
    }
  };

  const demo = demos[projectId];

  if (!demo) {
    return (
      <div className="demo-page">
        <div className="demo-container">
          <h1>Demo Not Found</h1>
          <p>The requested demo does not exist.</p>
          <p>Will be added soon!</p>
          <Link to="/" className="back-button">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="demo-page">
      <div className="demo-container">
        <Link to="/" className="back-link">← Back to Portfolio</Link>
        
        <header className="demo-header">
          <h1 className="demo-title">{demo.title}</h1>
          <p className="demo-description">{demo.description}</p>
        </header>

        {demo.videoUrl && (
          <div className="demo-video">
            <iframe
              width="100%"
              height="500"
              src={demo.videoUrl}
              title={demo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <section className="demo-section">
          <h2>Key Features</h2>
          <ul className="features-list">
            {demo.features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="demo-section">
          <h2>Tech Stack</h2>
          <div className="tech-tags">
            {demo.techStack.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </section>

        {demo.screenshots && demo.screenshots.length > 0 && (
          <section className="demo-section">
            <h2>Screenshots</h2>
            <div className="screenshots-grid">
              {demo.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="screenshot"
                />
              ))}
            </div>
          </section>
        )}

        <div className="demo-footer">
          <Link to="/" className="back-button">← Back to Portfolio</Link>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;