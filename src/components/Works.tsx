export function Works() {
  const projects = [
    {
      title: "HandAll",
      link: "https://github.com/evanbh256/HandAll",
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
      highlights: [
        "Developed high-performance static portfolio using AI-assisted workflow",
        "Leveraged Figma and LLMs for design and implementation",
        "Deployed via serverless GitHub Pages and Cloudflare pipeline",
        "Implemented full version control and continuous deployment"
      ],
      tags: ["TypeScript", "React", "Tailwind CSS", "Figma", "Cloudflare"],
    },
    {
      title: "NCAE Cyber Games 2026",
      highlights: [
        "Placed 5th in Regionals",
        "Engineered defensive strategies to secure simulated corporate network",
        "Competed against professional Red Team attackers",
        "Designed robust cyber defense strategies in competitive environment"
      ],
      tags: ["Cybersecurity", "Defensive Strategies", "Network Security"],
    },
    {
      title: "Cybersecurity Home Lab Environment",
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
      <h3 className="text-amber-200 text-lg font-bold mb-6">Projects & Works</h3>
      
      <div className="space-y-8">
        {projects.map((project, idx) => (
          <div key={idx}>
            <h4 className="text-white font-bold text-base mb-1">
              {project.title}
              {'link' in project && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-cyan-400 font-normal hover:underline cursor-pointer">
                  [View Source]
                </a>
              )}
            </h4>
            
            <div className="text-green-300 text-xs mb-2">
              Tags: {project.tags.join(", ")}
            </div>

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
