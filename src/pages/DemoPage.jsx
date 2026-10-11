import { useParams, Link } from 'react-router-dom';
import './DemoPage.css';

const DemoPage = () => {
  const { projectId } = useParams();

  const demos = {
    'home-search': {
      title: 'AI-Powered Home Search Platform',
      company: 'Ever Prosperity Properties',
      year: '2025',
      description: 'An AI-powered home search app enabling natural language listing inquiries, automated showing scheduling, and real-time price analysis with instant client responses.',
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
      title: 'C0 Compiler (OCaml to x86-64)',
      company: 'CMU 15-411 Compiler Design',
      year: '2026',
      description: 'A compiler in OCaml that translates a subset of C0 to x86-64 assembly, built with a partner for 15-411. It is a work in progress and currently covers the first lab.',
      features: [
        'Lexer and parser for a subset of C0, plus a type checker',
        'Translation to a tree-based intermediate representation',
        'Constant folding that preserves division and modulus by zero errors',
        'Backwards liveness analysis over three-address assembly',
        'Interference graph with maximum cardinality search ordering, greedy coloring, and spilling to stack slots',
        'x86-64 instruction selection and assembly generation from the allocation map'
      ],
      techStack: ['OCaml', 'x86-64 Assembly', 'Register Allocation', 'Liveness Analysis'],
      screenshots: []
    },
    'malloc': {
      title: 'Dynamic Memory Allocator',
      company: 'CMU 15-213 Introduction to Computer Systems',
      year: '2025',
      description: 'A 64-bit dynamic memory allocator in C implementing malloc, free, realloc, and calloc with segregated free lists and mini blocks, evaluated against trace-driven throughput and utilization benchmarks.',
      features: [
        'Segregated free lists, with free blocks inserted at the head of their size-class list',
        'Mini blocks (header plus a single next pointer) for the smallest allocations',
        'No footers on allocated blocks, using header flags to track the previous block',
        'First-fit search that then examines up to three more candidates for a better fit',
        'Coalescing of adjacent free blocks and block splitting to limit fragmentation',
        'Heap consistency checker (mm_checkheap) for validating the heap invariants'
      ],
      techStack: ['C', 'Segregated Free Lists', 'Memory Management', 'GDB'],
      screenshots: []
    },
    'proxy': {
      title: 'Concurrent Web Proxy',
      company: 'CMU 15-213 Introduction to Computer Systems',
      year: '2025',
      description: 'A concurrent HTTP/1.0 proxy server in C that serves multiple simultaneous clients using POSIX threads.',
      features: [
        'Thread-per-connection concurrency using detached POSIX threads',
        'HTTP/1.0 GET request parsing and URI handling',
        'Request rewriting: forwards a clean HTTP/1.0 request line and Host header, and sets Connection: close',
        'Relays server responses back to the client',
        'Error responses for malformed or unsupported requests',
        'Ignores SIGPIPE so a closed client socket does not crash the proxy'
      ],
      techStack: ['C', 'Sockets', 'Multithreading', 'HTTP/1.0'],
      screenshots: []
    },
    'filesystem': {
      title: 'Simple File System',
      company: 'CMU 15-213 Introduction to Computer Systems',
      year: '2025',
      description: 'A thread-safe, FAT-style file system in C built on a memory-mapped disk of 512-byte blocks, with a lock hierarchy to prevent deadlocks.',
      features: [
        'FAT-style layout: 512-byte blocks linked together, with a free list for allocation',
        'Single root directory stored in the superblock',
        'Two-level open-file tracking (per-descriptor position, plus per-file size and reference count)',
        'open, close, read, write, seek, getpos, remove, rename, and list operations',
        'Thread safety with a documented lock hierarchy: filesystem mutex, free list mutex, per-file reader-writer lock, per-descriptor mutex',
        'Tested with the course trace files and a file system consistency checker'
      ],
      techStack: ['C', 'File Systems', 'Pthreads', 'Concurrency'],
      screenshots: []
    },
    'shell': {
      title: 'Tiny Unix Shell',
      company: 'CMU 15-213 Introduction to Computer Systems',
      year: '2025',
      description: 'A Unix shell in C with job control, signal handling, and I/O redirection.',
      features: [
        'Foreground and background process execution',
        'Job control built-ins: jobs, bg, and fg',
        'SIGCHLD, SIGINT, and SIGTSTP handlers that reap, terminate, and stop jobs correctly',
        'Process groups so signals reach the right job',
        'Race condition prevention by blocking signals around shared job list updates',
        'Input and output redirection for external commands and built-ins'
      ],
      techStack: ['C', 'Unix Signals', 'Process Control', 'I/O Redirection'],
      screenshots: []
    },
    'cache': {
      title: 'Cache Simulator & Optimized Transpose',
      company: 'CMU 15-213 Introduction to Computer Systems',
      year: '2025',
      description: 'A two-part lab: a set-associative cache simulator with LRU replacement, and cache-aware matrix transpose functions that minimize misses.',
      features: [
        'Cache simulator configurable by sets, lines per set, and block size (s, E, b)',
        'LRU replacement using per-line timestamps',
        'Tracks hits, misses, evictions, and dirty bytes for a write-back cache',
        'Trace file parsing and a verbose mode that prints each cache operation',
        'Blocked (tiled) transpose for square matrices with sizes divisible by 8',
        'Fallback transpose for other matrix shapes using the provided temporary array'
      ],
      techStack: ['C', 'Computer Architecture', 'Cache Design', 'Performance Optimization'],
      screenshots: []
    },
    'bomb-lab': {
      title: 'Binary Bomb Lab',
      company: 'CMU 15-213 Introduction to Computer Systems',
      year: '2025',
      description: 'A reverse engineering lab where I used GDB and disassembly to defuse a six-phase binary bomb.',
      features: [
        'Read x86-64 disassembly to infer what each phase validates',
        'Single-stepped through the machine code in GDB with breakpoints before each phase and before the explosion routine',
        'Worked out the expected input for each of the six phases from control flow and data structure layouts in memory',
        'Avoided explosions by setting breakpoints and checking register and stack state before each check'
      ],
      techStack: ['x86-64 Assembly', 'GDB', 'Reverse Engineering', 'Disassembly'],
      screenshots: []
    },
    'attack-lab': {
      title: 'Buffer Overflow Attack Lab',
      company: 'CMU 15-213 Introduction to Computer Systems',
      year: '2025',
      description: 'A security lab where I exploited buffer overflow vulnerabilities in x86-64 binaries using code injection and return-oriented programming.',
      features: [
        'Phases 1-3: code injection against a binary with an executable stack',
        'Phases 4-5: return-oriented programming against a binary with non-executable stack and randomization defenses',
        'Built exploit strings by hand from disassembly and stack layout analysis',
        'Chained gadgets that load values into registers and compute stack-relative addresses',
        'Debugged exploit payloads step by step in GDB'
      ],
      techStack: ['x86-64 Assembly', 'GDB', 'Buffer Overflows', 'Return-Oriented Programming'],
      screenshots: []
    },
    'c0vm': {
      title: 'C0 Virtual Machine',
      company: 'CMU 15-122 Principles of Imperative Computation',
      year: '2024',
      description: 'A virtual machine in C that executes C0 bytecode, built for 15-122.',
      features: [
        'Stack-based interpreter loop for roughly 50 C0 bytecode instructions',
        'Arithmetic and bitwise operations, local variable load/store, and conditional and unconditional jumps',
        'Static function calls (invokestatic) and native library calls (invokenative)',
        'Heap allocation for structs and arrays, with field and element address computation',
        'Runtime error handling: assertion failures, array bounds, division by zero, and null pointer dereferences',
        'Tagged pointer support for generic values'
      ],
      techStack: ['C', 'Virtual Machines', 'Bytecode', 'Stacks'],
      screenshots: []
    },
    'huffman': {
      title: 'Huffman Compression',
      company: 'CMU 15-122 Principles of Imperative Computation',
      year: '2024',
      description: 'A file compression program in C based on Huffman coding.',
      features: [
        'Frequency tables built from input text',
        'Huffman tree construction using a priority queue',
        'Encoding and decoding text with the generated prefix codes',
        'Bit packing to store codes compactly in compressed files',
        'Contracts (preconditions and postconditions) checked in a safe build and removed in a fast build'
      ],
      techStack: ['C', 'Huffman Coding', 'Priority Queues', 'Bit Manipulation'],
      screenshots: []
    },
    'editor': {
      title: 'Gap Buffer Text Editor',
      company: 'CMU 15-122 Principles of Imperative Computation',
      year: '2024',
      description: 'The data structures behind a text editor: gap buffers, doubly linked lists, and a text buffer, written in C0.',
      features: [
        'Gap buffers with O(1) insertion and deletion at the cursor',
        'Doubly linked list with a point that moves left and right',
        'Text buffer built as a list of 16-character gap buffers',
        'Representation invariants (is_gapbuf, is_dll_pt, is_tbuf) for every data structure',
        'Test suites that exercise each layer, plus the provided editor front end'
      ],
      techStack: ['C0', 'Data Structures', 'Doubly Linked Lists', 'Gap Buffers'],
      screenshots: []
    },
    'peg-solitaire': {
      title: 'Peg Solitaire Solver',
      company: 'CMU 15-122 Principles of Imperative Computation',
      year: '2024',
      description: 'A peg solitaire solver using backtracking and a memoizing hash dictionary.',
      features: [
        'Move representation and generation for the board',
        'Depth-first backtracking solver',
        'Memoizing solver that stores visited positions in a hash dictionary',
        'Boards compressed into two integers plus a peg count to save space',
        'Benchmarked and profiled on the English and French boards'
      ],
      techStack: ['C1', 'Backtracking', 'Hash Tables', 'Memoization'],
      screenshots: []
    },
    'images': {
      title: 'Image Processing & Steganography',
      company: 'CMU 15-122 Principles of Imperative Computation',
      year: '2024',
      description: 'Image manipulation and steganography programs written in C0.',
      features: [
        'Image helper functions built on a pixel interface',
        'Cropping a region out of an image',
        'Stretching and resizing images',
        'Steganography: hiding and recovering a secret image in the least significant bits of a cover image',
        'Bitwise operations on the alpha, red, green, and blue channels'
      ],
      techStack: ['C0', 'Images', 'Bit Manipulation', 'Steganography'],
      screenshots: []
    },
    'clac': {
      title: 'Clac Stack Interpreter',
      company: 'CMU 15-122 Principles of Imperative Computation',
      year: '2024',
      description: 'A stack-based language interpreter written in C0.',
      features: [
        'Evaluates a queue of tokens against an integer stack',
        'Arithmetic operators, conditionals, and printing',
        'User-defined words stored in a dictionary',
        'Stacks of queues to support nested definitions and control flow',
        'Wrote Clac programs that run on the interpreter'
      ],
      techStack: ['C0', 'Interpreters', 'Stacks', 'Queues'],
      screenshots: []
    },
    'sml-functional': {
      title: 'Functional Programming in SML',
      company: 'CMU 15-150 Principles of Functional Programming',
      year: '2025',
      description: 'Standard ML assignments covering functional programming, continuations, modules, lazy evaluation, and parallelism.',
      features: [
        'Regular expression matcher built with continuation-passing style',
        'Lazy streams, including a pseudorandom stream generator',
        'Datatypes, tree algorithms, and polymorphic sorting',
        'Higher-order functions and exceptions',
        'Modules and signatures for abstraction',
        'Parallel sequence functions with work and span analysis',
        'Written proofs of correctness by induction'
      ],
      techStack: ['Standard ML', 'Functional Programming', 'Continuations', 'Modules'],
      screenshots: []
    },
    'parallel-algorithms': {
      title: 'Parallel Algorithms Labs',
      company: 'CMU 15-210 Parallel and Sequential Data Structures and Algorithms',
      year: '2026',
      description: 'Parallel and sequential algorithm implementations in Standard ML, with work and span analysis.',
      features: [
        'Divide-and-conquer algorithms (maximum contiguous subsequence sum, parenthesis distance, skyline) with work and span analysis',
        'Dynamic programming labs: seam carving, frog bridges, and hashtags',
        'Breadth-first all-shortest-paths on a graph built from a thesaurus',
        'Finger search trees built on binary search trees',
        'Maximum rectangle problem on matrices',
        'Performance and speedup testing of parallel code with MPL'
      ],
      techStack: ['Standard ML', 'Parallel Algorithms', 'Dynamic Programming', 'Graph Algorithms'],
      screenshots: []
    },
    'unix-labs': {
      title: 'Unix, Shell & Git Labs',
      company: 'CMU 07-131 Great Practical Ideas in Computer Science',
      year: '2024',
      description: 'Hands-on labs covering the Unix command line, shell scripting, Vim, and Git.',
      features: [
        'Shell scripting with pipes, redirection, and text-processing tools',
        'Searching and transforming files from the command line',
        'Editing efficiently with Vim',
        'Git: undoing changes and resolving conflicts'
      ],
      techStack: ['Bash', 'Unix', 'Vim', 'Git'],
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
            <h1 className="not-found-title">Page Not Found</h1>
            <p className="not-found-text">This project page doesn't exist yet.</p>
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