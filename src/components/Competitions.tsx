export function Competitions() {
  const competitions = [
    {
      place: "1st",
      meta: "/ 4th Overall",
      title: "HiveCTF",
      date: "Feb 2026",
      tags: ["CTF", "OSINT", "Forensics", "Steganography"],
      highlights: [
        "Solved challenges across OSINT, forensics, and steganography",
        "Applied investigative techniques to extract hidden data, trace digital footprints, and analyze artifacts embedded in files and images"
      ]
    },
    {
      place: "5th",
      meta: "Regionals",
      title: "NCAE Cyber Games 2026",
      date: "Feb 2026",
      tags: ["Cybersecurity", "Defensive Strategies", "Network Security", "Nginx"],
      highlights: [
        "Defended a simulated corporate network against professional Red Team attackers",
        "Configured and hardened Nginx, maintaining web server uptime throughout the competition",
        "Designed robust cyber defense strategies in competitive environment"
      ]
    },
    {
      place: "6th",
      meta: "Overall",
      title: "SillyCTF",
      date: "Apr 2026",
      tags: ["CTF", "OSINT", "Cryptography"],
      highlights: [
        "Competed in an open global competition organized by Penn State University",
        "Focused on OSINT and cryptography challenges"
      ]
    },
  ];

  return (
    <div className="w-full text-gray-200 font-mono text-sm leading-relaxed whitespace-pre-wrap">
      <h3 className="text-amber-200 text-lg font-bold mb-6">Competitions</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitions.map((comp, idx) => (
          <div 
            key={idx} 
            className="border border-gray-700 p-5 sm:p-6 hover:border-amber-200/30 transition-colors duration-300 flex flex-col items-center text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-amber-200 mb-2">
              {comp.place}
            </div>
            <div className="text-cyan-400 text-xs mb-4">
              {comp.meta} • {comp.date}
            </div>
            <h4 className="text-white font-bold text-sm mb-2">
              {comp.title}
            </h4>
            <div className="text-green-300 text-[10px] sm:text-xs mb-4">
              {comp.tags.join(" • ")}
            </div>
            <div className="text-gray-400 text-xs leading-relaxed space-y-2 text-left w-full">
              {comp.highlights.map((h, i) => <div key={i}>- {h}</div>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
