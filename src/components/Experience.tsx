import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Cybersecurity Intern",
      organization: "Tech Security Corp",
      period: "Summer 2024",
      description: "Conducted vulnerability assessments and penetration testing. Developed automated security monitoring scripts using Python.",
      skills: ["Python", "Network Security", "Penetration Testing"],
    },
    {
      type: "work",
      title: "Video Production Lead",
      organization: "University Media Center",
      period: "2023 - Present",
      description: "Leading production team for university events. Managing video editing, live streaming, and multimedia content creation.",
      skills: ["Premiere Pro", "After Effects", "Live Production"],
    },
    {
      type: "education",
      title: "B.S. Cyber Operations",
      organization: "Dakota State University",
      period: "2022 - 2026",
      description: "Focus on offensive security, network defense, and digital forensics. Active member of cybersecurity club and CTF team.",
      skills: ["Cybersecurity", "Network Defense", "Forensics"],
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-green-400 mb-8 font-mono">{'>'} Experience</h2>
      
      <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-green-900/30 rounded-lg p-6 hover:border-green-700/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  exp.type === "work" 
                    ? "bg-green-900/20 text-green-400" 
                    : "bg-blue-900/20 text-blue-400"
                } border ${
                  exp.type === "work"
                    ? "border-green-900/50"
                    : "border-blue-900/50"
                }`}>
                  {exp.type === "work" ? (
                    <Briefcase className="w-6 h-6" />
                  ) : (
                    <GraduationCap className="w-6 h-6" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-amber-200">{exp.title}</h3>
                      <p className="text-gray-400 text-sm">{exp.organization}</p>
                    </div>
                    <span className="text-green-400 text-sm font-mono">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 bg-green-900/20 text-green-400 rounded-full border border-green-900/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
