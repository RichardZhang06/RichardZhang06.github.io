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
      title: 'Agentic Enterprise SSO Onboarding',
      category: 'AI/Web',
      description: 'Built an agentic system on Amazon Bedrock AgentCore that conversationally completes enterprise SSO onboarding for QuickSight across four identity providers (Okta, PingFederate/PingOne, Microsoft Entra ID, Google Workspace), cutting onboarding time by 50%. Also added mobile and web Build Verification Tests to the release pipeline that sign in as a real enterprise identity and exercise chat, auth, and artifact flows on physical devices, shifting regression discovery from post-release to pre-release.',
      tech: ['Amazon Bedrock AgentCore', 'AWS CDK', 'AWS Device Farm', 'Python', 'TypeScript', 'Linux'],
      year: '2026',
      role: 'Software Development Engineer Intern',
      company: 'Amazon Web Services (AWS)',
      color: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      githubUrl: null,
      demoUrl: null
    },
    {
      title: 'AI-Powered Home Search Platform',
      category: 'AI/Web',
      description: 'Built an AI-powered home search app enabling listing inquiries, showing scheduling, and price analysis with instant client responses. Deployed on Microsoft Azure (App Service and Azure Database for PostgreSQL) with secure OAuth2 authentication, plus a custom web scraper that preprocesses and stores structured property data.',
      tech: ['Python', 'OpenAI', 'PostgreSQL', 'Azure', 'FastAPI', 'OAuth2', 'Playwright'],
      year: '2025',
      role: 'AI Software Engineer',
      company: 'Ever Prosperity Properties',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      githubUrl: null,
      demoUrl: null
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
      description: 'Developed physically simulated humanoid characters for video games using reinforcement learning (PPO). Trained agents for stable bipedal walking and recovery from perturbations, and migrated simulation environments from Isaac Gym to Genesis for better stability and training scalability.',
      tech: ['Genesis AI', 'PyTorch', 'CUDA', 'NumPy', 'Python'],
      year: '2025',
      role: 'Software Engineer',
      company: 'Lightspeed LA',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      githubUrl: null,
      demoUrl: null
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
      tech: ['Python', 'scikit-learn', 'JavaScript', 'AWS EC2', 'Flask', 'BeautifulSoup'],
      year: '2024',
      role: 'Developer',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      githubUrl: 'https://github.com/RichardZhang06/Chrome-Extension-1.5.git',
      demoUrl: '/demos/reading-time'
    },
    {
      title: 'Autonomous Race Car Navigation',
      category: 'Robotics',
      description: 'Leading autonomous navigation development (mapping, localization, motion planning) for a Formula SAE electric race car on a 110-member team competing at Formula SAE Michigan. Built the planning stack in C++/ROS2: an EKF localizer, factor graph SLAM with iSAM2, a custom track editor, raceline generation, and Delaunay-based midline estimation. Also developed SVM-based track boundary and midline detection.',
      tech: ['C++', 'Python', 'ROS2', 'GTSAM', 'scikit-learn', 'OpenCV', 'Eigen'],
      year: '2024 - 2026',
      role: 'Path Planning Captain',
      company: 'CMU Racing Driverless',
      color: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
      githubUrl: 'https://github.com/RichardZhang06/Raceline-Test-Suite',
      demoUrl: '/demos/racing-nav'
    },
    {
      title: 'EKF Cone Localizer',
      category: 'Robotics',
      description: 'Built an extended Kalman filter in C++/ROS2 that localizes the race car against a prior cone map. The prediction step integrates vehicle velocity and yaw rate with a motion-noise model, and the update step corrects the pose using range and bearing measurements of detected cones, with sequential updates for each matched cone.',
      tech: ['C++', 'ROS2', 'Eigen', 'PCL', 'Kalman Filtering'],
      year: '2026',
      role: 'Path Planning Captain',
      company: 'CMU Racing Driverless',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      githubUrl: null,
      demoUrl: '/demos/ekf-localizer'
    },
    {
      title: 'Factor Graph SLAM with iSAM2',
      category: 'Robotics',
      description: 'Implemented cone-based SLAM with GTSAM and iSAM2. The factor graph holds 2D poses and cone landmarks per color class, with odometry factors between poses and bearing-range factors for cone observations, solved incrementally. Ran it live on the car and offline by replaying rosbags.',
      tech: ['C++', 'GTSAM', 'iSAM2', 'ROS2', 'Factor Graphs'],
      year: '2026',
      role: 'Path Planning Captain',
      company: 'CMU Racing Driverless',
      color: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
      githubUrl: null,
      demoUrl: '/demos/slam'
    },
    {
      title: 'Custom Track Editor',
      category: 'Robotics',
      description: 'Built a browser-based track editor for the team, with a small Python server behind it. Drag, add, and recolor cones on a canvas, tune the reference path, preview the midline and minimum-curvature raceline, and export cone maps and path CSVs straight into the localizer and path follower.',
      tech: ['JavaScript', 'Python', 'HTML Canvas', 'HTTP API'],
      year: '2026',
      role: 'Path Planning Captain',
      company: 'CMU Racing Driverless',
      color: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      githubUrl: null,
      demoUrl: '/demos/track-editor'
    },
    {
      title: 'Raceline Generation',
      category: 'Robotics',
      description: 'Generated racing lines from cone maps in Python. Built the cone-to-track pipeline (boundary pairing, centerline, spline smoothing, loop handling) and used it to compute a minimum-curvature raceline with the TUM trajectory_planning_helpers library, with tunable vehicle and optimization parameters.',
      tech: ['Python', 'NumPy', 'SciPy', 'Optimization', 'Splines'],
      year: '2026',
      role: 'Path Planning Captain',
      company: 'CMU Racing Driverless',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      githubUrl: null,
      demoUrl: '/demos/raceline'
    },
    {
      title: 'Delaunay Triangulation Midline',
      category: 'Robotics',
      description: 'Built a midline estimator that works without known cone colors. It Delaunay-triangulates the visible cones, scores edges that cross the track by width and heading alignment, and picks the best ones. Their endpoints become the left and right boundaries, and the edge midpoints form the trajectory. Relaxes its constraints in stages when a frame has too few good edges.',
      tech: ['C++', 'Python', 'ROS2', 'Delaunay Triangulation', 'SciPy'],
      year: '2026',
      role: 'Path Planning Captain',
      company: 'CMU Racing Driverless',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      githubUrl: null,
      demoUrl: '/demos/delaunay-midline'
    },
    {
      title: 'C0 Compiler (OCaml to x86-64)',
      category: 'School Projects',
      description: 'Building a compiler in OCaml that translates a subset of C0 to x86-64 assembly, with a partner. Implemented lexing and parsing, type checking, an intermediate representation with constant folding, liveness analysis, register allocation by maximum cardinality search with greedy coloring and spilling, and x86-64 code generation.',
      tech: ['OCaml', 'x86-64 Assembly', 'Register Allocation', 'Liveness Analysis'],
      year: '2026',
      role: 'Compiler Engineering Student',
      company: 'CMU 15-411 Compiler Design',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      githubUrl: null,
      demoUrl: '/demos/compiler'
    },
    {
      title: 'Dynamic Memory Allocator',
      category: 'School Projects',
      description: 'Implemented a 64-bit dynamic memory allocator in C (malloc, free, realloc, calloc) using segregated free lists and 16-byte mini blocks. Omitted footers on allocated blocks to cut per-block overhead, with a first-fit search that picks the best fit among the next few candidate blocks, plus a heap consistency checker.',
      tech: ['C', 'Segregated Free Lists', 'Memory Management', 'GDB'],
      year: '2025',
      role: 'Computer Systems Student',
      company: 'CMU 15-213 Introduction to Computer Systems',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      githubUrl: null,
      demoUrl: '/demos/malloc'
    },
    {
      title: 'Concurrent Web Proxy',
      category: 'School Projects',
      description: 'Built a concurrent HTTP/1.0 proxy server in C that handles multiple clients at once with one POSIX thread per connection. Parses GET requests, rewrites and forwards them to the origin server, relays the response back, and handles malformed requests and closed sockets without crashing.',
      tech: ['C', 'Sockets', 'Multithreading', 'HTTP/1.0'],
      year: '2025',
      role: 'Computer Systems Student',
      company: 'CMU 15-213 Introduction to Computer Systems',
      color: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
      githubUrl: null,
      demoUrl: '/demos/proxy'
    },
    {
      title: 'Simple File System',
      category: 'School Projects',
      description: 'Implemented a thread-safe, FAT-style file system (the Shark File System) in C on a memory-mapped disk of 512-byte linked blocks. Supports creating, opening, reading, writing, seeking, renaming, removing, and listing files, with a lock hierarchy to keep concurrent access safe.',
      tech: ['C', 'File Systems', 'Pthreads', 'Concurrency'],
      year: '2025',
      role: 'Computer Systems Student',
      company: 'CMU 15-213 Introduction to Computer Systems',
      color: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
      githubUrl: null,
      demoUrl: '/demos/filesystem'
    },
    {
      title: 'Tiny Unix Shell',
      category: 'School Projects',
      description: 'Implemented a Unix shell in C with job control, signal handling, and input/output redirection. Runs foreground and background jobs, supports the jobs, bg, and fg built-ins, and correctly handles SIGCHLD, SIGINT, and SIGTSTP while avoiding signal races.',
      tech: ['C', 'Unix Signals', 'Process Control', 'I/O Redirection'],
      year: '2025',
      role: 'Computer Systems Student',
      company: 'CMU 15-213 Introduction to Computer Systems',
      color: 'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)',
      githubUrl: null,
      demoUrl: '/demos/shell'
    },
    {
      title: 'Cache Simulator & Optimized Transpose',
      category: 'School Projects',
      description: 'Built a configurable cache simulator in C that models set-associative caches with LRU replacement and tracks hits, misses, evictions, and dirty bytes from memory traces. Then wrote cache-aware matrix transpose code that uses blocking to reduce misses under strict memory constraints.',
      tech: ['C', 'Computer Architecture', 'Cache Design', 'Performance Optimization'],
      year: '2025',
      role: 'Computer Systems Student',
      company: 'CMU 15-213 Introduction to Computer Systems',
      color: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
      githubUrl: null,
      demoUrl: '/demos/cache'
    },
    {
      title: 'Binary Bomb Lab',
      category: 'School Projects',
      description: 'Reverse engineered a binary bomb, an x86-64 executable with six phases that each expect a specific input string. Used GDB and disassembly to read the machine code, work out what each phase checks, and derive the defusing inputs without triggering explosions.',
      tech: ['x86-64 Assembly', 'GDB', 'Reverse Engineering', 'Disassembly'],
      year: '2025',
      role: 'Computer Systems Student',
      company: 'CMU 15-213 Introduction to Computer Systems',
      color: 'linear-gradient(135deg, #f5576c 0%, #ff9a9e 100%)',
      githubUrl: null,
      demoUrl: '/demos/bomb-lab'
    },
    {
      title: 'Buffer Overflow Attack Lab',
      category: 'School Projects',
      description: 'Exploited stack buffer overflows in two x86-64 binaries. Used code injection to hijack control flow in three phases, then return-oriented programming (chaining gadgets from the existing binary) to beat stack protections in the last two.',
      tech: ['x86-64 Assembly', 'GDB', 'Buffer Overflows', 'Return-Oriented Programming'],
      year: '2025',
      role: 'Computer Systems Student',
      company: 'CMU 15-213 Introduction to Computer Systems',
      color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      githubUrl: null,
      demoUrl: '/demos/attack-lab'
    },
    {
      title: 'C0 Virtual Machine',
      category: 'School Projects',
      description: 'Implemented a bytecode virtual machine in C that executes compiled C0 programs. Handles the operand stack, local variables, arithmetic, branching, function calls, heap allocation, arrays, structs, and native library calls, while reporting runtime errors the way the C0 language requires.',
      tech: ['C', 'Virtual Machines', 'Bytecode', 'Stacks'],
      year: '2024',
      role: 'Computer Science Student',
      company: 'CMU 15-122 Principles of Imperative Computation',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      githubUrl: null,
      demoUrl: '/demos/c0vm'
    },
    {
      title: 'Huffman Compression',
      category: 'School Projects',
      description: 'Built a file compression tool in C using Huffman coding: frequency tables, Huffman trees built with priority queues, text encoding and decoding, and bit packing to write compressed files. Written with contracts and compiled in both safe and fast modes.',
      tech: ['C', 'Huffman Coding', 'Priority Queues', 'Bit Manipulation'],
      year: '2024',
      role: 'Computer Science Student',
      company: 'CMU 15-122 Principles of Imperative Computation',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      githubUrl: null,
      demoUrl: '/demos/huffman'
    },
    {
      title: 'Gap Buffer Text Editor',
      category: 'School Projects',
      description: 'Implemented the data structures behind a text editor in C0: gap buffers for efficient editing at the cursor, a doubly linked list with a point, and a text buffer that combines them as a list of 16-character gap buffers. Wrote the data structure invariants and tests for each layer.',
      tech: ['C0', 'Data Structures', 'Doubly Linked Lists', 'Gap Buffers'],
      year: '2024',
      role: 'Computer Science Student',
      company: 'CMU 15-122 Principles of Imperative Computation',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      githubUrl: null,
      demoUrl: '/demos/editor'
    },
    {
      title: 'Peg Solitaire Solver',
      category: 'School Projects',
      description: 'Wrote a peg solitaire solver in C1 using depth-first backtracking, then added memoization with a hash dictionary of compactly encoded board states to prune repeated positions and solve much harder boards.',
      tech: ['C1', 'Backtracking', 'Hash Tables', 'Memoization'],
      year: '2024',
      role: 'Computer Science Student',
      company: 'CMU 15-122 Principles of Imperative Computation',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      githubUrl: null,
      demoUrl: '/demos/peg-solitaire'
    },
    {
      title: 'Image Processing & Steganography',
      category: 'School Projects',
      description: 'Wrote image manipulation programs in C0, including cropping, horizontal stretching and resizing, and steganography that hides one image inside another by embedding its high-order bits in the low-order bits of the cover image.',
      tech: ['C0', 'Images', 'Bit Manipulation', 'Steganography'],
      year: '2024',
      role: 'Computer Science Student',
      company: 'CMU 15-122 Principles of Imperative Computation',
      color: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      githubUrl: null,
      demoUrl: '/demos/images'
    },
    {
      title: 'Clac Stack Interpreter',
      category: 'School Projects',
      description: 'Built an interpreter in C0 for Clac, a stack-based language, using queues of tokens, stacks of integers, and a dictionary of user-defined words. Also wrote Clac programs that run on the interpreter.',
      tech: ['C0', 'Interpreters', 'Stacks', 'Queues'],
      year: '2024',
      role: 'Computer Science Student',
      company: 'CMU 15-122 Principles of Imperative Computation',
      color: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
      githubUrl: null,
      demoUrl: '/demos/clac'
    },
    {
      title: 'Functional Programming in SML',
      category: 'School Projects',
      description: 'A semester of Standard ML assignments covering recursion and induction proofs, datatypes, higher-order functions, continuation-passing style, exceptions, modules, regular expression matching, lazy streams, and parallel sequences with work and span analysis.',
      tech: ['Standard ML', 'Functional Programming', 'Continuations', 'Modules'],
      year: '2025',
      role: 'Computer Science Student',
      company: 'CMU 15-150 Principles of Functional Programming',
      color: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
      githubUrl: null,
      demoUrl: '/demos/sml-functional'
    },
    {
      title: 'Parallel Algorithms Labs',
      category: 'School Projects',
      description: 'Implemented parallel and sequential algorithms in Standard ML and analyzed their work and span, including divide-and-conquer maximum contiguous subsequence sum, parenthesis distance, dynamic programming for seam carving, shortest paths on a thesaurus graph, and finger search trees.',
      tech: ['Standard ML', 'Parallel Algorithms', 'Dynamic Programming', 'Graph Algorithms'],
      year: '2026',
      role: 'Computer Science Student',
      company: 'CMU 15-210 Parallel and Sequential Data Structures and Algorithms',
      color: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
      githubUrl: null,
      demoUrl: '/demos/parallel-algorithms'
    },
    {
      title: 'Unix, Shell & Git Labs',
      category: 'School Projects',
      description: 'A series of hands-on labs on the command line: shell scripting, pipes and redirection, text processing, Vim, and Git workflows including undoing changes and resolving merge conflicts.',
      tech: ['Bash', 'Unix', 'Vim', 'Git'],
      year: '2024',
      role: 'Computer Science Student',
      company: 'CMU 07-131 Great Practical Ideas in Computer Science',
      color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      githubUrl: null,
      demoUrl: '/demos/unix-labs'
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