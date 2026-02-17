import { useParams, Link } from 'react-router-dom';
import './DemoPage.css';

const DemoPage = () => {
  const { projectId } = useParams();

  const demos = {
    'home-search': {
      title: 'AI-Powered Home Search Platform',
      company: 'Every Prosperity Properties',
      year: '2025',
      description: 'An AI-powered home search app enabling natural language listing inquiries, automated showing scheduling, and real-time price analysis with instant client responses.',
      videoUrl: null, // Replace with: 'https://www.youtube.com/embed/YOUR_ID'
      features: [
        'Natural language property search powered by OpenAI',
        'AI-driven price analysis and market comparisons',
        'Automated showing scheduling with calendar integration',
        'Secure OAuth2 authentication and user management',
        'Custom web scraper for real-time property data ingestion',
        'Scalable PostgreSQL database on Microsoft Azure'
      ],
      techStack: ['Python', 'OpenAI', 'PostgreSQL', 'Microsoft Azure', 'FastAPI', 'OAuth2', 'Playwright'],
      screenshots: []
    },
    'irl-studio': {
      title: 'IRL Studio – Robotic Guitar Beat Performer',
      company: 'Build18 – CMU Hardware Hackathon',
      year: '2025',
      description: 'A hybrid hardware-software system that transforms digital beat compositions into real-time physical guitar performances using solenoids, servos, and a custom step-sequencer UI.',
      videoUrl: null,
      features: [
        'React + FastAPI step-sequencer UI with timestamped note events',
        'Real-time scheduling with <10ms latency on Teensy 4.1',
        'Solenoid actuation for fretting, servo control for strumming',
        'APA102 LED strips for synchronized visual feedback',
        'MOSFET driver circuits with flyback protection',
        'Dual-rail power architecture (12V/5V) with fusing and E-stop',
        '3-string x 6-fret prototype covering two octaves'
      ],
      techStack: ['Teensy 4.1', 'Embedded C/C++', 'React', 'FastAPI', 'WebSockets', 'MOSFET Drivers', 'Servos', 'Solenoids', 'APA102 LEDs'],
      screenshots: []
    },
    'humanoid-animation': {
      title: 'AI Humanoid Character Animation',
      company: 'Lightspeed LA',
      year: '2025',
      description: 'Physically simulated humanoid characters for next-generation video games, trained via reinforcement learning to perform stable bipedal locomotion and dynamic recovery.',
      videoUrl: null,
      features: [
        'PPO-based reinforcement learning agent training',
        'Stable bipedal walking across varied terrain',
        'Dynamic recovery from external perturbations',
        'Transitioned simulation from Isaac Gym to Genesis for better scalability',
        'Integrated into character animation pipeline for game engines',
        'CUDA-accelerated training with real-time Tensorboard monitoring'
      ],
      techStack: ['Genesis Embodied AI', 'PyTorch', 'CUDA', 'NumPy', 'Python', 'Tensorboard', 'Linux'],
      screenshots: []
    },
    'presenter-ai': {
      title: 'Presenter.AI',
      company: 'Hackathon Project',
      year: '2024',
      description: 'A real-time web application that helps users improve public speaking by providing AI-powered live feedback on speech clarity, pacing, and filler word usage.',
      videoUrl: null,
      features: [
        'Real-time speech analysis via browser Speech APIs',
        'Filler word detection and frequency tracking',
        'Pacing and clarity scoring with live visual feedback',
        'OpenAI ChatGPT integration for intelligent improvement suggestions',
        'Bidirectional Socket.IO communication for zero-lag updates',
        'Full-stack React frontend with Node.js + Express backend'
      ],
      techStack: ['React', 'Node.js', 'Express', 'Socket.IO', 'OpenAI API', 'WebSockets', 'Speech APIs'],
      screenshots: []
    },
    'racing-nav': {
      title: 'Autonomous Race Car Navigation',
      company: 'CMU Racing Driverless',
      year: '2024',
      description: 'Autonomous navigation stack for a Formula SAE electric race car, focusing on mapping, localization, and AI-driven raceline generation for optimal lap performance.',
      videoUrl: null,
      features: [
        'SVM-based midline detection for cone track mapping',
        'AI-driven raceline generation minimizing path curvature',
        'Real-time localization using ROS2 and sensor fusion',
        'OpenCV-based perception pipeline for cone detection',
        'Motion planning and velocity profiling for high-speed turns',
        'Competed in international Formula SAE Michigan competition'
      ],
      techStack: ['C++', 'Python', 'ROS2', 'scikit-learn', 'OpenCV', 'Eigen', 'NumPy', 'Linux'],
      screenshots: []
    },
    'compiler': {
      title: 'Optimizing Compiler (SSA-Based)',
      company: 'CMU 15-411 Compiler Design',
      year: '2025',
      description: 'A full optimizing compiler written in OCaml targeting x86-64 assembly, built from scratch for the 15-411 Compiler Design course.',
      videoUrl: null,
      features: [
        'Full frontend: lexing, parsing, and type checking',
        'SSA (Static Single Assignment) form transformation',
        'Liveness analysis and interference graph construction',
        'SSA-based register allocation targeting x86-64',
        'Optimization passes: constant folding, dead code elimination, copy propagation',
        'Instruction selection and final assembly code generation'
      ],
      techStack: ['OCaml', 'x86-64 Assembly', 'SSA Form', 'Register Allocation', 'Compiler Optimizations'],
      screenshots: []
    },
    'malloc': {
      title: 'Dynamic Memory Allocator',
      company: 'CMU 15-213 Introduction to Computer Systems',
      year: '2024',
      description: 'A high-performance dynamic memory allocator in C implementing malloc, free, realloc, and calloc using an explicit free list with 16-byte alignment.',
      videoUrl: null,
      features: [
        'Explicit free list with LIFO insertion policy',
        '16-byte aligned block headers and footers',
        'Immediate coalescing of adjacent free blocks',
        'Block splitting to minimize internal fragmentation',
        'First-fit search strategy for free block selection',
        'Optimized throughput and utilization against trace-driven benchmarks'
      ],
      techStack: ['C', 'Memory Management', 'Heap Internals', 'GDB'],
      screenshots: []
    },
    'proxy': {
      title: 'Concurrent Web Proxy',
      company: 'CMU 15-213 Introduction to Computer Systems',
      year: '2024',
      description: 'A concurrent HTTP/1.0 proxy server in C supporting multiple simultaneous clients via POSIX threads, with an LRU cache for repeated requests.',
      videoUrl: null,
      features: [
        'Thread-based concurrency supporting simultaneous client connections',
        'Robust I/O with partial read/write handling',
        'HTTP/1.0 request parsing and header forwarding',
        'LRU eviction cache for repeated object requests',
        'Thread-safe cache with reader-writer synchronization',
        'Correct handling of SIGPIPE and network error edge cases'
      ],
      techStack: ['C', 'POSIX Sockets', 'Multithreading', 'HTTP/1.0', 'LRU Cache'],
      screenshots: []
    },
    'filesystem': {
      title: 'Simple File System',
      company: 'CMU 15-213 Introduction to Computer Systems',
      year: '2024',
      description: 'A Unix-like file system implemented in C, supporting inodes, directory structures, block allocation, and full pathname resolution.',
      videoUrl: null,
      features: [
        'Inode-based file metadata and data block management',
        'Hierarchical directory structures with linked entries',
        'Block allocation and bitmap-based free block tracking',
        'Pathname resolution including relative and absolute paths',
        'File creation, deletion, reading, writing, and stat operations',
        'Consistency checks and recovery mechanisms'
      ],
      techStack: ['C', 'File Systems', 'Inode Structures', 'Block Allocation'],
      screenshots: []
    },
    'shell': {
      title: 'Tiny Unix Shell',
      company: 'CMU 15-213 Introduction to Computer Systems',
      year: '2024',
      description: 'A functional Unix shell in C with job control, signal handling, and support for both foreground and background process management.',
      videoUrl: null,
      features: [
        'Foreground and background process execution',
        'Job control: jobs, bg, fg, and kill built-ins',
        'Correct SIGCHLD, SIGINT, and SIGTSTP signal handling',
        'Process group management to prevent orphaned processes',
        'Race condition prevention using signal blocking',
        'I/O redirection and pipeline support'
      ],
      techStack: ['C', 'Unix Signals', 'Process Control', 'Job Control', 'POSIX'],
      screenshots: []
    },
    'cache': {
      title: 'Cache Simulator & Optimized Transpose',
      company: 'CMU 15-213 Introduction to Computer Systems',
      year: '2024',
      description: 'A two-part lab: a set-associative cache simulator with LRU replacement, and hand-optimized matrix transpose implementations to minimize cache misses.',
      videoUrl: null,
      features: [
        'Set-associative cache simulator with configurable s, E, b parameters',
        'LRU replacement policy with full hit/miss/eviction tracking',
        'Validated against reference traces using Valgrind',
        'Blocking (tiling) technique for 32×32 and 64×64 matrix transposes',
        'Cache-oblivious optimizations under strict memory constraints',
        'Near-optimal miss rates within 12 transpose function calls'
      ],
      techStack: ['C', 'Computer Architecture', 'Cache Design', 'Performance Optimization'],
      screenshots: []
    }
  };

  const demo = demos[projectId];

  if (!demo) {
    return (
      <div className="demo-page">
        <div className="demo-container">
          <div className="demo-not-found">
            <div className="not-found-code">404</div>
            <h1 className="not-found-title">Demo Not Found</h1>
            <p className="not-found-text">This demo page doesn't exist yet.</p>
            <Link to="/" className="back-button">← Back to Portfolio</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="demo-page">
      <div className="demo-container">

        <Link to="/" className="back-link">
          <span className="back-arrow">←</span>
          Back to Portfolio
        </Link>

        <header className="demo-header">
          <div className="demo-meta">
            {demo.company && <span className="demo-company">{demo.company}</span>}
            <span className="demo-year">{demo.year}</span>
          </div>
          <h1 className="demo-title">{demo.title}</h1>
          <p className="demo-description">{demo.description}</p>
        </header>

        {demo.videoUrl ? (
          <div className="demo-video-wrapper">
            <div className="demo-video-label">
              <span className="label-line"></span>
              <span>DEMO VIDEO</span>
            </div>
            <div className="demo-video">
              <iframe
                src={demo.videoUrl}
                title={demo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          <div className="demo-coming-soon">
            <div className="coming-soon-icon">🎬</div>
            <h3 className="coming-soon-title">Video Demo Coming Soon</h3>
            <p className="coming-soon-text">A walkthrough video is being prepared for this project.</p>
          </div>
        )}

        <div className="demo-sections">
          <section className="demo-section">
            <h2 className="demo-section-title">
              <span className="section-number">01</span>
              Key Features
            </h2>
            <ul className="features-list">
              {demo.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="demo-section">
            <h2 className="demo-section-title">
              <span className="section-number">02</span>
              Tech Stack
            </h2>
            <div className="tech-tags">
              {demo.techStack.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </section>

          {demo.screenshots && demo.screenshots.length > 0 && (
            <section className="demo-section">
              <h2 className="demo-section-title">
                <span className="section-number">03</span>
                Screenshots
              </h2>
              <div className="screenshots-grid">
                {demo.screenshots.map((src, index) => (
                  <img key={index} src={src} alt={`Screenshot ${index + 1}`} className="screenshot" />
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="demo-footer">
          <Link to="/" className="back-button">← Back to Portfolio</Link>
        </div>

      </div>
    </div>
  );
};

export default DemoPage;