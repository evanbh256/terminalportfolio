import React, { useEffect, useState, useRef } from 'react';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'competitions', label: 'Competitions' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
];

export function SimplePortfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Find the scroll container (parent with overflow-y-auto)
    const el = containerRef.current;
    if (!el) return;
    const scrollRoot = el.closest('.custom-scrollbar') as HTMLElement | null;
    if (!scrollRoot) return;

    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    sections.forEach(({ id }) => {
      const target = document.getElementById(id);
      if (!target) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }
          });

          // Pick the section with the highest visibility
          let best = '';
          let bestRatio = 0;
          visibleSections.forEach((ratio, sectionId) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              best = sectionId;
            }
          });
          if (best) setActiveSection(best);
        },
        {
          root: scrollRoot,
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: '-10% 0px -10% 0px',
        }
      );

      observer.observe(target);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const scrollRoot = containerRef.current?.closest('.custom-scrollbar');
    if (!scrollRoot) return;
    const containerTop = scrollRoot.getBoundingClientRect().top;
    const targetTop = target.getBoundingClientRect().top;
    scrollRoot.scrollBy({ top: targetTop - containerTop, behavior: 'smooth' });
  };

  const experiences = [
    {
      role: 'Office Assistant',
      org: 'International Programs Office, DSU',
      period: 'May 2026 – Present',
      description: 'Review and process international student applications through Slate CRM, handling document verification and enrollment communications.',
    },
    {
      role: 'Student Leader',
      org: 'Cyber Camp, DSU',
      period: 'Jun 2026',
      description: 'Mentored 50+ middle school campers through a 4-day residential cybersecurity and computer science camp, supporting hands-on technical instruction.',
    },
    {
      role: 'Service Desk Assistant',
      org: 'Madison Community Center',
      period: 'May 2026 – Present',
      description: 'Run front-desk operations for 100+ daily visitors — membership processing, access control, and facility security.',
    },
    {
      role: 'Resident Assistant',
      org: 'Residence Life, DSU',
      period: 'Aug 2025 – Present',
      description: 'Provide 24/7 on-call support for 40+ residents, managing emergency response and community building on-floor.',
    },
    {
      role: 'President',
      org: 'DSU International Club',
      period: 'Aug 2025 – May 2026',
      description: 'Led strategic direction and organized campus-wide cultural events. Represented the organization to university administration and external bodies.',
    },
  ];

  const competitions = [
    {
      place: "1st",
      meta: "(DSU Bracket)",
      title: "HiveCTF",
      subtitle: "Solved web exploitation, crypto, and reverse engineering challenges in a competitive CTF.",
      date: "Apr 2026"
    },
    {
      place: "5th",
      meta: "Regionals",
      title: "NCAE Cyber Games",
      subtitle: "Maintained critical database and routing services under sustained adversarial pressure in a simulated enterprise defense.",
      date: "Feb 2026"
    },
    {
      place: "6th",
      meta: "Overall",
      title: "SillyCTF",
      subtitle: "Cracked advanced OSINT and crypto challenges in a global competition hosted by Penn State.",
      date: "Apr 2026"
    },
    {
      place: "Participant",
      meta: "Database & Router",
      title: "eCitadel",
      subtitle: "Defended an AD Domain Controller against live Red Team attacks. Hardened Windows Server with Sysmon monitoring.",
      date: "Jun 2026"
    },
    {
      place: "",
      meta: "Sprint Hackathon",
      title: "Ignite Hackathon",
      subtitle: "Built a browser-based dungeon RPG with Supabase Edge Functions and Gemini AI.",
      date: "Feb 2026"
    },
    {
      place: "",
      meta: "36-Hour Hackathon",
      title: "Nepal-US Hackathon",
      subtitle: "Delivered an AI student productivity tool with LangGraph automation and calendar sync.",
      date: "Feb 2026"
    },
  ];

  const skills = [
    { category: 'Languages', items: ['Python', 'C', 'C++', 'NASM Assembly', 'HTML', 'CSS', 'JavaScript', 'TypeScript'] },
    { category: 'Systems', items: ['Linux (Kali, Debian, Ubuntu)', 'Windows Server', 'FreeDOS', 'MacOS'] },
    { category: 'Security', items: ['Metasploit', 'John the Ripper', 'Hashcat', 'Wireshark', 'Nmap'] },
    { category: 'Dev & Cloud', items: ['React', 'Next.js', 'Node.js', 'Git', 'Supabase', 'Cloudflare', 'VirtualBox'] },
  ];

  return (
    <div ref={containerRef} className="w-full bg-[#1e1e1e] text-gray-200 font-mono relative">

      {/* ─── SIDE NAV ─── */}
      <nav className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-end group/nav py-4">
        {sections.map(({ id, label }, idx) => {
          const activeIdx = sections.findIndex(s => s.id === activeSection);
          const start = activeIdx === 0 ? 0 : activeIdx === sections.length - 1 ? sections.length - 3 : activeIdx - 1;
          const visibleRange = [start, start + 1, start + 2];
          const isVisible = visibleRange.includes(idx);
          const isActive = activeSection === id;

          return (
            <button
              key={id}
              data-active={isActive}
              onClick={() => handleNavClick(id)}
              className="group flex items-center gap-2 cursor-pointer"
              style={{
                opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
                height: isVisible ? '28px' : '0px',
                marginBottom: isVisible ? '4px' : '0px',
                overflow: 'hidden',
                pointerEvents: isVisible ? 'auto' : 'none',
                transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1), margin-bottom 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                if (isVisible && !isActive) e.currentTarget.style.opacity = '0.7';
              }}
              onMouseLeave={(e) => {
                if (isVisible && !isActive) e.currentTarget.style.opacity = '0.4';
              }}
            >
              <span className={`text-[10px] font-mono uppercase tracking-wider transition-all duration-500 ease-out ${
                isActive ? 'text-amber-200 translate-x-0' : 'text-gray-500 translate-x-1 group-hover:translate-x-0'
              }`}>
                {label}
              </span>
              <span className={`block rounded-full flex-shrink-0 transition-all duration-500 ease-out ${
                isActive
                  ? 'w-2 h-2 bg-amber-200'
                  : 'w-1.5 h-1.5 bg-gray-600 group-hover:bg-gray-400'
              }`} />
            </button>
          );
        })}
        {/* Hover overlay to expand all items */}
        <style>{`
          .group\\/nav:hover button {
            opacity: 0.4 !important;
            height: 28px !important;
            margin-bottom: 4px !important;
            pointer-events: auto !important;
          }
          .group\\/nav:hover button:hover {
            opacity: 0.7 !important;
          }
          .group\\/nav button[data-active="true"] {
            opacity: 1 !important;
          }
          .group\\/nav:hover button[data-active="true"] {
            opacity: 1 !important;
          }
        `}</style>
        {/* Re-render with data attribute for CSS targeting */}
      </nav>

      {/* ─── ABOUT ─── */}
      <section id="about" className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-amber-200 text-xs font-bold uppercase tracking-[0.3em] mb-8">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
            <div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                I'm a Cyber Operations and Network Security Administration student at Dakota State University. I enjoy being involved in as many things as possible from CTFs, Hackathon, Cyber Defence Competitions, and everyting in between.
              </p>
            </div>
            <div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                When I'm not competing in CTFs or hardening systems, you will find me organizing campus events, brewing coffee and listening to music.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section id="education" className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-amber-200 text-xs font-bold uppercase tracking-[0.3em] mb-8">Education</h2>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Dakota State University</h3>
              <p className="text-green-400 text-sm mb-3">B.S. Cyber Operations · Minor in Network Security Administration</p>
              <p className="text-gray-400 text-sm">Honors Program · President's Academic Honors List · DSU Rising & Champion Scholarship</p>
            </div>
            <div className="md:text-right flex-shrink-0">
              <span className="text-cyan-400 text-sm">Aug 2024 – Dec 2027</span>
              <p className="text-gray-400 text-sm mt-1">GPA: 3.73/4.0</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPETITIONS ─── */}
      <section id="competitions" className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-amber-200 text-xs font-bold uppercase tracking-[0.3em] mb-12">Competitions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions.map((comp, idx) => (
              <div 
                key={idx} 
                className="border border-gray-700 p-5 sm:p-6 hover:border-amber-200/30 transition-colors duration-300 flex flex-col items-center justify-center text-center"
              >
                {comp.place && (
                  <div className={`font-bold text-amber-200 mb-2 ${comp.place.length > 5 ? 'text-2xl md:text-3xl' : 'text-4xl md:text-5xl'}`}>
                    {comp.place}
                  </div>
                )}
                <div className="text-cyan-400 text-xs mb-4">
                  {comp.meta} • {comp.date}
                </div>
                <h4 className="text-white font-bold text-sm mb-1">
                  {comp.title}
                </h4>
                <div className="text-gray-400 text-xs leading-relaxed mt-2">
                  {comp.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-amber-200 text-xs font-bold uppercase tracking-[0.3em] mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

            {/* Terminal Quest */}
            <div className="border border-gray-700 p-5 sm:p-6 md:p-8 hover:border-green-400/40 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4 mb-4">
                <a 
                  href="https://github.com/MrFiscus/terminalquest" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white text-lg font-bold hover:text-green-400 transition-colors decoration-green-400/50 hover:underline underline-offset-4"
                >
                  <span className="flex items-center gap-2">
                    Terminal Quest <ExternalLink size={16} />
                  </span>
                </a>
                <span className="text-cyan-400 text-xs flex-shrink-0 sm:mt-1">2026 – Present</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                A browser-based dungeon RPG where real Linux commands drive gameplay. Navigate rooms with <span className="text-green-400">cd</span>, discover items with <span className="text-green-400">ls</span>, and solve puzzles using the filesystem as the game world.
              </p>
              <p className="text-gray-500 text-xs">AI-powered level generation · Offline fallbacks · Built with React & Supabase</p>
            </div>

            {/* HandAll */}
            <div className="border border-gray-700 p-5 sm:p-6 md:p-8 hover:border-green-400/40 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4 mb-4">
                <a 
                  href="https://github.com/evanbh256/HandAll" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white text-lg font-bold hover:text-green-400 transition-colors decoration-green-400/50 hover:underline underline-offset-4"
                >
                  <span className="flex items-center gap-2">
                    HandAll <ExternalLink size={16} />
                  </span>
                </a>
                <span className="text-cyan-400 text-xs flex-shrink-0 sm:mt-1">Jan – Mar 2026</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                An AI-powered student planner that breaks down assignments into burnout-aware task blocks and dynamically rebalances your schedule based on how you're feeling.
              </p>
              <p className="text-gray-500 text-xs">Multi-agent orchestration · Google Calendar & iCal sync · Built in 36 hours</p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE TIMELINE ─── */}
      <section id="experience" className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-amber-200 text-xs font-bold uppercase tracking-[0.3em] mb-12">Experience</h2>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[6px] sm:left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gray-700" />

            <div className="space-y-8 sm:space-y-10">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-7 sm:pl-10 md:pl-12 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-[6px] w-[13px] h-[13px] sm:w-[15px] sm:h-[15px] md:w-[19px] md:h-[19px] rounded-full border-2 border-green-400 bg-[#1e1e1e] group-hover:bg-green-400 transition-colors duration-300" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-8">
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-base">{exp.role}</h4>
                      <p className="text-green-400 text-sm">{exp.org}</p>
                      <p className="text-gray-400 text-sm mt-2 leading-relaxed max-w-2xl">{exp.description}</p>
                    </div>
                    <span className="text-cyan-400 text-xs md:text-sm flex-shrink-0 md:mt-1">{exp.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-amber-200 text-xs font-bold uppercase tracking-[0.3em] mb-12">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {skills.map((group, i) => (
              <div key={i}>
                <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <span key={j} className="text-gray-400 text-xs border border-gray-700 px-3 py-1 hover:border-green-400/40 hover:text-gray-200 transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2026 Evan Bhandari</p>
          <div className="flex gap-6 text-gray-500 text-xs">
            <a href="https://github.com/evanbh256" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/evan-bhandari" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:bhandari.nirwan06@gmail.com" className="hover:text-green-400 transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

