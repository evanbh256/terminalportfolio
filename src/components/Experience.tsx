import { Briefcase, Users } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Resident Assistant",
      organization: "Dakota State University - Residence Life",
      location: "Madison, SD",
      period: "Aug 2025 – Present",
      description: "Mentor and support 40+ residents; plan programs to enhance community engagement and address resident concerns.",
      skills: ["Leadership", "Community Building", "Conflict Resolution"],
    },
    {
      type: "work",
      title: "Production Intern",
      organization: "Encore Media",
      location: "Kathmandu, Nepal",
      period: "Aug 2023 – Apr 2024",
      description: "Produced 10+ professional videos using Premiere Pro and After Effects; created graphic assets in Photoshop and Canva. Managed WordPress website development and updates for multiple clients. Implemented SEO and digital marketing strategies, delivering reports that improved rankings and engagement.",
      skills: ["Premiere Pro", "After Effects", "Photoshop", "WordPress", "SEO"],
    },
    {
      type: "work",
      title: "Social Media Intern",
      organization: "Friend Of Nature",
      location: "Kathmandu, Nepal",
      period: "Jan 2022",
      description: "Audited organization's website and social media presence; compiled improvement report with actionable strategies. Recommended design, content, and engagement initiatives to expand outreach.",
      skills: ["Social Media", "Content Strategy", "Analytics"],
    },
    {
      type: "leadership",
      title: "President, International Club",
      organization: "Dakota State University",
      location: "Madison, SD",
      period: "Aug 2025 – Present",
      description: "Lead cultural initiatives and campus events to foster international engagement among 200+ students.",
      skills: ["Leadership", "Event Planning", "Cultural Engagement"],
    },
    {
      type: "leadership",
      title: "Vice President, Residence Hall Council",
      organization: "Dakota State University",
      location: "Madison, SD",
      period: "Sep 2024 – May 2025",
      description: "Organized weekly council meetings; addressed resident issues and coordinated events to build community spirit.",
      skills: ["Organization", "Communication", "Event Coordination"],
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
                    : exp.type === "leadership"
                    ? "bg-purple-900/20 text-purple-400"
                    : "bg-blue-900/20 text-blue-400"
                } border ${
                  exp.type === "work"
                    ? "border-green-900/50"
                    : exp.type === "leadership"
                    ? "border-purple-900/50"
                    : "border-blue-900/50"
                }`}>
                  {exp.type === "work" ? (
                    <Briefcase className="w-6 h-6" />
                  ) : (
                    <Users className="w-6 h-6" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-amber-200">{exp.title}</h3>
                      <p className="text-gray-400 text-sm">{exp.organization}</p>
                      <p className="text-gray-500 text-xs">{exp.location}</p>
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
