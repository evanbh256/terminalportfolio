import { Code2, Database, Palette, Video, Shield, Layout } from "lucide-react";

export function About() {
  const skills = [
    { icon: Code2, name: "Web Development", color: "text-orange-400" },
    { icon: Database, name: "Python", color: "text-blue-400" },
    { icon: Palette, name: "Photoshop", color: "text-cyan-400" },
    { icon: Video, name: "Premiere Pro", color: "text-purple-400" },
    { icon: Shield, name: "Cybersecurity", color: "text-green-400" },
    { icon: Layout, name: "UI/UX Design", color: "text-pink-400" },
  ];

  return (
    <div className="w-full">
      <h2 className="text-green-400 mb-8 font-mono">{'>'} About</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-black/40 backdrop-blur-sm border border-green-900/30 rounded-lg p-8">
          <p className="text-gray-300 mb-4">
            I'm a self-motivated cyber operations student at Dakota State University. 
            I connect technical work with human-centered design—spanning cybersecurity, 
            video production, graphics, and event operations.
          </p>
          <p className="text-gray-300">
            Outside class, you'll find me organizing student events, tuning web UIs, 
            and filming/editing stories that matter.
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-sm border border-green-900/30 rounded-lg p-6">
          <h3 className="text-amber-200 mb-4">Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 p-3 bg-black/30 rounded-lg border border-green-900/20 hover:border-green-900/50 transition-all"
              >
                <skill.icon className={`w-8 h-8 ${skill.color}`} />
                <span className="text-xs text-gray-400 text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
