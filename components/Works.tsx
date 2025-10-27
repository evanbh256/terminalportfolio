import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

export function Works() {
  const projects = [
    {
      title: "Cybersecurity Dashboard",
      description: "A real-time threat monitoring dashboard for network security analysis with ML-powered anomaly detection.",
      image: "https://images.unsplash.com/photo-1637904743105-3118bbe3ed8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzYxNTExMTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Python", "React", "MongoDB"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Event Management Platform",
      description: "Full-stack platform for managing university events, with registration, ticketing, and analytics features.",
      image: "https://images.unsplash.com/photo-1725800066480-7ccf189e9513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NjE1OTIwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Node.js", "PostgreSQL", "Tailwind"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Portfolio Design System",
      description: "A comprehensive design system and component library for creating modern, accessible web applications.",
      image: "https://images.unsplash.com/photo-1730794545099-14902983739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYxNDk5MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["TypeScript", "React", "Figma"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-green-400 mb-8 font-mono">{'>'} Works</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-black/40 backdrop-blur-sm border border-green-900/30 rounded-lg overflow-hidden hover:border-green-700/50 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-amber-200 mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-green-900/20 text-green-400 rounded border border-green-900/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-green-400"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-green-400"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
