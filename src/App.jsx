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
      desc: "A deployed web application designed to streamline meeting management and productivity. It helps making a summary of a conversation by either typed by the user or records by the users microphone, also it helps redirecting the summary to the email",
      link: "https://meetingassistie.netlify.app/",
    },
    {
      title: "Todo All You Need",
      tech: "Web Technologies • Auth",
      desc: "A comprehensive task management platform featuring secure user authentication and persistent task tracking.",
      link: "https://todoallyouneed.netlify.app/login",
    },
    {
      title: "Employee Management System",
      tech: "Python • SQLite • Tkinter",
      desc: "A fully functional CRUD application for managing organizational data and employee records with a robust database architecture.",
    },
    {
      title: "Parking Management System",
      tech: "C",
      desc: "A lightweight, console-based utility for managing vehicle entry, exit, and real-time tracking efficiently.",
    },
    {
      title: "Google-clone",
      tech: "HTML, CSS",
      desc: "A clone of Google.com for gaining experience",
    },
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
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                ~/about
              </a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                ~/skills
              </a>
              <a
                href="#projects"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                ~/projects
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
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              // Sun Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
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
        <p className="text-blue-600 dark:text-blue-400 mb-4 transition-colors duration-500">&gt; whoami</p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-slate-900 dark:text-slate-100 transition-colors duration-500">
          Beetle.
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-medium tracking-tight mb-8 text-slate-600 dark:text-slate-500 transition-colors duration-500">
          Software Developer & Systems Enthusiast
        </h2>

        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-400 max-w-2xl mb-8 leading-relaxed transition-colors duration-500">
          I am Ayushman, I am a tech enthusiast, i like learning how software
          works. I like building robust applications and manage databases from
          the ground up. Whether I'm writing low-level scripts, developing GUI
          applications, or optimizing SQL schemas, I prefer building fast,
          efficient systems in a Linux environment.
        </p>

        {/* Hero GitHub Button */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Ayushman-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm px-5 py-2.5 border border-slate-300 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded transition-all duration-500 bg-slate-100 dark:bg-slate-900/50 inline-flex items-center gap-2 w-max"
          >
            <span>[--view github profile]</span>
            <span>↗</span>
          </a>
        </div>
      </main>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 sm:py-20 px-6 max-w-5xl mx-auto border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-500"
      >
        <p className="text-blue-600 dark:text-blue-400 mb-8 text-xl transition-colors duration-500">&gt; cat skills.txt</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-700 dark:text-slate-400">
          {[
            "C / C++",
            "Python",
            "Java",
            "PostgreSQL / Oracle",
            "ReactJS",
            "Linux"
          ].map((skill, index) => (
            <div key={index} className="p-4 border border-slate-300 dark:border-slate-800 rounded bg-slate-100 dark:bg-slate-900/50 transition-colors duration-500">
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
        <p className="text-blue-600 dark:text-blue-400 mb-8 text-xl transition-colors duration-500">&gt; ls -la ./projects</p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 border border-slate-300 dark:border-slate-800 rounded flex flex-col hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-500 bg-slate-100/50 dark:bg-slate-900/30 group"
            >
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500">
                {project.title}
              </h3>
              <p className="text-xs text-blue-600 dark:text-blue-400 mb-4 transition-colors duration-500">{project.tech}</p>
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
            </div>
          ))}
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