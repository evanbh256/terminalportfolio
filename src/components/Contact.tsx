import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "bhanadari.nirwan06@gmail.com",
      href: "mailto:bhanadari.nirwan06@gmail.com",
      color: "text-green-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/evan-bhandari",
      href: "https://www.linkedin.com/in/evan-bhandari-aa7b19218",
      color: "text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "https://github.com/evanbh256",
      href: "https://github.com/evanbh256",
      color: "text-purple-400",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-green-400 mb-8 font-mono">{'>'} Contact</h2>
      
      <div>
        <div className="frosty-window rounded-lg p-8">
          <h3 className="text-amber-200 mb-4">Get in Touch</h3>
          <p className="text-gray-300 mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
          </p>
          
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all group"
              >
                <link.icon className={`w-5 h-5 ${link.color}`} />
                <div>
                  <p className="text-gray-400 text-sm">{link.label}</p>
                  <p className="text-gray-300 group-hover:text-green-400 transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
