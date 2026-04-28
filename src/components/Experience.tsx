export function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Resident Assistant",
      organization: "Dakota State University - Residence Life",
      location: "Madison, SD",
      period: "Aug 2025 - Present",
      description: "Leading community safety and emergency response for 40+ residents, facilitating conflict resolution and policy compliance.",
      skills: ["Leadership", "Community Building", "Conflict Resolution"],
    },
    {
      type: "work",
      title: "Barista",
      organization: "Starbucks - Dakota State University",
      location: "Madison, SD",
      period: "Feb 2026 - Present",
      description: "Executing high-volume orders with strict adherence to standardized procedures and technical specifications.",
      skills: ["Customer Service", "Order Management", "Time Management"],
    },
    {
      type: "work",
      title: "Food Service Worker",
      organization: "Sodexo - Dakota State University",
      location: "Madison, SD",
      period: "Dec 2024 - Feb 2026",
      description: "Maintained consistent service output for 500+ daily users, ensuring compliance with health and safety protocols.",
      skills: ["Food Service", "Sanitation", "Customer Service"],
    },
    {
      type: "work",
      title: "Production Intern",
      organization: "Encore Media",
      location: "Kathmandu, Nepal",
      period: "Aug 2023 - Apr 2024",
      description: "Managed the full development lifecycle for 10-15 WordPress client websites. Developed digital marketing campaigns driving social media engagement to over 40,000 views. Produced 20+ professional video assets using Premiere Pro and After Effects.",
      skills: ["Premiere Pro", "After Effects", "WordPress", "Figma", "Digital Marketing"],
    },
    {
      type: "leadership",
      title: "President, International Club",
      organization: "Dakota State University",
      location: "Madison, SD",
      period: "Aug 2025 - Present",
      description: "Lead cultural initiatives and campus-wide events to foster engagement among a diverse body of 200+ international students.",
      skills: ["Leadership", "Event Planning", "Cultural Engagement"],
    },
    {
      type: "leadership",
      title: "Vice President, Residence Hall Council",
      organization: "Dakota State University",
      location: "Madison, SD",
      period: "Sep 2024 - May 2025",
      description: "Facilitated weekly council meetings to address resident concerns and coordinated budget/planning for community events.",
      skills: ["Organization", "Communication", "Event Coordination"],
    },
  ];

  return (
    <div className="w-full text-gray-200 font-mono text-sm leading-relaxed whitespace-pre-wrap">
      <h3 className="text-amber-200 text-lg font-bold mb-6">Experience</h3>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index}>
            <h4 className="text-white font-bold text-base mb-1">
              {exp.title}
            </h4>
            <div className="text-gray-400 font-normal mb-1">
              {exp.organization} - {exp.location}
            </div>
            
            <div className="text-cyan-400 text-sm mb-2">{exp.period}</div>
            
            <div className="text-gray-300 mb-2">
              {exp.description}
            </div>
            
            <div className="text-green-300 text-xs">
              Skills: {exp.skills.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
