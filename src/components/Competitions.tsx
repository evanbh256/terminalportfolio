export function Competitions() {
  const competitions = [
    {
      title: "HiveCTF",
      highlights: [
        "1st Place (DSU) / 4th Place Overall (Feb 2026)",
        "Solved challenges across OSINT, forensics, and steganography",
        "Applied investigative techniques to extract hidden data, trace digital footprints, and analyze artifacts embedded in files and images"
      ],
      tags: ["CTF", "OSINT", "Forensics", "Steganography"],
    },
    {
      title: "SillyCTF",
      highlights: [
        "6th Place Overall (Apr 2026)",
        "Competed in an open global competition organized by Penn State University",
        "Focused on OSINT and cryptography challenges"
      ],
      tags: ["CTF", "OSINT", "Cryptography"],
    },
    {
      title: "NCAE Cyber Games 2026",
      highlights: [
        "Placed 5th in Regionals (Feb 2026)",
        "Defended a simulated corporate network against professional Red Team attackers",
        "Configured and hardened Nginx, maintaining web server uptime throughout the competition",
        "Designed robust cyber defense strategies in competitive environment"
      ],
      tags: ["Cybersecurity", "Defensive Strategies", "Network Security", "Nginx"],
    },
  ];

  return (
    <div className="w-full text-gray-200 font-mono text-sm leading-relaxed whitespace-pre-wrap">
      <h3 className="text-amber-200 text-lg font-bold mb-6">Competitions</h3>
      
      <div className="space-y-8">
        {competitions.map((comp, idx) => (
          <div key={idx}>
            <h4 className="text-white font-bold text-base mb-1">
              {comp.title}
            </h4>
            
            <div className="text-green-300 text-xs mb-2">
              Tags: {comp.tags.join(", ")}
            </div>

            <div className="ml-4">
              {comp.highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="text-gray-300 mb-1">- {highlight}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
