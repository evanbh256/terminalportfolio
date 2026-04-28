export function About() {
  const education = [
    {
      school: "Dakota State University",
      location: "Madison, SD",
      degree:
        "B.S. Cyber Operations, Minor in Network Security Administration (Honors)",
      period: "Aug 2024 - Dec 2027",
      details: [
        "GPA: 3.73",
        "Recipient of DSU Rising Scholarship and DSU Champion Scholarship",
      ],
    },
    {
      school: "Rato Bangala School",
      location: "Lalitpur, Nepal",
      degree: "Cambridge International A-Levels",
      period: "Jun 2021 - Jun 2022",
      details: [],
    },
  ];

  const technicalSkills = {
    Languages: [
      "Python", "TypeScript", "JavaScript", "C", "C++", "NASM Assembly", "HTML", "CSS"
    ],
    "Frameworks & Databases": [
      "React", "Next.js", "Node.js", "Express", "FastAPI", "Prisma", "SQLite", "Supabase"
    ],
    "Operating Systems": [
      "Linux (Kali, Debian, Ubuntu)", "Windows", "Windows Server", "FreeDOS", "MacOS"
    ],
    "Security Tools": [
      "Metasploit", "John the Ripper", "Hashcat", "Wireshark", "Nmap"
    ],
    "Dev Tools": [
      "Git", "GitHub", "Supabase", "Cloudflare", "VS Code", "PowerShell", "VirtualBox"
    ],
    "Creative Suite": [
      "Photoshop", "Premiere Pro", "After Effects", "Figma", "Affinity"
    ],
  };

  return (
    <div className="w-full text-gray-200 font-mono text-sm leading-relaxed whitespace-pre-wrap">

      {/* Bio Section */}
      <div className="mb-8">
        <h3 className="text-amber-200 text-lg font-bold mb-2">Who I Am</h3>
        <p className="mb-2">
          - Self-motivated Cyber enthusiast passionate about growing and learning
          <br/>
          - Experienced in multiple roles with openness to new opportunities
        </p>

        <h4 className="text-green-400 font-semibold mt-4 mb-1">Outside the Classroom:</h4>
        <p>
          - Organizing student events and community initiatives
          <br/>
          - Competing in Capture The Flag (CTF) challenges
          <br/>
          - Brewing and enjoying coffee
        </p>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h3 className="text-amber-200 text-lg font-bold mb-4">Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-white font-semibold text-base">{edu.school} - <span className="text-gray-400 font-normal">{edu.location}</span></h4>
            <div className="text-cyan-400 text-sm mb-1">{edu.period}</div>
            <div className="text-white font-medium mb-1">{edu.degree}</div>
            {edu.details.length > 0 && (
              <div className="ml-4">
                {edu.details.map((detail, idx) => (
                  <div key={idx} className="text-gray-300">- {detail}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Technical Skills Section */}
      <div className="mb-8">
        <h3 className="text-amber-200 text-lg font-bold mb-4">Technical Skills</h3>
        <div className="space-y-4">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div key={category}>
              <span className="text-white font-semibold">{category}: </span>
              <span className="text-green-300">{skills.join(", ")}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
