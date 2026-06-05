// import React from "react";

function App() {
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
    <div className="min-h-screen bg-[#0f1419] text-slate-300 font-mono selection:bg-blue-500 selection:text-white">
      {/* Terminal-style Navigation */}
      <nav className="fixed w-full bg-[#0f1419]/90 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-lg font-bold text-blue-400 tracking-tight">
            [beetle@system ~]$ <span className="animate-pulse">_</span>
          </span>
          <div className="space-x-6 text-sm text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              ~/about
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              ~/skills
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              ~/projects
            </a>
            {/* Nav GitHub Link */}
            <a
              href="https://github.com/YOUR_GITHUB_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ~/github ↗
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main
        id="about"
        className="pt-40 pb-20 px-6 max-w-5xl mx-auto flex flex-col justify-center min-h-[80vh]"
      >
        <p className="text-blue-400 mb-4">&gt; whoami</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-slate-100">
          Beetle.
        </h1>
        <h2 className="text-2xl md:text-4xl font-medium tracking-tight mb-8 text-slate-500">
          Software Developer & Systems Enthusiast
        </h2>

        <p className="text-base text-slate-400 max-w-2xl mb-8 leading-relaxed">
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
            className="px-6 py-3 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-blue-400 rounded transition-all bg-slate-900/50 inline-flex items-center gap-2 w-max"
          >
            <span>[--view github profile]</span>
            <span>↗</span>
          </a>
        </div>
      </main>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-800/50"
      >
        <p className="text-blue-400 mb-8 text-xl">&gt; cat skills.txt</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-400">
          <div className="p-4 border border-slate-800 rounded bg-slate-900/50">
            C / C++
          </div>
          <div className="p-4 border border-slate-800 rounded bg-slate-900/50">
            Python
          </div>
          <div className="p-4 border border-slate-800 rounded bg-slate-900/50">
            Java
          </div>
          <div className="p-4 border border-slate-800 rounded bg-slate-900/50">
            PostgreSQL / Oracle
          </div>
          <div className="p-4 border border-slate-800 rounded bg-slate-900/50">
            ReactJS
          </div>
          <div className="p-4 border border-slate-800 rounded bg-slate-900/50">
            Linux
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-800/50"
      >
        <p className="text-blue-400 mb-8 text-xl">&gt; ls -la ./projects</p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 border border-slate-800 rounded flex flex-col hover:border-blue-500/50 transition-colors bg-slate-900/30 group"
            >
              <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-blue-400 mb-4">{project.tech}</p>
              <p className="text-sm text-slate-400 leading-relaxed flex-grow">
                {project.desc}
              </p>

              {/* Conditional render for Live Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-sm text-slate-300 hover:text-blue-400 inline-flex items-center w-max transition-colors"
                >
                  [--launch demo] <span className="ml-2">↗</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-slate-600 border-t border-slate-800">
        <p>exit 0</p>
      </footer>
    </div>
  );
}

export default App;
