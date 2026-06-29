import React from 'react';
import { ExternalLink } from 'lucide-react';

export function SimplePortfolio() {
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
    { name: 'eCitadel', result: 'Participant — Database & Router', date: 'Jun 2026', detail: 'Defended an AD Domain Controller against live Red Team attacks. Hardened Windows Server with Sysmon monitoring.' },
    { name: 'HiveCTF', result: '1st Place (DSU Bracket)', date: 'Apr 2026', detail: 'Solved web exploitation, crypto, and reverse engineering challenges in a competitive CTF.' },
    { name: 'SillyCTF', result: '6th Place Overall', date: 'Apr 2026', detail: 'Cracked advanced OSINT and crypto challenges in a global competition hosted by Penn State.' },
    { name: 'Ignite Hackathon', result: 'Full Stack Developer', date: 'Feb 2026', detail: 'Built a browser-based dungeon RPG with Supabase Edge Functions and Gemini AI in a sprint hackathon.' },
    { name: 'NCAE Cyber Games', result: '5th Place Regionals', date: 'Feb 2026', detail: 'Maintained critical database and routing services under sustained adversarial pressure in a simulated enterprise defense.' },
    { name: 'Nepal-US Hackathon', result: 'Lead Frontend / Full Stack', date: 'Feb 2026', detail: 'Delivered an AI student productivity tool with LangGraph automation and calendar sync in 36 hours.' },
  ];

  const skills = [
    { category: 'Languages', items: ['Python', 'C', 'C++', 'NASM Assembly', 'HTML', 'CSS', 'JavaScript', 'TypeScript'] },
    { category: 'Systems', items: ['Linux (Kali, Debian, Ubuntu)', 'Windows Server', 'FreeDOS', 'MacOS'] },
    { category: 'Security', items: ['Metasploit', 'John the Ripper', 'Hashcat', 'Wireshark', 'Nmap'] },
    { category: 'Dev & Cloud', items: ['React', 'Next.js', 'Node.js', 'Git', 'Supabase', 'Cloudflare', 'VirtualBox'] },
  ];

  return (
    <div className="w-full bg-[#1e1e1e] text-gray-200 font-mono border-t border-gray-800">

      {/* ─── ABOUT ─── */}
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-24 md:py-32">
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
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 border-t border-gray-800">
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
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-amber-200 text-xs font-bold uppercase tracking-[0.3em] mb-12">Competitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions.map((comp, i) => (
              <div key={i} className="border border-gray-700 p-5 sm:p-6 hover:border-amber-200/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-2">
                  <h4 className="text-white font-bold text-sm">{comp.name}</h4>
                  <span className="text-cyan-400 text-xs flex-shrink-0">{comp.date}</span>
                </div>
                <p className="text-green-400 text-xs mb-3">{comp.result}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{comp.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 border-t border-gray-800">
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
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 border-t border-gray-800">
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
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 border-t border-gray-800">
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
      <footer className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2026 Evan Bhandari</p>
          <div className="flex gap-6 text-gray-500 text-xs">
            <a href="https://github.com/evanbh256" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/evan-bhandari" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">LinkedIn</a>
            <a href="mailto:bhandari.nirwan06@gmail.com" className="hover:text-green-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
