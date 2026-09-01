import React, { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  // This effect handles switching the class on the HTML body tag
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
  }, [theme]);

  const projects = [
    {
      title: "Meeting Assistie",
      tech: "React • Web Technologies",
      desc: "A deployed web application designed to streamline meeting management and productivity. It helps make a summary of a conversation either typed by the user or recorded via microphone, and helps redirect the summary to email.",
      link: "https://meetingassistie.netlify.app/",
      githubRepo: "https://github.com/Ayushman-codes/meeting-assistie", // TODO: Add your actual repo URL
    },
    {
      title: "Todo All You Need",
      tech: "React • TypeScript • Auth • TailwindCSS",
      desc: "A comprehensive task management platform featuring secure user authentication, persistent task tracking, and a clean responsive UI.",
      link: "https://todoallyouneed.netlify.app/login",
      githubRepo: "https://github.com/Ayushman-codes/todo-all-you-need", // TODO: Add your actual repo URL
    },
    {
      title: "Employee Management System",
      tech: "Python • SQLite • Tkinter",
      desc: "A fully functional CRUD desktop application for managing organizational data and employee records with a robust database architecture.",
      githubRepo: "https://github.com/Ayushman-codes/employee-management-system", // TODO: Add your actual repo URL
    },
    {
      title: "Parking Management System",
      tech: "C • File I/O",
      desc: "A lightweight, console-based utility for managing vehicle entry, exit, and real-time tracking efficiently using file-based persistence.",
      githubRepo: "https://github.com/Ayushman-codes/parking-management-system", // TODO: Add your actual repo URL
    },
    {
      title: "Google Clone",
      tech: "HTML • CSS • JavaScript",
      desc: "A pixel-perfect clone of Google.com homepage for practicing front-end fundamentals and layout techniques.",
      githubRepo: "https://github.com/Ayushman-codes/google-clone", // TODO: Add your actual repo URL
    },
    {
      title: "Gmeet Meeting AI",
      tech: "React • Node.js • AI • TailwindCSS",
      desc: "An AI-powered solution for enhancing virtual meeting experiences with automated summarization and action item generation.",
      link: "https://beetle-portfolio.netlify.app",
      githubRepo: "https://github.com/Ayushman-codes/gmeet-meeting-ai", // TODO: Add your actual repo URL
    }
  ];

  return (
    <div className="min-h-screen font-mono bg-slate-50 text-slate-800 dark:bg-[#0f1419] dark:text-slate-300 selection:bg-blue-500 selection:text-white transition-colors duration-500">
      {/* Terminal-style Navigation */}
      <nav className="fixed w-full backdrop-blur-sm z-50 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-[#0f1419]/90 transition-colors duration-500">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 tracking-tight transition-colors duration-500">
              [beetle@system ~]$ <span className="animate-pulse">_</span>
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors duration-500">
              <a
                href="#about"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                ~/about
              </a>
              <a
                href="#skills"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                ~/skills
              </a>
              <a
                href="#experience"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                ~/experience
              </a>
              <a
                href="#projects"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                ~/projects
              </a>
              <a
                href="#contact"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                ~/contact
              </a>
              {/* Nav GitHub Link */}
              <a
                href="https://github.com/Ayushman-codes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                ~/github ↗
              </a>
            </div>
          </div>

          {/* Theme Switcher Button (Symbol/Icon) */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded border border-slate-300 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-500 bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center group w-max"
            title="Toggle Theme"
          >
            {theme === "dark" ? (
              // Moon Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-blue-400 transition-colors"
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
              // Sun Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 group-hover:text-blue-600 transition-colors"
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
        className="pt-48 md:pt-40 pb-20 px-6 max-w-5xl mx-auto flex flex-col justify-center min-h-[80vh]"
      >
        <p className="text-blue-600 dark:text-blue-400 mb-4 transition-colors duration-500">
          &gt; whoami
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-slate-900 dark:text-slate-100 transition-colors duration-500">
          Beetle.
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-medium tracking-tight mb-8 text-slate-600 dark:text-slate-500 transition-colors duration-500">
          Software Developer & Systems Enthusiast
        </h2>

        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-400 max-w-2xl mb-8 leading-relaxed transition-colors duration-500">
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
            className="text-xs sm:text-sm px-5 py-2.5 border border-slate-300 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded transition-all duration-500 bg-slate-100 dark:bg-slate-900/50 inline-flex items-center gap-3 w-max group"
          >
            {/* GitHub SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="transition-transform duration-500 group-hover:scale-110"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>

            <span>Github profile</span>

            {/* Animated Arrow */}
            <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>

          {/* Resume Download Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm px-5 py-2.5 border border-slate-300 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded transition-all duration-500 bg-slate-100 dark:bg-slate-900/50 inline-flex items-center gap-3 w-max group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
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
            <span>Download Resume</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↓
            </span>
          </a>
        </div>
      </main>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 sm:py-20 px-6 max-w-5xl mx-auto border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-500"
      >
        <p className="text-blue-600 dark:text-blue-400 mb-8 text-xl transition-colors duration-500">
          &gt; cat skills.txt
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-700 dark:text-slate-400">
          {[
            "C / C++",
            "Python",
            "Java",
            "JavaScript / TypeScript",
            "ReactJS",
            "Node.js",
            "TailwindCSS",
            "PostgreSQL / SQLite",
            "HTML / CSS",
            "Linux / Bash",
            "Git / GitHub",
            "AI / LLMs",
          ].map((skill, index) => (
            <div
              key={index}
              className="p-4 border border-slate-300 dark:border-slate-800 rounded bg-slate-100 dark:bg-slate-900/50 transition-colors duration-500"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 sm:py-20 px-6 max-w-5xl mx-auto border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-500"
      >
        <p className="text-blue-600 dark:text-blue-400 mb-8 text-xl transition-colors duration-500">
          &gt; ls -la ./projects
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 border border-slate-300 dark:border-slate-800 rounded flex flex-col hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-500 bg-slate-100/50 dark:bg-slate-900/30 group"
            >
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500">
                {project.title}
              </h3>
              <p className="text-xs text-blue-600 dark:text-blue-400 mb-4 transition-colors duration-500">
                {project.tech}
              </p>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 leading-relaxed flex-grow transition-colors duration-500">
                {project.desc}
              </p>

              {/* Conditional render for Live Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center w-max transition-colors duration-500"
                >
                  [--launch demo] <span className="ml-2">↗</span>
                </a>
              )}

              {/* Conditional render for GitHub Repo Link */}
              {project.githubRepo && (
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center w-max transition-colors duration-500"
                >
                  [--view code] <span className="ml-2">↗</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 sm:py-20 px-6 max-w-5xl mx-auto border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-500"
      >
        <p className="text-blue-600 dark:text-blue-400 mb-8 text-xl transition-colors duration-500">
          &gt; cat experience.txt
        </p>
        <div className="space-y-8">
          {[
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
          ].map((exp, idx) => (
            <div
              key={idx}
              className="p-6 border border-slate-300 dark:border-slate-800 rounded bg-slate-100/50 dark:bg-slate-900/30 transition-colors duration-500"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-200">
                  {exp.role}
                </h3>
                <span className="text-xs text-blue-600 dark:text-blue-400 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                {exp.company}
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                {exp.desc}
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">
                {exp.tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 px-6 max-w-5xl mx-auto border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-500"
      >
        <p className="text-blue-600 dark:text-blue-400 mb-8 text-xl transition-colors duration-500">
          &gt; cat contacts.txt
        </p>
        <div className="flex flex-col sm:flex-row gap-6 max-w-2xl">
          <a
            href="mailto:ayushman.codes@gmail.com"
            className="p-5 border border-slate-300 dark:border-slate-800 rounded bg-slate-100 dark:bg-slate-900/50 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-500 group flex items-center gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-500">Email</p>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">ayushman.codes@gmail.com</p>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/ayushman-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 border border-slate-300 dark:border-slate-800 rounded bg-slate-100 dark:bg-slate-900/50 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-500 group flex items-center gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-500">LinkedIn</p>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">linkedin.com/in/ayushman-codes</p>
            </div>
          </a>
          <a
            href="https://github.com/Ayushman-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 border border-slate-300 dark:border-slate-800 rounded bg-slate-100 dark:bg-slate-900/50 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-500 group flex items-center gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-500">GitHub</p>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">github.com/Ayushman-codes</p>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-slate-500 dark:text-slate-600 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
        <p>exit 0</p>
      </footer>
    </div>
  );
}

export default App;
