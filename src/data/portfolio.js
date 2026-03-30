// ============================================================
// data/portfolio.js — All portfolio content from resume
// Edit this file to update any section of the portfolio.
// ============================================================

export const personal = {
  name: 'Antish Kumar Yadav',
  role: 'Full Stack Web Developer',
  tagline: 'Building modern\nweb experiences.',
  shortBio:
    "I'm a Computer Science Engineering student at Lovely Professional University with a deep passion for full-stack web development. I love turning complex ideas into real, production-ready applications.",
  longBio:
    "My focus is on the MERN stack — crafting seamless user experiences on the frontend while building robust, scalable systems on the backend. I'm constantly learning new technologies and solving challenging problems.",
  email: 'antishyadav311@gmail.com',
  phone: '+91-6261698492',
  location: 'Phagwara, Punjab, India',
  github: 'https://github.com/antish4149',
  linkedin: 'https://www.linkedin.com/in/antish-kumar-yadav/',
  image: '#',
  available: true,
}

export const stats = [
  { num: '3+', label: 'Full-Stack Projects' },
  { num: '6.9', label: 'CGPA at LPU' },
  { num: '3', label: 'Certifications' },
]

export const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    period: 'Aug 2023 – Present',
    score: 'CGPA: 6.9',
  },
  {
    degree: 'Intermediate (Class XII)',
    institution: 'Prayas Residential School',
    location: 'Ambikapur, Chhattisgarh',
    period: 'Apr 2020 – Mar 2022',
    score: '80%',
  },
  {
    degree: 'Matriculation (Class X)',
    institution: 'Prayas Residential School',
    location: 'Ambikapur, Chhattisgarh',
    period: 'Apr 2019 – Mar 2020',
    score: '90%',
  },
]

export const skillCategories = [
  {
    icon: '🎨',
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'TailwindCSS'],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'JWT Auth', 'WebRTC'],
  },
  {
    icon: '🗄️',
    title: 'Database',
    skills: ['MongoDB', 'MySQL', 'Mongoose', 'MongoDB Atlas'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Railway', 'Vercel', 'Postman'],
  },
  {
    icon: '💻',
    title: 'Languages',
    skills: ['JavaScript', 'Java', 'C++'],
  },
  {
    icon: '🤝',
    title: 'Soft Skills',
    skills: ['Problem-Solving', 'Team Player', 'Adaptability', 'Leadership', 'Time Management'],
  },
]

export const projects = [
  {
    id: 1,
    featured: true,
    icon: '🎨',
    title: 'Real-Time Collaborative Whiteboard',
    period: 'Jan 2026 – Feb 2026',
    description:
      'A full-stack real-time whiteboard with JWT authentication, Google OAuth, role-based access control, and persistent canvas storage for simultaneous multi-user collaboration. Features live drawing sync via Socket.IO, undo/redo, in-room chat, and WebRTC peer-to-peer video calling with screen sharing. Deployed on Railway + Vercel with MongoDB Atlas.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'WebRTC', 'JWT', 'Canvas API'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop',
    github: 'https://github.com/antish4149',
    live: '#',
  },
  {
    id: 2,
    featured: false,
    icon: '🏠',
    title: 'Online Marketing & Broker System',
    period: 'Jul 2025 – Oct 2025',
    description:
      'A full-stack property rental platform built with Node.js + Express MVC architecture, MongoDB for listings and bookings, EJS server-side rendering across 10+ routes, complete CRUD operations, image uploads, review/rating system, and session-based authentication with role-based access control.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Bootstrap', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop',
    github: 'https://github.com/antish4149',
    live: '#',
  },
  {
    id: 3,
    featured: false,
    icon: '🎵',
    title: 'Sportify UI Clone',
    period: 'Sep 2024 – Oct 2024',
    description:
      'A pixel-perfect Spotify-inspired music player UI built with HTML5 and CSS3, featuring sidebar navigation, music library, and now-playing bar. Includes advanced CSS Flexbox/Grid layouts, custom animations, and vanilla JavaScript controls for play/pause, track navigation, and progress bar via DOM manipulation.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'Grid', 'DOM APIs'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1374&auto=format&fit=crop',
    github: 'https://github.com/antish4149',
    live: 'https://sportify-peach.vercel.app/',
  },
]

export const experience = [
  {
    period: 'Jun 2025 – Jul 2025',
    role: 'Trainee — Data Structures & Algorithms',
    company: 'W3grade',
    type: 'Training',
    bullets: [
      'Completed an intensive 7-week DSA program using Java, covering Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, and complexity optimization.',
      'Applied Binary Search, Merge Sort, Quick Sort, dynamic programming, and backtracking to solve algorithmic problems.',
      'Built a Railway Queue Management System as a CLI-based Java application demonstrating practical DSA implementation.',
    ],
  },
]

export const certificates = [
  {
    icon: '🎓',
    name: 'Computational Theory: Language Principles & Finite Automata',
    issuer: 'Infosys',
    date: 'Aug 2025',
    link: 'https://drive.google.com/file/d/1mxDOdSc7HBe-ql0lVKlF3dfRfl93AcrY/view?usp=drive_link',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop',
  },
  {
    icon: '🌐',
    name: 'MERN Stack Web Development',
    issuer: 'Apna College',
    date: 'Sep 2024',
    link: '#',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop',
  },
  {
    icon: '☕',
    name: 'Data Structures & Algorithms with Java',
    issuer: 'Apna College',
    date: 'Jun 2025',
    link: 'https://drive.google.com/file/d/1rmvJ2vpeI29H5uBleeN1uyKiRCO0ooqE/view?usp=sharing',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1528&auto=format&fit=crop',
  },
]
