import { Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import handallImg from "../assets/projects/handall.png";
import webImg from "../assets/projects/web.png";
import ncaeImg from "../assets/projects/ncae.jpg";
import kaliImg from "../assets/projects/kali.jpg";

export function Works() {
  const projects = [
    {
      title: "HandAll",
      link: "https://github.com/evanbh256/HandAll",
      highlights: [
        <>Built full-stack gamified calendar using <strong>React</strong>, <strong>FastAPI</strong>, and <strong>Node.js</strong></>,
        <>Engineered <strong>AI-planner</strong> using LangGraph and OpenAI to decompose and dynamically rebalance tasks</>,
        <>Implemented professional <strong>Calendar UI</strong> with collision detection and smart drag-and-drop</>,
        <>Integrated native bidirectional sync with <strong>Google Calendar</strong> and robust iCal proxy feed</>
      ],
      image: handallImg,
      tags: ["TypeScript", "React", "FastAPI", "LangGraph", "Supabase"],
    },
    {
      title: "Personal Portfolio Website",
      link: "https://github.com/evanbh256/terminalportfolio",
      highlights: [
        <>Developed high-performance static portfolio using AI-assisted workflow</>,
        <>Leveraged <strong>Figma</strong> and LLMs for design and implementation</>,
        <>Deployed via serverless <strong>GitHub Pages</strong> and <strong>Cloudflare</strong> pipeline</>,
        <>Implemented full version control and continuous deployment</>
      ],
      image: webImg,
      tags: ["TypeScript", "React", "Tailwind CSS", "Figma", "Cloudflare"],
    },
    {
      title: "NCAE Cyber Games 2026",
      highlights: [
        <>Placed <strong>5th in Regionals</strong></>,
        <>Engineered <strong>defensive strategies</strong> to secure simulated corporate network</>,
        <>Competed against professional <strong>Red Team</strong> attackers</>,
        <>Designed robust <strong>cyber defense strategies</strong> in competitive environment</>
      ],
      image: ncaeImg,
      tags: ["Cybersecurity", "Defensive Strategies", "Network Security"],
    },
    {
      title: "Cybersecurity Home Lab Environment",
      highlights: [
        <>Engineered multi-OS environment (<strong>Kali</strong>, <strong>Debian</strong>, <strong>FreeDOS</strong>) simulating legacy architectures</>,
        <>Evaluated cross-platform <strong>attack vectors</strong></>,
        <>Conducted end-to-end security assessments using <strong>Nmap</strong>, <strong>Wireshark</strong>, and <strong>Metasploit</strong></>,
        <>Identified, exploited, and remediated critical <strong>CVEs</strong> and <strong>cryptographic weaknesses</strong></>
      ],
      image: kaliImg,
      tags: ["Virtualization", "Nmap", "Wireshark", "Metasploit", "Security Analysis"],
    },
  ];

  return (
    <div className="w-full">


      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="frosty-window-2 rounded-lg overflow-hidden hover:bg-white/10 transition-all group"
          >
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-white font-semibold text-base mb-3">{project.title}</h3>
              <ul className="space-y-1 mb-4">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-200 text-sm flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-green-900/20 text-green-300 rounded border border-green-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {'link' in project && typeof project.link === 'string' && (
                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-green-400 transition-colors px-3 py-1.5 bg-white/5 border border-white/10 rounded hover:bg-white/10 group-hover:border-white/20"
                  >
                    <Github className="w-4 h-4" />
                    View Source
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
