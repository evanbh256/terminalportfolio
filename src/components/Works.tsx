import terminalQuestImg from "../assets/projects/Terminal-Quest.png";
import handallImg from "../assets/projects/handall.png";
import portfolioImg from "../assets/projects/web.png";
import kaliImg from "../assets/projects/kali.jpg";

export function Works() {
  const projects = [
    {
      title: "Terminal Quest",
      link: "https://github.com/evanbh256/terminal-quest",
      image: terminalQuestImg,
      highlights: [
        "Built a text-based dungeon RPG where players learn Linux CLI by navigating rooms as directories and interacting with files as items",
        "Integrated Claude AI via Supabase Edge Functions as a dynamic Dungeon Master for level generation, command tutoring, and adaptive quizzes"
      ],
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Framer Motion"],
    },
    {
      title: "HandAll",
      link: "https://github.com/evanbh256/HandAll",
      image: handallImg,
      highlights: [
        "Built full-stack gamified calendar using React, FastAPI, and Node.js",
        "Engineered AI-planner using LangGraph and OpenAI to decompose and dynamically rebalance tasks",
        "Implemented professional Calendar UI with collision detection and smart drag-and-drop",
        "Integrated native bidirectional sync with Google Calendar and robust iCal proxy feed"
      ],
      tags: ["TypeScript", "React", "FastAPI", "LangGraph", "Supabase"],
    },
    {
      title: "Personal Portfolio Website",
      link: "https://github.com/evanbh256/terminalportfolio",
      image: portfolioImg,
      highlights: [
        "Developed high-performance static portfolio using AI-assisted workflow",
        "Leveraged Figma and LLMs for design and implementation",
        "Deployed via serverless GitHub Pages and Cloudflare pipeline",
        "Implemented full version control and continuous deployment"
      ],
      tags: ["TypeScript", "React", "Tailwind CSS", "Figma", "Cloudflare"],
    },
    {
      title: "Cybersecurity Home Lab Environment",
      image: kaliImg,
      highlights: [
        "Engineered multi-OS environment (Kali, Debian, FreeDOS) simulating legacy architectures",
        "Evaluated cross-platform attack vectors",
        "Conducted end-to-end security assessments using Nmap, Wireshark, and Metasploit",
        "Identified, exploited, and remediated critical CVEs and cryptographic weaknesses"
      ],
      tags: ["Virtualization", "Nmap", "Wireshark", "Metasploit", "Security Analysis"],
    },
  ];

  return (
    <div className="w-full text-gray-200 font-mono text-sm leading-relaxed whitespace-pre-wrap">
      <h3 className="text-amber-200 text-lg font-bold mb-6">Projects</h3>
      
      <div className="space-y-8">
        {projects.map((project, idx) => (
          <div key={idx}>
            <h4 className="text-white font-bold text-base mb-1">
              {project.title}
              {'link' in project && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" contentEditable={false} className="ml-2 text-cyan-400 font-normal hover:underline cursor-pointer">
                  [View Source]
                </a>
              )}
            </h4>
            
            <div className="text-green-300 text-xs mb-2">
              Tags: {project.tags.join(", ")}
            </div>

            {'image' in project && (
              <img src={project.image} alt={project.title} className="w-full max-w-2xl max-h-64 rounded-md border border-gray-700/50 my-4 shadow-lg object-cover object-top" />
            )}

            <div className="ml-4">
              {project.highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="text-gray-300 mb-1">- {highlight}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
