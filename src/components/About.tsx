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
        "Relevant Coursework: Operating Environments, Networking, Software Security, Data Structures",
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
      "HTML",
      "CSS",
      "JavaScript",
    ],
    Design: [
      "Photoshop",
      "Premiere Pro",
      "After Effects",
      "Illustrator",
      "Canva",
      "Lightroom",
    ],
    Tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "PowerShell",
      "WordPress",
    ],
    "Operating Systems": ["Linux", "Windows", "MacOS"],
  };

  return (
    <div className="w-full">
      <h2 className="text-green-400 mb-8 font-mono">
        {">"} About
      </h2>

      <div className="space-y-6">
        {/* Bio Section */}
  <div className="bg-background/40 backdrop-blur-sm border border-green-900/30 rounded-lg p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src="/img/evan.jpg"
          alt="Evan's Photo"
          className="w-48 h-48 rounded-lg object-cover"
        />
        <div>
          <p className="text-gray-300 mb-4">
            A self-motivated computer science enthusiast looking
            to grow, develop, and learn. I have been involved in
            many roles, and am always open to any new
            opportunities waiting for me.
          </p>
          <p className="text-gray-300">
            Outside of class you will find me organizing
            student events, doing Capture The Flags, Filming / editing 
            stories that matter and drinking coffee.
          </p>
        </div>
          </div>
        </div>

        {/* Education Section */}
  <div className="bg-background/40 backdrop-blur-sm border border-green-900/30 rounded-lg p-8">
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
                    ? "pt-6 border-t border-green-900/20"
                    : ""
                }
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-green-400">
                      {edu.school}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {edu.location}
                    </p>
                  </div>
                  <span className="text-cyan-400 text-sm font-mono">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-2">
                  {edu.degree}
                </p>
                {edu.details.length > 0 && (
                  <ul className="space-y-1 ml-4">
                    {edu.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-gray-400 text-sm"
                      >
                        – {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
  <div className="bg-background/40 backdrop-blur-sm border border-green-900/30 rounded-lg p-8">
          <h3 className="text-amber-200 mb-6 flex items-center gap-2">
            <Code2 className="w-5 h-5" />
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(technicalSkills).map(
              ([category, skills]) => (
                <div key={category}>
                  <h4 className="text-green-400 mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 bg-green-900/20 text-gray-300 rounded-full border border-green-900/30"
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