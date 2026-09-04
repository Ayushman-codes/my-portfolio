import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Developer & Systems Enthusiast";

  // Theme effect
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
  }, [theme]);

  // Typing animation
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      title: "Meeting Assistie",
      tech: "React • Web Technologies",
      desc: "A deployed web application designed to streamline meeting management and productivity. It helps make a summary of a conversation either typed by the user or recorded via microphone, and helps redirect the summary to email.",
      link: "https://meetingassistie.netlify.app/",
      githubRepo: "https://github.com/Ayushman-codes/meeting-assistie",
    },
    {
      title: "Todo All You Need",
      tech: "React • TypeScript • Auth • TailwindCSS",
      desc: "A comprehensive task management platform featuring secure user authentication, persistent task tracking, and a clean responsive UI.",
      link: "https://todoallyouneed.netlify.app/login",
      githubRepo: "https://github.com/Ayushman-codes/todo-all-you-need",
    },
    {
      title: "Employee Management System",
      tech: "Python • SQLite • Tkinter",
      desc: "A fully functional CRUD desktop application for managing organizational data and employee records with a robust database architecture.",
      githubRepo: "https://github.com/Ayushman-codes/employee-management-system",
    },
    {
      title: "Parking Management System",
      tech: "C • File I/O",
      desc: "A lightweight, console-based utility for managing vehicle entry, exit, and real-time tracking efficiently using file-based persistence.",
      githubRepo: "https://github.com/Ayushman-codes/parking-management-system",
    },
    {
      title: "Google Clone",
      tech: "HTML • CSS • JavaScript",
      desc: "A pixel-perfect clone of Google.com homepage for practicing front-end fundamentals and layout techniques.",
      githubRepo: "https://github.com/Ayushman-codes/google-clone",
    },
    {
      title: "Gmeet Meeting AI",
      tech: "React • Node.js • AI • TailwindCSS",
      desc: "An AI-powered solution for enhancing virtual meeting experiences with automated summarization and action item generation.",
      link: "https://beetle-portfolio.netlify.app",
      githubRepo: "https://github.com/Ayushman-codes/gmeet-meeting-ai",
    },
  ];

  const experiences = [
    {
      role: "Software Developer",
      company: "Self-employed / Freelance",
      period: "2023 - Present",
      desc: "Building full-stack web applications, desktop utilities, and AI-powered tools. Specializing in React, Node.js, Python, and database design.",
      tech: "React • Node.js • Python • PostgreSQL • TypeScript",
    },
    {
      role: "Computer Science Student",
      company: "University / College",
      period: "2021 - 2024",
      desc: "Focused on systems programming, data structures, algorithms, and database management. Built projects in C, C++, Java, and Python.",
      tech: "C/C++ • Java • Python • SQL • Linux",
    },
  ];

  return (
    <div className="min-h-screen font-mono bg-stone-100 text-zinc-800 dark:bg-[#0a0e14] dark:text-zinc-400 transition-colors duration-700 relative">
      {/* Subtle grid background overlay */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      {/* Radial gradient overlay */}
      <div className="fixed inset-0 radial-overlay pointer-events-none" />

      <div className="relative z-10">
        {/* Terminal-style Navigation */}
        <nav className="fixed w-full backdrop-blur-md z-50 border-b border-zinc-200/60 dark:border-zinc-800/40 bg-stone-100/80 dark:bg-[#0a0e14]/80 transition-colors duration-700">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-zinc-700 dark:text-zinc-300 tracking-tight transition-colors duration-700">
                <span className="w-2 h-2 rounded-full bg-emerald-700/70 dark:bg-emerald-500/50 pulse-dot" />
                <span>[beetle@system</span>
                <span className="text-zinc-500">~</span>
                <span>]$</span>
                <span className="cursor-blink text-zinc-500">▌</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 transition-colors duration-700">
                <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-300">
                  ~/about
                </a>
                <a href="#skills" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-300">
                  ~/skills
                </a>
                <a href="#experience" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-300">
                  ~/experience
                </a>
                <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-300">
                  ~/projects
                </a>
                <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-300">
                  ~/contact
                </a>
                <a
                  href="https://github.com/Ayushman-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300"
                >
                  ~/github ↗
                </a>
              </div>
            </div>

            {/* Theme Switcher Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded border border-zinc-300 dark:border-zinc-800 hover:border-zinc-500 dark:hover:border-zinc-600 transition-all duration-500 bg-zinc-50 dark:bg-zinc-900/40 flex items-center justify-center group w-max"
              title="Toggle Theme"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500 group-hover:text-zinc-300 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500 group-hover:text-zinc-700 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <main
          id="about"
          className="pt-48 md:pt-40 pb-20 px-6 max-w-5xl mx-auto flex flex-col justify-center min-h-[80vh] fade-in"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-zinc-500 dark:text-zinc-600 text-sm">$</span>
            <p className="text-zinc-600 dark:text-zinc-500 text-sm tracking-wide">
              whoami
            </p>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-zinc-900 dark:text-zinc-100 glow-text transition-colors duration-700">
            Beetle<span className="text-zinc-400 dark:text-zinc-600">.</span>
          </h1>
          <div className="h-12 md:h-16 mb-8 flex items-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-zinc-600 dark:text-zinc-400 transition-colors duration-700">
              {typedText}
              <span className="cursor-blink text-zinc-500">▌</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed transition-colors duration-700">
            I am Ayushman, a tech enthusiast who loves learning how software
            works. I build robust applications and manage databases from
            the ground up. Whether I'm writing low-level scripts, developing GUI
            applications, or optimizing SQL schemas, I prefer building fast,
            efficient systems in a Linux environment.
          </p>

          {/* Hero Action Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/Ayushman-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm px-5 py-2.5 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-600 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 rounded transition-all duration-500 bg-zinc-50 dark:bg-zinc-900/40 inline-flex items-center gap-3 w-max group card-lift"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="transition-transform duration-500 group-hover:scale-110"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>github profile</span>
              <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 text-zinc-400">
                ↗
              </span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm px-5 py-2.5 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-600 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 rounded transition-all duration-500 bg-zinc-50 dark:bg-zinc-900/40 inline-flex items-center gap-3 w-max group card-lift"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="transition-transform duration-500 group-hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>download resume</span>
              <span className="transition-transform duration-500 group-hover:translate-y-1 text-zinc-400">
                ↓
              </span>
            </a>
          </div>
        </main>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-16 sm:py-20 px-6 max-w-5xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800/40 transition-colors duration-700"
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="text-zinc-500 dark:text-zinc-600 text-sm">$</span>
            <p className="text-zinc-700 dark:text-zinc-400 text-lg tracking-wide">
              cat skills.txt
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { name: "C / C++", level: 90 },
              { name: "Python", level: 85 },
              { name: "Java", level: 80 },
              { name: "JavaScript", level: 88 },
              { name: "TypeScript", level: 82 },
              { name: "React", level: 90 },
              { name: "Node.js", level: 78 },
              { name: "TailwindCSS", level: 85 },
              { name: "PostgreSQL", level: 75 },
              { name: "Linux", level: 88 },
              { name: "Git / GitHub", level: 92 },
              { name: "AI / LLMs", level: 70 },
            ].map((skill, index) => (
              <div
                key={index}
                className="group p-4 border border-zinc-200 dark:border-zinc-800/60 rounded bg-zinc-50/50 dark:bg-zinc-900/20 transition-all duration-500 card-lift hover:border-zinc-400 dark:hover:border-zinc-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-xs text-zinc-400 dark:text-zinc-600">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-zinc-400 dark:bg-zinc-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-16 sm:py-20 px-6 max-w-5xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800/40 transition-colors duration-700"
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="text-zinc-500 dark:text-zinc-600 text-sm">$</span>
            <p className="text-zinc-700 dark:text-zinc-400 text-lg tracking-wide">
              ls -la ./projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="relative p-6 border border-zinc-200 dark:border-zinc-800/60 rounded flex flex-col hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-500 bg-zinc-50/40 dark:bg-zinc-900/20 group card-lift overflow-hidden"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-zinc-300 dark:border-zinc-700/50 rounded-tr opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-200 group-hover:text-zinc-700 dark:group-hover:text-zinc-100 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <span className="text-xs text-zinc-400 dark:text-zinc-600 font-mono">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 mb-4 font-mono">
                  {project.tech}
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-grow transition-colors duration-700">
                  {project.desc}
                </p>

                {/* Links */}
                <div className="mt-6 flex flex-wrap gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 inline-flex items-center transition-colors duration-300"
                    >
                      <span className="text-zinc-400 dark:text-zinc-600 mr-1.5">→</span>
                      launch demo
                    </a>
                  )}
                  {project.githubRepo && (
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 inline-flex items-center transition-colors duration-300"
                    >
                      <span className="text-zinc-400 dark:text-zinc-600 mr-1.5">→</span>
                      view code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="py-16 sm:py-20 px-6 max-w-5xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800/40 transition-colors duration-700"
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="text-zinc-500 dark:text-zinc-600 text-sm">$</span>
            <p className="text-zinc-700 dark:text-zinc-400 text-lg tracking-wide">
              cat experience.txt
            </p>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative p-6 border border-zinc-200 dark:border-zinc-800/60 rounded bg-zinc-50/40 dark:bg-zinc-900/20 transition-all duration-500 card-lift hover:border-zinc-400 dark:hover:border-zinc-600"
              >
                <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                <div className="pl-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-200">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-0.5">
                        @ {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-500 font-mono whitespace-nowrap px-2 py-1 border border-zinc-200 dark:border-zinc-800 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                    {exp.desc}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-4 font-mono">
                    {exp.tech}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 sm:py-20 px-6 max-w-5xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800/40 transition-colors duration-700"
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="text-zinc-500 dark:text-zinc-600 text-sm">$</span>
            <p className="text-zinc-700 dark:text-zinc-400 text-lg tracking-wide">
              cat contacts.txt
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sahuayushman125@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 border border-zinc-200 dark:border-zinc-800/60 rounded bg-zinc-50/40 dark:bg-zinc-900/20 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-500 card-lift"
            >
              <div className="flex items-center gap-3 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-wider">
                  email
                </p>
              </div>
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                sahuayushman125@gmail.com
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/ayushman-sahu-851826383"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 border border-zinc-200 dark:border-zinc-800/60 rounded bg-zinc-50/40 dark:bg-zinc-900/20 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-500 card-lift"
            >
              <div className="flex items-center gap-3 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-wider">
                  linkedin
                </p>
              </div>
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                linkedin.com/in/ayushman-sahu-851826383
              </p>
            </a>
            <a
              href="https://github.com/Ayushman-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 border border-zinc-200 dark:border-zinc-800/60 rounded bg-zinc-50/40 dark:bg-zinc-900/20 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-500 card-lift"
            >
              <div className="flex items-center gap-3 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-wider">
                  github
                </p>
              </div>
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                github.com/Ayushman-codes
              </p>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-10 text-xs text-zinc-400 dark:text-zinc-600 border-t border-zinc-200/60 dark:border-zinc-800/40 transition-colors duration-700">
          <p className="font-mono">
            <span className="text-zinc-500">$</span> exit 0
          </p>
          <p className="mt-2 text-zinc-400 dark:text-zinc-700">
            built with caffeine & curiosity
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
