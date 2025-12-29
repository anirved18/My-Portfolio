import React, { useState } from 'react';
import profileImg from './assets/profile.jpg';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'flow', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

const skills = {
  'Languages': ['Java', 'Python'],
  'Web': ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
  'Data & ML': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow'],
  'Databases & BI': ['MongoDB', 'SQL', 'MySQL HeatWave', 'Power BI'],
  'Tools': ['Git', 'GitHub', 'Postman'],
};

const projects = [
  {
    title: 'AlgoNexus: Algorithm Visualizer',
    badge: 'Web App · Visualization',
    description:
      'Interactive platform that demonstrates sorting and searching algorithms with step-by-step animations and a clean, responsive UI.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Algorithms'],
    link: 'https://algonexus.vercel.app/',
  },
  {
    title: 'AI Resume Analyzer',
    badge: 'Web App · NLP',
    description:
      'Uploads a resume, scores it against a role, and returns focused feedback plus improvement suggestions.',
    tech: ['JavaScript', 'NLP', 'AI'],
  },
  {
    title: 'RAG-Based AI System for Video Knowledge Retrieval',
    badge: 'AI · RAG',
    description:
      'Retrieval-augmented generation system that answers questions from video and audio using speech-to-text, embeddings, semantic search, and LLMs.',
    tech: ['Python', 'LLMs', 'Vector Search'],
  },
  {
    title: 'Network File Sharing Server & Client',
    badge: 'Assignment · Networking',
    description:
      'Networked file sharing application with server–client architecture, enabling secure file listing, selection, transfers and uploads over sockets.',
    tech: ['Java', 'Sockets', 'Networking', 'Security'],
    tasks: [
      'Day 1: Setup server–client socket communication.',
      'Day 2: Implement file listing and selection on the client side.',
      'Day 3: Enable file transfer from server to client.',
      'Day 4: Add file upload functionality from client to server.',
      'Day 5: Implement security features like authentication and encryption.',
    ],
  },
];

const journeySteps = [
  {
    label: 'Foundation',
    title: 'Schooling & Senior Secondary',
    text: 'Built a strong base in science and mathematics at Sri Prakash Vidyaniketan and Vignan Vidyalayam.',
  },
  {
    label: 'Computer Science',
    title: 'B.Tech CSE @ ITER',
    text: 'Pursuing B.Tech in Computer Science, focusing on web development and data science.',
  },
  {
    label: 'Building Projects',
    title: 'AlgoNexus & RAG AI',
    text: 'Created hands-on projects ranging from algorithm visualization to AI-driven knowledge retrieval from video content.',
  },
  {
    label: 'Validation',
    title: 'Certifications',
    text: 'Earned Postman API Fundamentals Student Expert and MySQL HeatWave Implementation Certified Associate.',
  },
];

function App() {
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Main dark overlay */}
      <div className="relative min-h-screen bg-slate-950/85 text-slate-50">
        {/* Navbar */}
        <header className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur-lg">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-300">
                Portfolio
              </span>
              <span className="hidden sm:inline text-[11px] uppercase tracking-[0.28em] text-slate-400">
                Anirved Panda
              </span>
            </div>

            <nav className="hidden md:block">
              <ul className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="inline-flex items-center px-3 py-2 rounded-full border border-transparent hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-100 transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section
          id="home"
          className="mx-auto max-w-6xl px-4 sm:px-8 py-12 sm:py-20 flex flex-col lg:flex-row items-start gap-12"
        >
          <div className="flex-1 space-y-6">
            <div
              className="inline-flex items-center gap-4 rounded-[2.75rem] bg-slate-900/70 border border-slate-700 shadow-2xl shadow-black/60 px-6 py-5 transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-black/80 cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => setShowProfileModal(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setShowProfileModal(true);
              }}
            >
              <div className="shrink-0">
                <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-3xl overflow-hidden border border-slate-700 bg-slate-800">
                  <img
                    src={profileImg}
                    alt="Anirved Panda"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400">
                  Portfolio
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                  <span className="bg-gradient-to-r from-sky-300 via-sky-500 to-indigo-300 bg-clip-text text-transparent animate-name">
                    Anirved Panda
                  </span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-300">
                  Web Developer · Data Science Enthusiast
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-200/90 max-w-xl">
              I&apos;m a 4th-year B.Tech CSE student at ITER who loves building
              clean, user-focused web experiences and intelligent systems that
              turn data and content into insights.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold border border-slate-600 text-slate-100 hover:bg-slate-100 hover:text-slate-950 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="rounded-[2.5rem] border border-slate-700 bg-slate-900/70 shadow-2xl shadow-black/70 p-6 sm:p-8 space-y-4 transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-black/80">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                Snapshot
              </p>
              <div className="grid gap-3 text-sm text-slate-200">
                <p>
                  <span className="font-semibold">Current</span> · B.Tech CSE @ ITER
                </p>
                <p>
                  <span className="font-semibold">Focus</span> · Frontend experiences, data visualisation &amp;
                  intelligent systems.
                </p>
                <p>
                  <span className="font-semibold">What I value</span> · Clean UI, performance, and clear problem
                  solving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills grid */}
        <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-8 py-10 sm:py-14">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.18em] uppercase text-slate-100">
              Skills &amp; Stack
            </h2>
            <p className="text-xs text-slate-400 hidden sm:block">
              Languages · Web · Data · Databases · Tools
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5 shadow-md shadow-black/60 transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-sky-500 text-slate-950 text-xs px-3 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-8 py-10 sm:py-14">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.18em] uppercase text-slate-100">
              Featured Projects
            </h2>
            <p className="text-xs text-slate-400 hidden sm:block">
              Real work that reflects how I think and build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6 shadow-md shadow-black/60 transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-xl"
              >
                <p className="inline-flex items-center rounded-full bg-sky-500 text-slate-950 text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1 mb-3">
                  {project.badge}
                </p>
                <h3 className="text-lg font-semibold text-slate-50 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-200 mb-2">{project.description}</p>
                {project.tasks && (
                  <ul className="text-xs text-slate-300 mb-3 list-disc list-inside space-y-1">
                    {project.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-slate-600 text-xs text-slate-100 px-3 py-1 bg-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-sky-400 underline underline-offset-4 hover:text-sky-300"
                    >
                      Open live ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Journey / Flow chart */}
        <section id="flow" className="mx-auto max-w-6xl px-4 sm:px-8 py-10 sm:py-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.18em] uppercase text-slate-100">
              Journey Flow
            </h2>
            <p className="text-xs text-slate-400">
              From foundation to professional readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {journeySteps.map((step, idx) => (
              <div key={step.title} className="relative">
                {/* Dot for desktop */}
                <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-sky-500 text-slate-950 text-xs font-semibold items-center justify-center shadow-md shadow-black/40">
                  {idx + 1}
                </div>
                {/* Card */}
                <div className="mt-0 md:mt-6 rounded-2xl border border-slate-700 bg-slate-900/80 p-4 shadow-md shadow-black/60 h-full flex flex-col transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400 mb-1">
                    {step.label}
                  </p>
                  <h3 className="text-sm font-semibold text-slate-50 mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-300 flex-1">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mx-auto max-w-6xl px-4 sm:px-8 py-10 sm:py-14 border-t border-slate-800 bg-slate-950/80"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.18em] uppercase text-slate-100 mb-3">
                Let&apos;s Connect
              </h2>
              <p className="text-sm text-slate-300 max-w-lg mb-2">
                I&apos;m open to internships, projects, and collaborations in web development and
                data/AI. Reach out if you&apos;d like to build something together.
              </p>
              <div className="space-y-1 text-sm text-slate-200">
                <p>
                  <span className="font-semibold">Email:</span>{' '}
                  <a
                    href="mailto:anirvedpanda1818@gmail.com"
                    className="text-sky-300 hover:text-sky-100 transition-colors"
                  >
                    anirvedpanda1818@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">GitHub:</span>{' '}
                  <a
                    href="https://github.com/anirved18"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-300 hover:text-sky-100 transition-colors"
                  >
                    @anirved18
                  </a>
                </p>
                <p>
                  <span className="font-semibold">LinkedIn:</span>{' '}
                  <a
                    href="https://www.linkedin.com/in/anirved-panda-917639299/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-300 hover:text-sky-100 transition-colors"
                  >
                    Anirved Panda
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{' '}
                  <a
                    href="tel:+917605941450"
                    className="text-sky-300 hover:text-sky-100 transition-colors"
                  >
                    +91 76059 41450
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:anirvedpanda1818@gmail.com"
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition"
              >
                Say Hello
              </a>
              <p className="text-[11px] text-slate-400 max-w-xs">
                Or drop a short message about what you&apos;re building and how I can help.
              </p>
            </div>
          </div>
        </section>

        <footer className="py-4 text-center text-[11px] text-slate-500">
          <p>Designed &amp; built with React, Vite &amp; Tailwind CSS · Dark theme · Anirved Panda</p>
        </footer>

        {showProfileModal && (
          <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <div className="relative w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900/95 p-6 shadow-2xl shadow-black/80">
              <button
                onClick={() => setShowProfileModal(false)}
                className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-sky-500/70 hover:bg-sky-500/10 transition"
                aria-label="Close profile"
              >
                ×
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-2xl overflow-hidden border border-slate-700">
                  <img src={profileImg} alt="Anirved Panda" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">Portfolio</p>
                  <h3 className="text-xl font-bold text-white">Anirved Panda</h3>
                  <p className="text-xs text-slate-300">Web Developer · Data Science Enthusiast</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-200">
                <p>
                  I build clean, user-focused web experiences and data-driven tools. Currently a 4th-year B.Tech CSE
                  student at ITER.
                </p>
                <p>
                  <span className="font-semibold text-slate-100">Focus:</span> Frontend experiences, data
                  visualisation, and intelligent systems.
                </p>
                <p>
                  <span className="font-semibold text-slate-100">What I value:</span> Clarity, performance, and
                  dependable delivery.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition"
                  onClick={() => setShowProfileModal(false)}
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold border border-slate-600 text-slate-100 hover:bg-slate-100 hover:text-slate-950 transition"
                  onClick={() => setShowProfileModal(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;


