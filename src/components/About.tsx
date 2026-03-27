import {
  GraduationCap,
  Code2,
  Palette,
  Terminal,
  Monitor,
} from "lucide-react";

export function About() {
  const education = [
    {
      school: "Dakota State University",
      location: "Madison, SD",
      degree:
        "B.S. Cyber Operations, Minor in Network Security Administration (Honors)",
      period: "Aug 2024 – Dec 2027",
      details: [
        "GPA: 3.73",
        "Recipient of DSU Rising Scholarship and DSU Champion Scholarship",
      ],
    },
    {
      school: "Rato Bangala School",
      location: "Lalitpur, Nepal",
      degree: "Cambridge International A-Levels",
      period: "Jun 2021 – Jun 2022",
      details: [],
    },
  ];

  const technicalSkills = {
    Languages: [
      "Python",
      "C",
      "C++",
      "NASM Assembly",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    "Operating Systems": [
      "Linux (Kali, Debian, Ubuntu)",
      "Windows",
      "Windows Server",
      "FreeDOS",
      "MacOS",
    ],
    "Security Tools": [
      "Metasploit",
      "John the Ripper",
      "Hashcat",
      "Wireshark",
      "Nmap",
    ],
    "Dev Tools": [
      "Git",
      "GitHub",
      "NPM",
      "Cloudflare",
      "VS Code",
      "PowerShell",
      "VirtualBox",
    ],
    "Creative Suite": [
      "Photoshop",
      "Premiere Pro",
      "After Effects",
      "Figma",
      "Affinity",
    ],
  };

  return (
    <div className="w-full">
      <h2 className="text-green-400 mb-8 font-mono">
        {">"} About
      </h2>

      <div className="space-y-6">
        {/* Bio Section */}
  <div className="frosty-window rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
        <div>
          <h3 className="text-amber-200 text-lg font-semibold mb-4">Who I Am</h3>
          <ul className="space-y-2 mb-4">
            <li className="text-white flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Self-motivated Cyber enthusiast passionate about growing and learning</span>
            </li>
            <li className="text-white flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Experienced in multiple roles with openness to new opportunities</span>
            </li>
          </ul>
          <h4 className="text-green-400 font-semibold mb-2">Outside the Classroom:</h4>
          <ul className="space-y-1">
            <li className="text-white flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Organizing student events and community initiatives</span>
            </li>
            <li className="text-white flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Competing in Capture The Flag (CTF) challenges</span>
            </li>
            <li className="text-white flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Brewing and enjoying coffee</span>
            </li>
          </ul>
        </div>
          </div>
        </div>

        {/* Education Section */}
  <div className="frosty-window rounded-lg p-6">
          <h3 className="text-amber-200 mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className={
                  index > 0
                    ? "pt-6 border-t border-white/10"
                    : ""
                }
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-white font-semibold text-base">
                      {edu.school}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {edu.location}
                    </p>
                  </div>
                  <span className="text-cyan-400 text-sm font-mono">
                    {edu.period}
                  </span>
                </div>
                <p className="text-white font-medium mb-2">
                  {edu.degree}
                </p>
                {edu.details.length > 0 && (
                  <ul className="space-y-1 ml-2">
                    {edu.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-gray-200 text-sm flex items-start gap-2"
                      >
                        <span className="text-green-400">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
  <div className="frosty-window rounded-lg p-8">
          <h3 className="text-amber-200 mb-6 flex items-center gap-2">
            <Code2 className="w-5 h-5" />
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(technicalSkills).map(
              ([category, skills]) => (
                <div key={category}>
                  <h4 className="text-white font-semibold mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 bg-green-900/20 text-green-300 rounded-full border border-green-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}