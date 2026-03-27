import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Works() {
  const projects = [
    {
      title: "NCAE Cyber Games 2026",
      highlights: [
        <>Placed <strong>5th in Regionals</strong></>,
        <>Engineered <strong>defensive strategies</strong> to secure simulated corporate network</>,
        <>Competed against professional <strong>Red Team</strong> attackers</>,
        <>Designed robust <strong>cyber defense strategies</strong> in competitive environment</>
      ],
      image: "/img/ncae.jpg",
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
      image: "/img/kali.jpg",
      tags: ["Virtualization", "Nmap", "Wireshark", "Metasploit", "Security Analysis"],
    },
    {
      title: "Personal Portfolio Website",
      highlights: [
        <>Developed high-performance static portfolio using AI-assisted workflow</>,
        <>Leveraged <strong>Figma</strong> and LLMs for design and implementation</>,
        <>Deployed via serverless <strong>GitHub Pages</strong> and <strong>Cloudflare</strong> pipeline</>,
        <>Implemented full version control and continuous deployment</>
      ],
      image: "img/web.png",
      tags: ["TypeScript", "React", "Tailwind CSS", "Figma", "Cloudflare"],
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-green-400 mb-8 font-mono">{'>'} Works</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-green-900/20 text-green-300 rounded border border-green-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
