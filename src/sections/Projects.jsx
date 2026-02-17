import { useState, useEffect, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

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
      githubUrl: 'https://github.com/RichardZhang06/House-Searching-Agent.git',
      demoUrl: '/demos/home-search'
    },
    {
      title: 'IRL Studio - Robotic Guitar Beat Performer',
      category: 'Hackathon',
      description: 'Designed and built a hybrid hardware-software system that transforms digital beat compositions into real-time physical guitar performances. Engineered real-time scheduling (<10ms latency), MOSFET driver circuits, dual-rail power architecture, and a React + FastAPI step-sequencer UI.',
      tech: ['Teensy 4.1', 'Embedded C/C++', 'React', 'FastAPI', 'WebSockets', 'MOSFET Drivers', 'Servos', 'Solenoids'],
      year: '2025',
      role: 'Embedded Systems & Software Engineer',
      company: 'Build18 - CMU Hardware Hackathon',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      githubUrl: 'https://github.com/RichardZhang06/IRL-FL-Studio.git',
      demoUrl: '/demos/irl-studio'
    },
    {
      title: 'AI Humanoid Character Animation',
      category: 'AI/RL',
      description: 'Developed physically simulated humanoid characters for video games using reinforcement learning (PPO). Trained agents for stable bipedal walking and recovery from perturbations.',
      tech: ['Genesis AI', 'PyTorch', 'CUDA', 'NumPy', 'Python'],
      year: '2025',
      role: 'Software Engineer',
      company: 'Lightspeed LA',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      githubUrl: 'https://github.com/gerrysonx/ASE2Genesis.git',
      demoUrl: '/demos/humanoid-animation'
    },
    {
      title: 'Presenter.AI',
      category: 'Hackathon',
      description: 'Real-time web application providing AI-powered live feedback on public speaking — analyzing speech clarity, pacing, and filler words using OpenAI\'s ChatGPT API.',
      tech: ['React', 'Node.js', 'Express', 'Socket.IO', 'OpenAI API', 'WebSockets'],
      year: '2024',
      role: 'Full Stack Developer',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      githubUrl: 'https://github.com/RichardZhang06/Presenter.AI.git',
      demoUrl: '/demos/presenter-ai'
    },
    {
      title: 'Reading Time Estimator',
      category: 'AI/Web',
      description: 'Chrome extension using machine learning to analyze reading patterns and estimate article reading times. Features Python backend API on AWS EC2 with real-time content analysis.',
      tech: ['Python', 'scikit-learn', 'JavaScript', 'AWS EC2', 'Flask'],
      year: '2024',
      role: 'Developer',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      githubUrl: 'https://github.com/RichardZhang06/Chrome-Extension-1.5.git',
      demoUrl: null
    },
    {
      title: 'Autonomous Race Car Navigation',
      category: 'Robotics',
      description: 'Leading autonomous navigation development for Formula SAE electric race car. Developed AI-driven raceline generation using SVMs for optimal lap performance.',
      tech: ['C++', 'Python', 'ROS2', 'scikit-learn', 'OpenCV', 'Eigen'],
      year: '2024',
      role: 'Path Planning Captain',
      company: 'CMU Racing Driverless',
      color: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
      githubUrl: 'https://github.com/RichardZhang06/Raceline-Test-Suite',
      demoUrl: '/demos/racing-nav'
    },
    {
      title: 'Optimizing Compiler (SSA-Based)',
      category: 'School Projects',
      description: 'Built a full optimizing compiler in OCaml targeting x86-64. Implemented parsing, type checking, SSA transformation, liveness analysis, interference graph construction, register allocation, and optimization passes including constant folding, dead code elimination, and copy propagation.',
      tech: ['OCaml', 'x86-64 Assembly', 'SSA', 'Compiler Optimizations'],
      year: '2025',
      role: 'Compiler Engineering Student',
      company: 'CMU 15-411 Compiler Design',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      githubUrl: null,
      demoUrl: '/demos/compiler'
    },
    {
      title: 'Dynamic Memory Allocator',
      category: 'School Projects',
      description: 'Implemented a dynamic memory allocator in C using an explicit free list with 16-byte alignment. Designed block headers/footers, coalescing logic, splitting strategies, and optimized throughput and memory utilization.',
      tech: ['C'],
      year: '2024',
      role: 'Computer Systems Student',
      company: 'CMU 15-213',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      githubUrl: null,
      demoUrl: '/demos/malloc'
    },
    {
      title: 'Concurrent Web Proxy',
      category: 'School Projects',
      description: 'Built a concurrent HTTP proxy server in C supporting multiple clients via thread-based concurrency. Implemented robust I/O, request forwarding, caching with LRU eviction, and correct handling of HTTP/1.0 headers.',
      tech: ['C', 'Sockets', 'Multithreading'],
      year: '2024',
      role: 'Computer Systems Student',
      company: 'CMU 15-213',
      color: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
      githubUrl: null,
      demoUrl: '/demos/proxy'
    },
    {
      title: 'Simple File System',
      category: 'School Projects',
      description: 'Developed a Unix-like file system in C with support for inodes, directory structures, block allocation, and pathname resolution. Implemented file creation, deletion, reading, writing, and consistency checks.',
      tech: ['C', 'File Systems'],
      year: '2024',
      role: 'Computer Systems Student',
      company: 'CMU 15-213',
      color: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
      githubUrl: null,
      demoUrl: '/demos/filesystem'
    },
    {
      title: 'Tiny Unix Shell',
      category: 'School Projects',
      description: 'Implemented a Unix shell in C with job control, signal handling, and support for foreground/background processes. Managed process groups and handled SIGCHLD/SIGINT/SIGTSTP correctly.',
      tech: ['C', 'Unix Signals', 'Process Control'],
      year: '2024',
      role: 'Computer Systems Student',
      company: 'CMU 15-213',
      color: 'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)',
      githubUrl: null,
      demoUrl: '/demos/shell'
    },
    {
      title: 'Cache Simulator & Optimized Transpose',
      category: 'School Projects',
      description: 'Built a cache simulator modeling set-associative caches with LRU replacement, then optimized matrix transpose implementations to minimize cache misses under strict memory constraints.',
      tech: ['C', 'Computer Architecture'],
      year: '2024',
      role: 'Computer Systems Student',
      company: 'CMU 15-213',
      color: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
      githubUrl: null,
      demoUrl: '/demos/cache'
    }
  ];

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const INITIAL_DISPLAY_COUNT = 3;
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMore = filteredProjects.length > INITIAL_DISPLAY_COUNT;

  useEffect(() => {
    setShowAll(false);
  }, [filter]);

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
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {hasMore && (
          <div className="show-more-container">
            <button
              onClick={() => setShowAll(!showAll)}
              className="show-more-button"
            >
              {showAll ? '← Show Less' : `Show All ${filteredProjects.length} Projects →`}
            </button>
          </div>
        )}

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