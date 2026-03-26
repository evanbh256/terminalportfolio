import { Briefcase, Users } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Resident Assistant",
      organization: "Dakota State University - Residence Life",
      location: "Madison, SD",
      period: "Aug 2025 – Present",
      description: "Leading community safety and emergency response for 40+ residents, facilitating conflict resolution and policy compliance.",
      skills: ["Leadership", "Community Building", "Conflict Resolution"],
    },
    {
      type: "work",
      title: "Barista",
      organization: "Starbucks - Dakota State University",
      location: "Madison, SD",
      period: "Feb 2026 – Present",
      description: "Executing high-volume orders with strict adherence to standardized procedures and technical specifications.",
      skills: ["Customer Service", "Order Management", "Time Management"],
    },
    {
      type: "work",
      title: "Food Service Worker",
      organization: "Sodexo - Dakota State University",
      location: "Madison, SD",
      period: "Dec 2024 – Feb 2026",
      description: "Maintained consistent service output for 500+ daily users, ensuring compliance with health and safety protocols.",
      skills: ["Food Service", "Sanitation", "Customer Service"],
    },
    {
      type: "work",
      title: "Production Intern",
      organization: "Encore Media",
      location: "Kathmandu, Nepal",
      period: "Aug 2023 – Apr 2024",
      description: "Managed the full development lifecycle for 10-15 WordPress client websites. Developed digital marketing campaigns driving social media engagement to over 40,000 views. Produced 20+ professional video assets using Premiere Pro and After Effects.",
      skills: ["Premiere Pro", "After Effects", "WordPress", "Figma", "Digital Marketing"],
    },
    {
      type: "leadership",
      title: "President, International Club",
      organization: "Dakota State University",
      location: "Madison, SD",
      period: "Aug 2025 – Present",
      description: "Lead cultural initiatives and campus-wide events to foster engagement among a diverse body of 200+ international students.",
      skills: ["Leadership", "Event Planning", "Cultural Engagement"],
    },
    {
      type: "leadership",
      title: "Vice President, Residence Hall Council",
      organization: "Dakota State University",
      location: "Madison, SD",
      period: "Sep 2024 – May 2025",
      description: "Facilitated weekly council meetings to address resident concerns and coordinated budget/planning for community events.",
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
              className="frosty-window rounded-lg p-6 hover:bg-white/10 transition-all"
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
                    ? "border-white/10"
                    : exp.type === "leadership"
                    ? "border-white/10"
                    : "border-white/10"
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
                        className="text-xs px-3 py-1 bg-white/5 text-green-400 rounded-full border border-white/10"
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
